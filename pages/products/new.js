import Layout from "@/Components/Layout";
import { useState } from "react";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [goToProducts, setGotoProducts] = useState(false);
  const router = useRouter()

  async function createProduct(ev){
    ev.preventDefault();
    const data = {title, description, price}
    await axios.post('/api/products', data)
    setGotoProducts(true)
  }

  if(goToProducts) {
    router.push('/products')
  }

  return (
    <Layout>
      <form onSubmit={createProduct}>
        <h1>New Product</h1>
        <label>Product name</label>
        <input
          type="text"
          placeholder="product name"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <label>Description</label>
        <textarea
          placeholder="description"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
        <label>Price (in USD)</label>
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
        />
        <button type="submit" className="btn-primary">
          Save
        </button>
      </form>
    </Layout>
  );
}