import { AnimatePresence, motion } from "framer-motion";
import { Copy, CopyCheck } from "lucide-react";
import React from "react";

import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { cn } from "@/lib/utils";

import { Button } from "../Button";

export default function CopyToClipboard({
  text,
  initialIcon = <Copy size={16} strokeWidth={1.5} />,
}: {
  text: string;
  initialIcon?: React.ReactNode;
}) {
  const { copy, isCopied } = useCopyToClipboard();

  const handleCopyText = async () => {
    if (!isCopied) {
      await copy(text);
    }
  };

  return (
    <Button
      variant="ghost"
      onClick={handleCopyText}
      className={cn(
        "cursor-pointer",
        "hover:bg-secondary p-1",
        isCopied && "bg-green-200/20 hover:bg-green-200/20",
      )}
    >
      <AnimatePresence key={isCopied ? "copied" : "copy"}>
        <motion.div
          initial={{
            x: -7,
            y: 10,
            scale: 0,
          }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          exit={{
            x: 10,
            y: -10,
            opacity: 0.5,
            scale: 0.75,
          }}
          key={isCopied ? "copied" : "copy"}
        >
          {isCopied ? (
            <CopyCheck stroke="var(--chart-2)" size={16} strokeWidth={1.5} />
          ) : (
            initialIcon
          )}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
}
