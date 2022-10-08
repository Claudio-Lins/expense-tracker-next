import { useDispatch } from "react-redux";
import CardMenu  from "../UI/CardMenu";
import useCloseMenu from '../../hooks/useCloseMenu';
import { toggleAddAmount, toggleSubtractAmount, toggleTransferAmount, toggleEditCategory } from "../../store/ui-slice";

const  CategoryMenu = ({ toggleMenuHandler, data }) => {
   const menuRef = useCloseMenu(toggleMenuHandler);
   const dispatch = useDispatch();

  return (
    <CardMenu ref={menuRef}>
      <li onClick={() => dispatch(toggleEditCategory(data))} className="liMenu">Editar</li>
      <li onClick={() => dispatch(toggleAddAmount(data))} className="liMenu">Adicionar</li>
      <li onClick={() => dispatch(toggleSubtractAmount(data))} className="liMenu">Descontar</li>
      <li onClick={() => dispatch(toggleTransferAmount(data))} className="liMenu">Tranferir</li>
    </CardMenu>
  );
}

export default CategoryMenu;