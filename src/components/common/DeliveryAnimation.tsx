import { useEffect, useState } from "react";

export default function DeliveryAnimation() {
  const [position, setPosition] = useState(-100);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev > 120) return -100;
        return prev + 0.5;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full h-32 pointer-events-none z-40 overflow-hidden">
      <div
        className="absolute bottom-4 transition-all duration-100 ease-linear"
        style={{ left: `${position}%` }}
      >
        <div className="relative animate-bounce">
          <div className="text-6xl transform scale-x-[-1]">🏍️</div>
          <div className="absolute -top-8 -right-2 text-2xl animate-pulse">💨</div>
          <div className="absolute -top-6 -right-8 text-xl animate-pulse delay-100">💨</div>
          <div className="absolute -top-4 -right-12 text-lg animate-pulse delay-200">💨</div>
        </div>
      </div>
    </div>
  );
}
