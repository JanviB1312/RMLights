import Layout from "@/layouts/layout";
import HomeSlider from "@/components/Home/HomeSlider";
import AboutUs from "@/components/Home/AboutUs";

import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Counter from "@/components/Home/Counter";
import NeedHelp from "@/components/Home/NeedHelp";
import ProductSlider from "@/components/Home/ProductSlider";

export const metadata = {
  title: "RM Lights | Home",
};

export default function home() {
  return (
    <>
      <Layout className={"nobglight"}>
        <HomeSlider />
        <AboutUs />
        <ProductSlider />
        <WhyChooseUs />
        <Counter />
        <NeedHelp />
      </Layout>
    </>
  );
}
