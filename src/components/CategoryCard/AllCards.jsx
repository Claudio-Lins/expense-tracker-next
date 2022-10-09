import { useSelector } from "react-redux";
import useGetDocs from "../../hooks/useGetDocs";
import { AddAmout } from "../CategoryCard/modais/AddAmout";
import { AddCategory } from "../CategoryCard/modais/AddCategory";
import { EditCategory } from "../CategoryCard/modais/EditCategory";
import { SubtractAmout } from "../CategoryCard/modais/SubtractAmout";
import { TransferAmout } from "../CategoryCard/modais/TransferAmout";
import { CategoryCard } from "./CategoryCard";
import { NoCard } from "./NoCard";

export function AllCards() {
  const {categories} = useSelector(state => state.app)
  
  const cards = categories.map((category) => (
    <CategoryCard key={category.id} data={category} />
  ));
  return (
    <>
      <AddAmout />
      <SubtractAmout />
      <TransferAmout />
      <EditCategory />
      <AddCategory />
      <section
        id="section"
        className="mb-24"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(30rem, 1fr))",
          gridGap: "2rem",
          display: "grid",
        }}
      >
        {cards}
        <NoCard />
      </section>
      <pre>{JSON.stringify(categories, null, 2)}</pre>
    </>
  );
}
