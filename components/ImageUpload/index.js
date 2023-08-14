import Image from "next/image.js";
import React, { useState } from "react";
import styled from "styled-components";

export default function ImageUpload({ image, setImage }) {
  const [error, setError] = useState(null);

  async function submitImage(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch("/api/upload", {
        method: "post",
        body: formData,
      });
      const img = await response.json();

      console.log("Browser: response from API: ", img);

      setImage(img);
    } catch (error) {
      setError(error);
    }
  }
  return (
    <MainWrapper>
      {image && (
        <ImageContainer>
          <Image
            src={image.url}
            alt="Uploaded image"
            layout="responsive"
            height={image.width}
            width={image.height}
            style={imageStyle}
          />
        </ImageContainer>
      )}
      {error && <div>{error.message}</div>}
      <Form onSubmit={submitImage}>
        <input type="file" name="file" />
        <button type="submit">Upload</button>
      </Form>
    </MainWrapper>
  );
}

const imageStyle = {
  borderRadius: "50%",
  border: "1px solid #fff",
};

const Form = styled.form`
  max-width: 20rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  margin: 0 auto;

  img {
    border-radius: 50%;
    border: 2px solid grey;
    max-width: 150px;
    max-height: 150px;
  }
`;

const MainWrapper = styled.main`
  padding: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
