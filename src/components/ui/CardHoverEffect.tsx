import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description?: string;
    link?: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6",
        className
      )}
    >
      {items.map((item, idx) => {
        const Tag = item.link ? "a" : "div";
        return (
          <Tag
            {...(item.link ? { href: item.link } : {})}
            key={item?.title}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-chart-1/10 block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              {item.icon && <CardIcon>{item.icon}</CardIcon>}
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <CardDivider />
            </Card>
          </Tag>
        );
      })}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-card border border-border group-hover:border-chart-1/40 transition-colors duration-300 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4 flex flex-col gap-3 sm:gap-4 items-center text-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export const CardIcon = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-chart-1/15 border border-chart-1/20 flex items-center justify-center text-chart-1 group-hover:bg-chart-1/25 transition-colors duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-foreground font-bold tracking-wide text-lg sm:text-xl", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-muted-foreground tracking-wide leading-relaxed text-xs sm:text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardDivider = ({ className }: { className?: string }) => {
  return (
    <span
      className={cn(
        "w-16 sm:w-24 h-0.5 bg-linear-to-r from-chart-1 to-chart-2 rounded-full mt-1",
        className
      )}
    />
  );
};
