import React from "react";
import { useSelector } from "react-redux";
import Modal from "../../UI/Modal";
import { useDispatch } from "react-redux";
import { toggleAddCategory } from "../../../store/ui-slice";

export function AddCategory() {
  const { isVisible, category } = useSelector((state) => state.ui.addCategory);
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => {
        dispatch(toggleAddCategory(null));
      }}
      title="Nova categoria"
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
            placeholder="Ex: Alimentação"
          />
        </div>
        <div className="flex w-full items-center justify-between">
          <label className="text-[1.6rem] text-texto" htmlFor="porcentagem">
            % alocada
          </label>
          <input
            className="w-[70%] rounded-lg border border-texto py-3 px-4 text-texto outline-none placeholder:font-light placeholder:text-income placeholder:opacity-50"
            type="text"
            name="porcentagem"
            id="porcentagem"
            placeholder="%"
          />
        </div>
        <div className="flex justify-between gap-4">
          <button
            className="mt-6 flex gap-4 self-center rounded-lg bg-income px-20 py-4 text-3xl text-white hover:bg-opacity-70 hover:font-bold"
            type="submit"
          >
            Salvar
          </button>
        </div>
      </form>
    </Modal>
  );
}
