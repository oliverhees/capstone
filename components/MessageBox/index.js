import styled from "styled-components";

export default function MessageBox() {
  return (
    <MessageBoxWrapper>
      <h2>Complete Your Profile for Accurate Data</h2>
      <p>
        To receive valid and tailored data, please fill out your profile. Your
        information ensures personalized results!
      </p>
    </MessageBoxWrapper>
  );
}

const MessageBoxWrapper = styled.div`
  font-size: 0.8rem;
  background-color: #eee;
  background: radial-gradient(
        circle at 100% 100%,
        #ffffff 0,
        #ffffff 6px,
        transparent 6px
      )
      0% 0%/8px 8px no-repeat,
    radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 6px, transparent 6px)
      100% 0%/8px 8px no-repeat,
    radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 6px, transparent 6px)
      0% 100%/8px 8px no-repeat,
    radial-gradient(circle at 0 0, #ffffff 0, #ffffff 6px, transparent 6px) 100%
      100%/8px 8px no-repeat,
    linear-gradient(#ffffff, #ffffff) 50% 50% / calc(100% - 4px)
      calc(100% - 16px) no-repeat,
    linear-gradient(#ffffff, #ffffff) 50% 50% / calc(100% - 16px)
      calc(100% - 4px) no-repeat,
    linear-gradient(140deg, #673ab7 0%, #512da8 100%);
  border-radius: 8px;
  padding: 2px 20px;
  box-sizing: border-box;

  h2 {
    font-size: 1rem;
  }
`;
