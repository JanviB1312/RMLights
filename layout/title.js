import React from "react";
import Head from "next/head";

export default function Title({ title }) {
  return (
    <Head>
      <title>JR Bond | {title}</title>
    </Head>
  );
}
