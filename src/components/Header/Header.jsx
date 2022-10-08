import Image from "next/image";
import React from "react";
import useMenu from "../../hooks/useMenu";
import { HeaderMenu } from "./HeaderMenu";
import { AddSalary } from "./modais/AddSalary";

export function Header() {
  const [isVisble, toggleMenuHandler] = useMenu();
  return (
    <>
    <AddSalary />
      <section id="header" className="mb-24 flex items-center justify-between">
        <div id="message" className="">
          <h1 className="">Hello world</h1>
          <h2 className="">Carteira</h2>
        </div>
        <div
          id="avatar"
          className="relative h-[4.8rem] w-[4.8rem] cursor-pointer"
        >
          <Image
            onClick={toggleMenuHandler}
            src="/claudio-lins.jpg"
            alt="Picture of the author"
            layout="fill"
            loading="lazy"
            className=" rounded-2xl"
          />
          {isVisble && <HeaderMenu toggleMenuHandler={toggleMenuHandler} />}
        </div>
      </section>
    </>
  );
}
