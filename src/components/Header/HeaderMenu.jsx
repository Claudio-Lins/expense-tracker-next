import useCloseMenu from "../../hooks/useCloseMenu";
import CardMenu from "../UI/CardMenu";

export function HeaderMenu({ toggleMenuHandler }) {
  const cardRef = useCloseMenu(toggleMenuHandler);
  return (
    <CardMenu ref={cardRef}>
      <li className="liMenu rounded-lg border shadow">Add Salary</li>
    </CardMenu>
  );
}
