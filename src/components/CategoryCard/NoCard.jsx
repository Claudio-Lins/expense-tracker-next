import React from "react";
import { Plus } from "phosphor-react";

export function NoCard() {
  return (
    <div className="flex cursor-pointer items-center justify-center rounded-2xl border border-income border-opacity-60 hover:shadow-inner hover:shadow-income">
      <Plus size={50} color="#7f60f3"  />
    </div>
  );
}
