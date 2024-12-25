import Layout from "@/layouts/layout";
import JRHomeProduct from "@/components/Home2/JRHomeProduct";
import JRHomeSlider from "@/components/Home/JRHomeSlider";
import JRHome2Info from "@/components/Home2/JRHome2Info";
import JRHome2About from "@/components/Home2/JRHome2About";
import JRHome2InfoRating from "@/components/Home2/JRHome2InfoRating";
import JRHome3Service from "@/components/Home3/JRHome3Service";
import Home3Introduce from "@/components/Home3/Home3Introduce";
import JRHome2InfoRating2 from "@/components/Home2/JRHome2InfoRating2";
import JRAccreditation from "@/components/Home2/JRAccreditation";

export const metadata = {
  title: "JR Bond | Home",
};

export default function home() {
  return (
    <>
      <Layout className={"nobglight"}>
        <JRHomeSlider />

        <JRHome2Info />

        {/*  <JRHome2About /> */}

        {/*  <JRHome2InfoRating />
        <JRHome2InfoRating2 /> */}
        <JRAccreditation />
        <JRHomeProduct />

        <JRHome3Service />
      </Layout>
    </>
  );
}
