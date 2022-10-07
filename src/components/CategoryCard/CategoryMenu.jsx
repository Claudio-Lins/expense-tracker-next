import { useDispatch } from "react-redux";
import CardMenu  from "../UI/CardMenu";
import useCloseMenu from '../../hooks/useCloseMenu';
import { toggleAddAmount } from "../../store/ui-slice";

const  CategoryMenu = ({ toggleMenuHandler }) => {
   const menuRef = useCloseMenu(toggleMenuHandler);
   const dispatch = useDispatch();

  return (
    <CardMenu ref={menuRef}>
      <li className="liMenu">Editar</li>
      <li onClick={() => dispatch(toggleAddAmount(null))} className="liMenu">Adicionar</li>
      <li className="liMenu">Descontar</li>
      <li className="liMenu">Tranferir</li>
    </CardMenu>
  );
}

export default CategoryMenu;