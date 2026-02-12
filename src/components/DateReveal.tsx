import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const DateReveal = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
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
    if (revealedPixels.current > 40) {
      setRevealed(true);
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
    <section className="py-24 px-6 bg-background">
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
              <span className="font-display text-5xl text-foreground">10</span>
            </div>
            <div className="text-center">
              <span className="font-display text-3xl text-foreground italic">Sept</span>
            </div>
            <div className="text-center">
              <span className="font-display text-5xl text-foreground">2027</span>
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
