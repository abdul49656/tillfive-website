"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type CollapsibleSectionProps = {
  title: string;
  description?: string;
  defaultOpen?: boolean;
  /** Controlled mode: pass open state from parent */
  open?: boolean;
  /** Controlled mode: called when user clicks the header */
  onToggle?: () => void;
  children: React.ReactNode;
  className?: string;
};

export function CollapsibleSection({
  title,
  description,
  defaultOpen = true,
  open,
  onToggle,
  children,
  className,
}: CollapsibleSectionProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = open !== undefined ? open : internalOpen;

  function handleToggle() {
    if (onToggle) onToggle();
    else setInternalOpen((v) => !v);
  }

  return (
    <div className={className}>
      <button
        onClick={handleToggle}
        className="group flex w-full items-center justify-between border-b border-border pb-4"
      >
        <div className="text-left">
          <h2 className="text-3xl font-bold text-foreground group-hover:text-brand transition-colors duration-300">
            {title}
          </h2>
          {description && (
            <p className="mt-2 text-sm text-foreground-muted">{description}</p>
          )}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="shrink-0 ml-4"
        >
          <ChevronDown size={24} className="text-foreground-muted group-hover:text-brand transition-colors duration-300" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-6">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
