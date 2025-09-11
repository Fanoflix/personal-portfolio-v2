import React from "react";

import CopyToClipboard from "@/components/CopyToClipboardIcon/CopyToClipboard";
import { MY_EMAIL } from "@/lib/constants";

import GoToMail from "./GoToMail";

export default function EmailTooltipContent({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <div className="flex items-center gap-2" onClick={onClick}>
      {MY_EMAIL}

      <GoToMail />

      <CopyToClipboard text={MY_EMAIL} />
    </div>
  );
}
