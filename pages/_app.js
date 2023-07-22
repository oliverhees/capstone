import GlobalStyle from "../styles";
import Head from "next/head";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    weight: "",
    bmi: "",
    chest: "",
    belly: "",
    hip: "",
    entryDate: "",
  });
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps} setFormData={setFormData} formData={formData} />
    </>
  );
}
