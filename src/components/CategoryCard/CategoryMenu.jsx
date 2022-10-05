import { useEffect, useRef } from "react";
import CardMenu  from "../UI/CardMenu";

export function CategoryMenu({ toggleMenuHandler }) {
  const menuRef = useRef();
  useEffect(() => {
    const clickHandler = (e) => {
      if (!menuRef.current.contains(e.target)) toggleMenuHandler();
    };
    document.addEventListener("mousedown", clickHandler);
    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  }, []);

  return (
    <CardMenu ref={menuRef}>
      <li className="liMenu">Editar</li>
      <li className="liMenu">Adicionar</li>
      <li className="liMenu">Descontar</li>
      <li className="liMenu">Tranferir</li>
    </CardMenu>
  );
}
