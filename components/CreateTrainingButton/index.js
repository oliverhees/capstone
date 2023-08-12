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
  font-size: 1rem;
  width: 100%;
  margin-top: 10px;
  text-align: center;
  color: #fff;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 2rem;
  background: rgb(120, 80, 191);
  background: linear-gradient(
    174deg,
    rgba(120, 80, 191, 1) 0%,
    rgba(81, 45, 168, 1) 100%
  );
  border: none;

  :hover {
    background: linear-gradient(
      174deg,
      rgba(160, 80, 191, 1) 0%,
      rgba(121, 45, 168, 1) 100%
    );
  }
`;
