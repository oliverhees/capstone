import GlobalStyle from "../styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  const [formData, setFormData] = useLocalStorageState("formData", {
    defaultValue: {
      tData: [],
      eDone: [],
      dWeight: [],
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
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} setFormData={setFormData} formData={formData} />
    </>
  );
}
