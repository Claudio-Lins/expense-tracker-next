import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTransferAmount } from "../../../store/ui-slice";
import Modal from "../../UI/Modal";

export function TransferAmout() {
  const { isVisible, category } = useSelector((state) => state.ui.transferAmount);
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => {
        dispatch(toggleTransferAmount(null));
      }}
      title="Transferir"
    >
      <form className="flex w-full flex-col items-center justify-between gap-3">
        <div className="flex w-full items-center justify-between">
          <p>De</p>
          <p className="text-lg text-texto">Pessoal</p>
        </div>
        <div className="flex w-full items-center justify-between">
          <label htmlFor="destination">Para</label>
          <select name="destination" id="destination" className="w-[80%] rounded-lg border border-texto py-3 px-4 text-texto outline-none placeholder:font-light placeholder:text-income">
            <option value="essencial">Essencial</option>
            <option value="pessoal">Viagens</option>
            <option value="investimento">Investimento</option>
          </select>
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
            Transferir
          </button>
        </div>
      </form>
    </Modal>
  );
}
