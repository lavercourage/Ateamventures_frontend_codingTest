import { Dispatch, SetStateAction } from "react";

export interface IMethodDropdownProps {
  isMethodAmount: number;
  setIsMethodAmount: Dispatch<SetStateAction<number>>;
  method: string[];
}

// MaterialDropdown
export interface IMaterialDropdownProps {
  isMaterialAmount: number;
  setIsMaterialAmount: Dispatch<SetStateAction<number>>;
}
