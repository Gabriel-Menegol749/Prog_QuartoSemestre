import React from "react";
import { useState } from "react";

export function Num1({ value, setValue }) {
  return (
    <input
      type="number"
      placeholder="Primeiro Valor:"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export function Num2({ value, setValue }) {
  return (
    <input
      type="number"
      placeholder="Segundo Valor:"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
