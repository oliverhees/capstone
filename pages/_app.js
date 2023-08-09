import GlobalStyle from "../styles";
import Head from "next/head";
import { useState, useEffect, use } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [formData, setFormData] = useLocalStorageState("formData", {
    defaultValue: {
      tData: [],
      eDone: [],
      tDataCreated: "",
      firstName: "",
      lastName: "",
      weight: "",
      bmi: "",
      chest: "",
      belly: "",
      hip: "",
      entryDate: "",
    },
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
