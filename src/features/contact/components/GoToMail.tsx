import { AnimatePresence, motion } from "framer-motion";
import { LoaderPinwheel, MailPlus } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

import { Button } from "@/components/Button";
import { MY_EMAIL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const MAIL_ANIMATION_RETENTION_TIME_IN_MS = 2500;

export default function GoToMail({
  initialIcon = <MailPlus size={15} strokeWidth={1.5} />,
}: {
  initialIcon?: React.ReactNode;
}) {
  const [isAnimationTriggered, setIsAnimationTriggered] = useState(false);

  const handleCopyText = () => {
    if (!isAnimationTriggered) {
      setIsAnimationTriggered(true);
    }

    setTimeout(() => {
      setIsAnimationTriggered(false);
    }, MAIL_ANIMATION_RETENTION_TIME_IN_MS);
  };

  return (
    <Button
      variant="ghost"
      onClick={handleCopyText}
      className={cn(
        "size-5.5 cursor-pointer p-0.25",
        "hover:bg-secondary",
        isAnimationTriggered && "bg-chart-1/25 hover:bg-chart-1/25",
      )}
    >
      <AnimatePresence key={isAnimationTriggered ? "animating" : "animated"}>
        <Link
          className="hover:bg-secondary rounded-md p-1"
          href={`mailto:${MY_EMAIL}`}
        >
          <motion.div
            initial={{
              x: -7,
              y: 10,
              scale: 0,
            }}
            animate={{
              x: 0,
              y: 0,
              scale: 1,
            }}
            exit={{
              x: 10,
              y: -10,
              scale: 0,
            }}
            key={isAnimationTriggered ? "animating" : "animated"}
          >
            {isAnimationTriggered ? (
              <LoaderPinwheel
                className="animate-spin"
                stroke="var(--chart-1)"
                size={17}
                strokeWidth={0.75}
              />
            ) : (
              initialIcon
            )}
          </motion.div>
        </Link>
      </AnimatePresence>
    </Button>
  );
}
