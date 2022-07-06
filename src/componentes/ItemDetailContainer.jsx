import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailCOntainer() {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "productos", id);
    getDoc(queryDoc)
    .then((res) => setProducto({ id: res.id, ...res.data() }));
  }, [id]);

  return <ItemDetail producto={producto} />;
}

export default ItemDetailCOntainer;
