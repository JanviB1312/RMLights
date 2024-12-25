import ProductInfo from "@/components/Product/ProductInfo";
import Breadcumb from "@/layouts/breadcumb";
import Layout from "@/layouts/layout";

export const metadata = {
  title: "Product Info",
};

export default function page() {
  return (
    <Layout>
      <Breadcumb />
      <ProductInfo />
    </Layout>
  );
}
