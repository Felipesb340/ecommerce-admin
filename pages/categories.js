import Layout from "@/Components/Layout";
import axios from "axios";
import { useState } from "react";

export default function Categories() {
  const [name, setName] = useState("");
  async function saveCategory(ev) {
    ev.preventDefault();
    await axios.post('/api/categories', {name});
    setName('');
  }

  return (
    <Layout>
      <h1>Categories</h1>
      <label>New Category name</label>
      <form onSubmit={saveCategory} className="flex gap-1">
        <input
          type="text"
          placeholder={"Category name"}
          value={name}
          className="mb-0"
          onChange={ev => setName(ev.target.value)}
        />
        <button type="submit" className="btn-primary py-1 ">
          Save
        </button>
      </form>
      <table className="basic mt-4" >
        <thead>
          <tr>
            <td>Category name</td>
          </tr>
        </thead>
      </table>
    </Layout>
  );
}
