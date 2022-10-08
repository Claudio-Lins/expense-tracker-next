import React, { useEffect, useState } from "react";
import { CategoryCard } from "./CategoryCard";
import { NoCard } from "./NoCard";
import Modal from "../UI/Modal";
import { AddAmout } from "../CategoryCard/modais/AddAmout";
import { SubtractAmout } from "../CategoryCard/modais/SubtractAmout";
import { TransferAmout } from "../CategoryCard/modais/TransferAmout";
import { EditCategory } from "../CategoryCard/modais/EditCategory";
import { AddCategory } from "../CategoryCard/modais/AddCategory";
import { collection, onSnapshot } from "@firebase/firestore";
import db from "../../firebase";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Essencial",
    amount: "4000.00",
    percentage: "100%",
  },
  {
    id: 2,
    title: "Investimento",
    amount: "1000.00",
    percentage: "25%",
  },
  {
    id: 3,
    title: "Pessoal",
    amount: "500.00",
    percentage: "12,5%",
  },
];

export function AllCards() {
  const [documents, setDocuments] = useState([]);
  const coll = collection(db, "categorias");
  
  useEffect(() => {
    const getDocs = onSnapshot(coll, snapshot => {
      const data = snapshot.docs.map(doc => doc.data())
      setDocuments(data)
    })
    console.log(documents);
    return () => {getDocs()}
  }, []);

  console.log(documents);

  const cards = DUMMY_DATA.map((category) => (
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
    </>
  );
}
