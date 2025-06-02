import React, { useRef, useLayoutEffect, useState } from "react";

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  subtitle?: string;
  description: string;
  grade?: string;
  score?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<Array<HTMLDivElement | null>>([]);
  
  const [lineStyle, setLineStyle] = useState<{ top: number; height: number }>({
    top: 0,
    height: 0,
  });
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  // Animate active checkpoint (demo)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === events.length - 1 ? -1 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [events.length]);

  // Calculate line position and height
  useLayoutEffect(() => {
    if (dotRefs.current.length >= 2 && containerRef.current) {
      const firstDot = dotRefs.current[0];
      const lastDot = dotRefs.current[dotRefs.current.length - 1];
      if (firstDot && lastDot) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const firstRect = firstDot.getBoundingClientRect();
        const lastRect = lastDot.getBoundingClientRect();
        const top = firstRect.top - containerRect.top + firstRect.height / 2;
        const height =
          lastRect.top -
          firstRect.top +
          lastRect.height / 2 -
          firstRect.height / 2;
        setLineStyle({ top, height });
      }
    }
  }, [events.length]);

  return (
    <div
      className="relative border-b-1 rounded-lg dark:border-white px-2 md:px-8 py-4 md:py-6"
      ref={containerRef}
    >
      {/* Vertical Timeline Line: Only between first and last dot */}
      <div
        className="absolute left-8 md:left-1/2 w-1 md:w-0.5px bg-gray-300 transition-all duration-500"
        style={{
          top: lineStyle.top,
          height: lineStyle.height * ((activeIndex + 2) / events.length),
        }}
      ></div>
      {/* Colored (active) timeline line */}
      <div
        className="absolute left-8 md:left-1/2 w-1 md:w-0.5px bg-indigo-500 transition-all duration-500 ease-in-out"
        style={{
          top: lineStyle.top,
          height: lineStyle.height * ((activeIndex + 2) / events.length),
        }}
      ></div>
      {events.map((event, index) => (
        <div
          key={event.id}
          className="relative flex flex-col md:flex-row mb-8 md:mb-10"
        >
          {/* Checkpoint (dot) */}
          <div
            ref={(el) => (dotRefs.current[index] = el)}
            className={`absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-sm z-10 transition-all duration-300 ${
              index <= activeIndex ? "bg-indigo-500" : "bg-gray-300"
            }`}
          ></div>

          {/* Horizontal connector (mobile only) */}
          <div
            className="absolute left-[1.25rem] md:hidden w-20 h-1 top-3 bg-gray-300"
            style={{ zIndex: 0 }}
          ></div>

          {/* Horizontal connector (medium/large screens, alternating) */}
          {index >= 0 && (
            <div
              className={`hidden md:block absolute ${
                index % 2 === 1
                  ? "left-[calc(50%-3rem)] "
                  : "right-[calc(50%-3rem)]"
              } top-3 w-[50%] h-1 bg-gray-300 z-0`}
              style={{ zIndex: 0 }}
            ></div>
          )}

          {/* Event card */}
          <div
            className={`mt-2 md:-mt-2 ml-16 md:ml-0 md:w-5/12 px-6 py-4 rounded-lg shadow-sm bg-white dark:bg-gradient-to-r from-indigo-500 to-indigo-300 ${
              index % 2 === 0
                ? "md:mr-auto md:pr-14 md:pl-8"
                : "md:ml-auto md:pl-14 md:pr-8"
            }`}
            style={{ zIndex: 1 }}
          >
            <div className="font-bold text-indigo-900 text-lg">
              {event.date}
            </div>
            <h3 className="text-lg font-semibold text-indigo-900 mb-1">
              {event.title}
            </h3>
            {event.subtitle && (
              <div className="text-gray-600 dark:text-gray-100 mb-2">
                {event.subtitle}
              </div>
            )}
            {event.grade && (
              <div className="text-gray-600 dark:text-gray-100 mb-2">
                {event.grade}
              </div>
            )}
            {event.score && (
              <div className="text-gray-600 dark:text-gray-100 mb-2">
                {event.score}
              </div>
            )}
            <p className="text-gray-700 dark:text-gray-100 leading-relaxed">
              {event.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
