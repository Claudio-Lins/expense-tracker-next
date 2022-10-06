import React from "react";
import { CategoryCard } from "./CategoryCard";
import { NoCard } from "./NoCard";
import Modal  from "../UI/Modal";
import { AddAmout } from "../CategoryCard/modais/AddAmout";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Salário",
    amount: "4000.00",
    percentage: "100%",
  },
  {
    id: 2,
    title: "Aluguel",
    amount: "1000.00",
    percentage: "25%",
  },
  {
    id: 3,
    title: "Lazer",
    amount: "500.00",
    percentage: "12,5%",
  },
];

export function AllCards() {
  const cards = DUMMY_DATA.map((category) => (
    <CategoryCard key={category.id} {...category} />
  ));
  return (
    <>
    <AddAmout />
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
    </>
  );
}
