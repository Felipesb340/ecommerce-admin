import Layout from "@/Components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "@/Components/ProductForm";

export default function EditProductPage() {
  const [productInfo, setProductInfo] = useState(null)
  const router = useRouter()
  const {id} = router.query

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/api/products?id='+id).then(response => {
      setProductInfo(response.data);
    })
  }, [id])

  return (
    <Layout>
      <ProductForm {...productInfo} />
    </Layout>
  )
}