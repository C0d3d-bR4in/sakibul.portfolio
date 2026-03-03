import { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringPosRef = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hoverType, setHoverType] = useState<"default" | "interactive" | "text">("default");

  useEffect(() => {
    let animId: number;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    const updatePosition = () => {
      // Direct DOM manipulation for raw dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      }

      // Lerp logic for trailing ring wrapper
      current.x += (target.x - current.x) * 0.15;
      current.y += (target.y - current.y) * 0.15;

      if (ringPosRef.current) {
        ringPosRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      }

      animId = requestAnimationFrame(updatePosition);
    };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;

      const targetEl = e.target as HTMLElement;
      if (targetEl && targetEl.closest) {
        // Detect intention via tags since CSS cursor is hidden
        const isInteractive = !!targetEl.closest(
          'a, button, [role="button"], [role="link"], input, select, textarea, .cursor-pointer, h1, h3'
        );

        if (isInteractive) {
          setHoverType("interactive");
        } else {
          setHoverType("default");
        }
      }

      setVisible(true);
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    // Start animation loop
    updatePosition();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!visible) return null;

  const isSpecialHover = hoverType === "interactive";

  // Sizes to offset standard top/left so the transform centers the elements at the mouse
  const ringSize = isSpecialHover ? (clicking ? 25 : 50) : 0;
  const ringOffset = ringSize / 2;

  return (
    <>
      {/* 1. Trailing Neon Circle Wrapper (handles position via JS) */}
      <div
        ref={ringPosRef}
        className={`fixed pointer-events-none z-[9998] will-change-transform ${isSpecialHover ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        style={{
          top: 0,
          left: 0,
        }}
      >
        {/* Actual Ring Element (handles CSS animations/resizing) */}
        <div
          className={`absolute rounded-full border-[2.5px] border-primary transition-[width,height,top,left] duration-300 ease-out ${isSpecialHover && !clicking ? "cursor-pulse" : ""
            }`}
          style={{
            width: ringSize,
            height: ringSize,
            top: -ringOffset,
            left: -ringOffset,
            boxShadow: clicking ? "0 0 15px hsl(var(--primary)/0.8), inset 0 0 10px hsl(var(--primary)/0.5)" : "none",
          }}
        />
      </div>

      {/* 2. Main Arrow Pointer & Inner Dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] will-change-transform origin-top-left"
        style={{
          top: 0,
          left: 0,
        }}
      >
        {/* Main Arrow */}
        <div className={`absolute top-0 left-0 transition-all duration-300 ease-out origin-top-left ${isSpecialHover ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="filter drop-shadow-[0_0_8px_hsl(var(--primary)/0.8)]"
            style={{ transform: clicking ? "scale(0.85)" : "scale(1)", transition: "transform 0.1s" }}
          >
            <path
              d="M0 0L14 10L8 12L5 20L0 0Z"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              strokeLinejoin="round"
              className="fill-background"
            />
          </svg>
        </div>

        {/* Inner Solid Dot for Interactive Hover */}
        <div
          className={`absolute top-[-4px] left-[-4px] w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))] transition-all duration-300 ease-out origin-center ${isSpecialHover ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
