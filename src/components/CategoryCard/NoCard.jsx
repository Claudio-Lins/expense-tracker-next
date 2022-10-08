import { Plus } from "phosphor-react";
import { useDispatch } from "react-redux";
import { toggleAddCategory } from "../../store/ui-slice";


export function NoCard() {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(toggleAddCategory(null))}
      className="flex cursor-pointer items-center justify-center rounded-2xl border border-income border-opacity-60 hover:shadow-inner hover:shadow-income"
    >
      <Plus size={50} color="#7f60f3" />
    </div>
  );
}
