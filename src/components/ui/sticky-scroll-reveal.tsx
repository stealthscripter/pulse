"use strict";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, motion } from "motion/react";
import { cn } from "../../lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useScrollEffect(scrollYProgress, cardLength, setActiveCard);

  const backgroundColors = ["#EAEAEA"];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[30rem] space-x- overflow-y-auto rounded-md scrollbar-hide py-0"
      ref={ref}
    >
      <div className="relative flex items-start w-2xl">
        <div className="w-full">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-lg mt-10 max-w-sm text-slate-700"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-20 hidden h-80 w-lg mx-auto overflow-hidden rounded-md bg-white lg:block border-2 border-amber-600",
          contentClassName
        )}
      >
        {content[activeCard]?.content ?? null}
      </div>
    </motion.div>
  );
};

// Helper hook to avoid cluttering useEffect
function useScrollEffect(
  scrollYProgress: any,
  cardLength: number,
  setActiveCard: React.Dispatch<React.SetStateAction<number>>
) {
  useEffect(() => {
    const cardsBreakpoints = Array.from(
      { length: cardLength },
      (_, i) => i / cardLength
    );
    const unsubscribe = scrollYProgress.onChange((latest: number) => {
      const closestIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      }, 0);
      setActiveCard(closestIndex);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress, cardLength, setActiveCard]);
}
