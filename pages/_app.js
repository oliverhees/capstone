import GlobalStyle from "../styles";
import Head from "next/head";
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
      welcome: false,
      firstFill: false,
    },
  });

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>AI Personal Trainer</title>
      </Head>
      <Component {...pageProps} setFormData={setFormData} formData={formData} />
    </>
  );
}
