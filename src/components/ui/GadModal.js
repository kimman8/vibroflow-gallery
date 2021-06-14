import React, { useState } from "react";
import Modal from "../ui/Modal";
import styled from "styled-components";
import { GlobalStyle } from "./globalStyles";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const Button = styled.button`
  border-radius: 4px;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

const GadModal = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <React.Fragment>
      <Container>
        <Button
          onClick={openModal}
          className="hover:bg-indigo-700 font-mono bg-indigo-500 px-6 py-2 text-xl ring ring-indigo-600  ring-offset-2 text-bold "
        >
          GAD
        </Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </Container>
    </React.Fragment>
  );
};

export default GadModal;
