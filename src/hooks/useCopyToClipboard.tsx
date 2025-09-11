import { useCallback, useState } from "react";

type CopiedValue = string | null;

type CopyFn = (text: string) => Promise<boolean>;

const COPIED_STATE_RETENTION_TIME_IN_MS = 1200;

export function useCopyToClipboard(): {
  copiedText: CopiedValue;
  copy: CopyFn;
  isCopied: boolean;
} {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copy: CopyFn = useCallback(async (text) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");
      return false;
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, COPIED_STATE_RETENTION_TIME_IN_MS);

      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      setCopiedText(null);
      setIsCopied(false);
      return false;
    }
  }, []);

  return { copiedText, copy, isCopied };
}
