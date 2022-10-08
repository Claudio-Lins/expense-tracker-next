import useCloseMenu from "../../hooks/useCloseMenu";
import CardMenu from "../UI/CardMenu";
import { useDispatch } from "react-redux";
import { toggleAddSalary } from "../../store/ui-slice";

export function HeaderMenu({ toggleMenuHandler }) {
  const dispatch = useDispatch();
  const cardRef = useCloseMenu(toggleMenuHandler);
  return (
    <CardMenu ref={cardRef}>
      <li
        onClick={() => dispatch(toggleAddSalary(null))}
        className="liMenu rounded-lg border shadow"
      >
        Add Salary
      </li>
    </CardMenu>
  );
}
