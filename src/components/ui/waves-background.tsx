import { useEffect, useRef } from "react";

export const WavesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const createGrid = () => {
      const points = [];
      const count = 40;
      const spacing = 50;

      for (let x = 0; x < count; x++) {
        for (let y = 0; y < count; y++) {
          points.push({
            x: x * spacing - (count * spacing) / 3,
            y: y * spacing - (count * spacing) / 3,
            baseX: x * spacing - (count * spacing) / 3,
            baseY: y * spacing - (count * spacing) / 3,
          });
        }
      }

      return points;
    };

    const points = createGrid();

    const animate = () => {
      ctx.fillStyle = "rgb(10, 10, 15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.01;

      points.forEach((point) => {
        const distX = mouseX * 100;
        const distY = mouseY * 100;

        point.x = point.baseX + Math.sin(time + point.baseX * 0.01) * 2 + distX;
        point.y = point.baseY + Math.cos(time + point.baseY * 0.01) * 2 + distY;

        ctx.beginPath();
        ctx.arc(point.x, point.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(139, 92, 246, 0.5)";
        ctx.fill();

        // Draw lines between nearby points
        points.forEach((otherPoint) => {
          const dx = point.x - otherPoint.x;
          const dy = point.y - otherPoint.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 50) {
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - dist / 50)})`;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 h-full w-full bg-[#0A0A0F]"
    />
  );
}; 