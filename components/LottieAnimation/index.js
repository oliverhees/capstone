import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styled from "styled-components";

const LottieAnimation = ({ animationData, loop = true }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const anim = lottie.loadAnimation({
        container: containerRef.current,
        animationData,
        loop,
        autoplay: true,
      });

      return () => anim.destroy(); // Optional: Cleanup on unmount
    }
  }, [animationData, loop]);

  return <LottieContainerStyled ref={containerRef}></LottieContainerStyled>;
};

export default LottieAnimation;

const LottieContainerStyled = styled.div`
  width: 150px;
  padding: 0;
  margin: 0;
  margin: auto;
`;
