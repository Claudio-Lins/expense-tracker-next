import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSubtractAmount } from "../../../store/ui-slice";
import Modal from "../../UI/Modal";

export function SubtractAmout() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const { isVisible, category } = useSelector((state) => state.ui.subtractAmount);
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => {
        dispatch(toggleSubtractAmount(null));
      }}
      title="Descontar"
    >
      <form className="flex w-full flex-col items-center justify-between gap-3">
        <div className="flex w-full items-center justify-between">
          <label className="text-[1.6rem] text-texto" htmlFor="title">
            Título
          </label>
          <input
            className="w-[80%] rounded-lg border border-texto py-3 px-4 text-texto outline-none placeholder:font-light placeholder:text-income placeholder:opacity-50"
            type="text"
            name="title"
            id="title"
            placeholder="Ex: Gasolina do carro"
          />
        </div>
        <div className="flex w-full items-center justify-between">
          <label className="text-[1.6rem] text-texto" htmlFor="amount">
            Valor
          </label>
          <input
            className="w-[80%] rounded-lg border border-texto py-3 px-4 text-texto outline-none placeholder:font-light placeholder:text-income placeholder:opacity-50"
            type="number"
            name="amount"
            id="amount"
            placeholder="Ex: 1000.00"
          />
        </div>
        <div className="">
          <button
            className="mt-6 flex gap-4 self-center rounded-lg bg-income px-20 py-4 text-3xl text-white hover:bg-opacity-70 hover:font-bold"
            type="submit"
          >
            Descontar
          </button>
        </div>
      </form>
    </Modal>
  );
}
