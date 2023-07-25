import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import { useEffect } from "react";
export default function Home({ setFormData, formData }) {
  // const test = JSON.parse(localStorage.getItem("formData"));
  // console.log(JSON.parse(localStorage.getItem("formData")));
  return (
    <main>
      <Heading>{test.firstName}</Heading>
      <SubHeading></SubHeading>
    </main>
  );
}
