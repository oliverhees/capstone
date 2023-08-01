import styled from "styled-components";
import Link from "next/link";

export default function CreateTrainingButton() {
  return (
    <Link href="/trainingsdata">
      <CreateTrainingButtonDiv>Create training plan</CreateTrainingButtonDiv>
    </Link>
  );
}

const CreateTrainingButtonDiv = styled.button`
  width: 100%;
  border-radius: 0.8rem;
  border: solid thin #ccc;
  padding: 15px 0px 15px 0px;
  border-radius: 2rem;

  &:hover {
    background-color: #999;
    color: #fff;
  }
`;
