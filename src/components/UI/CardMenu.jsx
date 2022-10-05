import React, { forwardRef } from "react";
// forwardRef

const CardMenu = forwardRef(({ children }, ref) => {
  return (
    <div
      className="absolute top-[calc(100%_+_1rem)] right-[10%] shadow-sm before:absolute before:right-2 before:top-6 before:block before:h-6 before:w-8 before:bg-white before:content-['']"
      ref={ref}
    >
      <div className="relative min-w-[17rem] rounded-lg bg-white">
        <ul className="list-none">{children}</ul>
      </div>
    </div>
  );
});

CardMenu.displayName = "CardMenu";

export default CardMenu;
