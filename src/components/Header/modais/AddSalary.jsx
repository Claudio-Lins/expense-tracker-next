import React from "react";
import { useSelector } from "react-redux";
import Modal from "../../UI/Modal";
import { useDispatch } from "react-redux";
import { toggleAddSalary } from "../../../store/ui-slice";

export function AddSalary() {
  const { isVisible, category } = useSelector((state) => state.ui.addSalary);
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => {
        dispatch(toggleAddSalary(null));
      }}
      title="Adicionar salário"
    >
      <form className="flex w-full flex-col items-center justify-between gap-3">
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
          />
        </div>
        <div className="flex justify-between gap-4">
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
