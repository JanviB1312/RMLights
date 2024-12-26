import JRHome2About from "@/components/Home2/JRHome2About";
import ValuesComponent from "@/components/Home2/ValuesComponent";
import Home3Hero from "@/components/Home3/Home3Hero";
import Layout from "@/layouts/layout";
import MissionVision from "@/components/MissionVision";

export const metadata = {
  title: " About",
};

export default function home5() {
  return (
    <>
      <Layout className={"nobglight"}>
        <Home3Hero />
        <JRHome2About />
        <ValuesComponent />
        <MissionVision />
      </Layout>
    </>
  );
}
