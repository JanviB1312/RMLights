import JRHome2About from "@/components/Home2/JRHome2About";

import Home3Introduce from "@/components/Home3/Home3Introduce";
import ValuesComponent from "@/components/Home2/ValuesComponent";
import StrengthsComponent from "@/components/Home2/StrengthsComponent";
import Home3Hero from "@/components/Home3/Home3Hero";
import Layout from "@/layouts/layout";
import JRAbout2 from "@/components/JRAbout2";
import JRAbout3 from "@/components/JRAbout3";

export const metadata = {
  title: "JR Bond | About",
};

export default function home5() {
  return (
    <>
      <Layout className={"nobglight"}>
        <Home3Hero />
        <Home3Introduce />
        <JRHome2About />
        {/* <JRAbout2 /> */}
        <JRAbout3 />
        <ValuesComponent />
        <StrengthsComponent />
      </Layout>
    </>
  );
}
