import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  color: string;
  delay: number;
  drift: number;
}

const CONFETTI_COLORS = [
  "hsl(0, 55%, 35%)",
  "hsl(38, 60%, 55%)",
  "hsl(150, 15%, 22%)",
  "hsl(38, 35%, 85%)",
  "hsl(0, 55%, 50%)",
  "hsl(38, 50%, 70%)",
];

const createConfetti = (count: number): ConfettiPiece[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: -10 - Math.random() * 20,
    rotation: Math.random() * 360,
    scale: 0.5 + Math.random() * 0.8,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    delay: Math.random() * 0.8,
    drift: (Math.random() - 0.5) * 40,
  }));

const DateReveal = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const isDrawing = useRef(false);
  const revealedPixels = useRef(0);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    ctx.fillStyle = "hsl(150, 15%, 22%)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = "600 14px 'Montserrat', sans-serif";
    ctx.fillStyle = "hsl(38, 35%, 85%)";
    ctx.textAlign = "center";
    ctx.fillText("Scratch to discover the date", canvas.width / 2, canvas.height / 2 + 5);
  }, []);

  useEffect(() => {
    initCanvas();
  }, [initCanvas]);

  const triggerConfetti = () => {
    setConfetti(createConfetti(100));
    setTimeout(() => setConfetti([]), 4000);
  };

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.fill();

    revealedPixels.current += 1;
    if (revealedPixels.current > 40 && !revealed) {
      setRevealed(true);
      triggerConfetti();
    }
  };

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    if ("touches" in e) {
      return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
    }
    return { x: (e as React.MouseEvent).clientX - rect.left, y: (e as React.MouseEvent).clientY - rect.top };
  };

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    isDrawing.current = true;
    const pos = getPos(e);
    scratch(pos.x, pos.y);
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing.current) return;
    const pos = getPos(e);
    scratch(pos.x, pos.y);
  };

  const handleEnd = () => {
    isDrawing.current = false;
  };

  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Confetti */}
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{ x: `${piece.x}vw`, y: `${piece.y}vh`, rotate: 0, opacity: 1 }}
          animate={{
            y: "110vh",
            x: `${piece.x + piece.drift}vw`,
            rotate: piece.rotation + 720,
            opacity: [1, 1, 0.8, 0],
          }}
          transition={{
            duration: 2.5 + Math.random(),
            delay: piece.delay,
            ease: "easeIn",
          }}
          className="absolute z-50 pointer-events-none"
          style={{
            width: `${8 * piece.scale}px`,
            height: `${12 * piece.scale}px`,
            backgroundColor: piece.color,
            borderRadius: "1px",
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto text-center"
      >
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">Reveal</h2>
        <p className="font-body text-lg text-muted-foreground mb-8">Scratch to discover the date</p>

        <div className="relative w-72 h-32 mx-auto rounded-sm overflow-hidden">
          {/* Date behind */}
          <div className="absolute inset-0 flex items-center justify-center gap-6 bg-secondary">
            <div className="text-center">
              <span className="font-display text-5xl text-foreground">22</span>
            </div>
            <div className="text-center">
              <span className="font-display text-3xl text-foreground italic">April</span>
            </div>
            <div className="text-center">
              <span className="font-display text-5xl text-foreground">2026</span>
            </div>
          </div>
          {/* Scratch overlay */}
          {!revealed && (
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full scratch-canvas"
              onMouseDown={handleStart}
              onMouseMove={handleMove}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
              onTouchStart={handleStart}
              onTouchMove={handleMove}
              onTouchEnd={handleEnd}
            />
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default DateReveal;
