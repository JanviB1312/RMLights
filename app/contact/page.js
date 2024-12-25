import Home4Partners from "@/components/Home4/Home4Partners";
import Breadcumb from "@/layouts/breadcumb";
import Layout from "@/layouts/layout";
import { Location } from "@/public/svg/icon";
import Link from "next/link";
import ContactInfo from "../../components/UpdatedContactInfo";

export const metadata = {
  title: "JR Bond | Contact",
};

export default function page() {
  return (
    <Layout>
      <Breadcumb firstChild={"Contact"} />

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
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2204.9016518845474!2d70.92649596504502!3d22.740493935264812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959919744a1756f%3A0x2e2eb7e0b2454c55!2sBandhunagar%2C%20Gujarat%20363642!5e0!3m2!1sen!2sin!4v1723036276462!5m2!1sen!2sin"
            ></iframe>
          </div>
          {/* </div> */}
        </div>
      </div>
    </Layout>
  );
}
