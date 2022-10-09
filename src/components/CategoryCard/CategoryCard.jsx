import { PencilSimpleLine } from "phosphor-react";
import useGetCurrency from "../../hooks/useGetCurrency";
import  CategoryMenu  from "./CategoryMenu";
import useMenu  from "../../hooks/useMenu";

export function CategoryCard({ data }) {
  const { title, amount, percentage } = data;
  const [ isVisble, toggleMenuHandler ] = useMenu()
  const formatAmount = useGetCurrency(amount);

  return (
    <div id="card" className="relative rounded-2xl bg-sidebar p-8">
      <div id="edit" className="">
        <div className="absolute top-6 right-6 cursor-pointer p-2" >
          <PencilSimpleLine
            size={24}
            color="#000"
            onClick={toggleMenuHandler}
          />
          {isVisble && <CategoryMenu toggleMenuHandler={toggleMenuHandler} data={data}/>}
        </div>
        <h2 className="mb-4 text-xl font-light uppercase text-texto">{title}</h2>
        <h3 className="mb-12 text-4xl font-normal text-black">{formatAmount}</h3>
        <h4 className="text-right text-lg font-light text-texto">
          Alocado: {percentage}%
        </h4>
      </div>
    </div> );
}