
import CardMenu  from "../UI/CardMenu";
import useCloseMenu from '../../hooks/useCloseMenu';

const  CategoryMenu = ({ toggleMenuHandler }) => {
  
  const menuRef = useCloseMenu(toggleMenuHandler);

  return (
    <CardMenu ref={menuRef}>
      <li className="liMenu">Editar</li>
      <li className="liMenu">Adicionar</li>
      <li className="liMenu">Descontar</li>
      <li className="liMenu">Tranferir</li>
    </CardMenu>
  );
}

export default CategoryMenu;