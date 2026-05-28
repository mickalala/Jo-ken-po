import styled from "styled-components";

export const ModalStyled = styled.div`
  width: 80%;
  border-radius: 12px;
  background-color: #ececec;
  padding: 16px;
  position: absolute;
  top: ${(props) => (props.open ? "70px" : "-100%")};
  transition: 0.5 ease;
  z-index: 2;
`;

export const ModalButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  right: 2%;
  top: 2%;

  background-color: #1a1a1a;
  color: #ececec;
  font-weight: 700;
  font-size: 27px;
  line-height: 33px;
`;
