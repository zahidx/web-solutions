"use client";
import { useState } from "react";

export const useSelected = () => {
  const [selected, setSelected] = useState(-1);
  const handleMouseEnter = (index) => setSelected(index);
  const handleMouseLeave = () => setSelected(-1);

  return { selected, handleMouseEnter, handleMouseLeave };
};
