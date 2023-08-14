import React from "react";
import styled from "styled-components";

const DataComparison = ({ type, actually, reference }) => {
  if (actually.length < 2) {
    return <p>Not enough data to compare</p>;
  }

  const lastEntry = actually[actually.length - 1];
  const weightDifference = parseFloat(lastEntry[type]) - reference;
  const arrow = weightDifference > 0 ? "↑" : "↓";
  const arrowClassName = weightDifference > 0 ? "arrow-up" : "arrow-down";
  return (
    <WeightDifferenceWrapper>
        {weightDifference} <Smaller>cm</Smaller> <span className={arrowClassName}>{arrow}</span>
    </WeightDifferenceWrapper>
  );
};

export default DataComparison;

const Smaller = styled.span`
font-size: 0.8rem;
font-weight: 400;
`;
const WeightDifferenceWrapper = styled.div`
width: 100%;

.arrow-up{
    color: green;
}

.arrow-down{
    color: red;
}
`;
