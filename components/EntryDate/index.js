import styled from "styled-components";

export default function EntryDate({ formData }) {
  return <EntryDateDiv>Entry Date: {formData.entryDate}</EntryDateDiv>;
}

const EntryDateDiv = styled.div`
  font-size: 1rem;
  font-weight: 400;
  padding-bottom: 20px;
`;
