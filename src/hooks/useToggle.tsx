import { useState } from "react";

export default function useToggle(
  initialState: boolean = false
): [boolean, () => void] {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = () => {
    setState((prevState) => !prevState);
  };

  return [state, toggle];
}
