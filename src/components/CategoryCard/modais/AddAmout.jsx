import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useUpdateDoc from "../../../hooks/useUpdateDoc";
import { toggleAddAmount } from "../../../store/ui-slice";
import Modal from "../../UI/Modal";

export function AddAmout() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  const { isVisible, category } = useSelector((state) => state.ui.addAmount);
  const dispatch = useDispatch();

  const addAmountHandler = useUpdateDoc();

  const addAmount = (e) => {
    e.preventDefault()

    if (!title || !amount) return;

    addAmountHandler("categorias", category.id, {
      amount: category.amount + Number(amount),
    })

    setTitle("");
    setAmount(0);
    dispatch(toggleAddAmount(null));
  }

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => {
        dispatch(toggleAddAmount(null));
      }}
      title="Add Amount"
    >
      <form onSubmit={addAmount} className="flex w-full flex-col items-center justify-between gap-3">
        <div className="flex w-full items-center justify-between">
          <label className="text-[1.6rem] text-texto" htmlFor="title">
            Título
          </label>
          <input
            className="w-[80%] rounded-lg border border-texto py-3 px-4 text-texto outline-none placeholder:font-light placeholder:text-income placeholder:opacity-50"
            type="text"
            name="title"
            id="title"
            placeholder="Ex: Venda do teclado"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex w-full items-center justify-between">
          <label className="text-[1.6rem] text-texto" htmlFor="amount">
            Valor
          </label>
          <input
            className="w-[80%] rounded-lg border border-texto py-3 px-4 text-texto outline-none placeholder:font-light placeholder:text-income placeholder:opacity-50"
            type="text"
            name="amount"
            id="amount"
            placeholder="Ex: 1000.00"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="">
          <button
            className="mt-6 flex gap-4 self-center rounded-lg bg-income px-20 py-4 text-3xl text-white hover:bg-opacity-70 hover:font-bold"
            type="submit"
          >
            Adicionar
          </button>
        </div>
      </form>
    </Modal>
  );
}
