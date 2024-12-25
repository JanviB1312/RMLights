import Layout from "@/layouts/layout";
import JRHomeProduct from "@/components/Home2/JRHomeProduct";
import JRHome3Service from "@/components/Home3/JRHome3Service";
import HomeSlider from "@/components/Home/HomeSlider";
import AboutUs from "@/components/Home/AboutUs";
import ProductSlider from "@/components/Home/productSlider";

export const metadata = {
  title: "JR Bond | Home",
};

export default function home() {
  return (
    <>
      <Layout className={"nobglight"}>
        <HomeSlider />
        <AboutUs />
        <ProductSlider />

        {/* <JRHome3Service /> */}
      </Layout>
    </>
  );
}
