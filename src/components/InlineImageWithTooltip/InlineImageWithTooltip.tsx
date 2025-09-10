import Image from "next/image";

import TooltipWrapper from "../Tooltip/TooltipWrapper";

export default function InlineImageWithTooltip({
  tooltipContent,
  alt,
  src,
  width,
  height,
}: {
  tooltipContent: string;
  alt: string;
  src: string;
  width?: number;
  height?: number;
}) {
  return (
    <TooltipWrapper side="top" sideOffset={10} tooltipContent={tooltipContent}>
      <Image
        className="cursor-pointer inline-block"
        alt={alt}
        src={src}
        width={width ?? 27}
        height={height ?? 27}
      />
    </TooltipWrapper>
  );
}
