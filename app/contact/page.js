import Home4Partners from "@/components/Home4/Home4Partners";
import Layout from "@/layouts/layout";
import ContactInfo from "../../components/UpdatedContactInfo";
import NeedHelp from "@/components/Home/NeedHelp";

export const metadata = {
  title: "Contact",
};

export default function page() {
  return (
    <Layout>
      <div className="pro-header">
        <h1 className="pro-title-header">Contact Us</h1>
      </div>

      <div className="industify_fn_contact">
        <div className="container">
          <div className="contact_in">
            <Home4Partners />
          </div>
          <div className=" text-white">.</div>
          {/* <div className=" w-full"> */}
          <ContactInfo />
          <div className="map_holder my-4">
            <iframe
              width="100%"
              height="400"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.255555098373!2d75.3856409258207!3d19.913632925142018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdbbcd57f54abb1%3A0xaedb8b5adf9647dc!2sPisadevi%2C%20Maharashtra%20431008!5e0!3m2!1sen!2sin!4v1735223611454!5m2!1sen!2sin"
            ></iframe>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div>
        <NeedHelp />
      </div>
    </Layout>
  );
}
