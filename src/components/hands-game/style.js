import styled from "styled-components";

export const HandCircle = styled.button`
  width: 72px;
  height: 72px;
  border-radius: 50%;

  &:active {
    opacity: ${(props) => (props.disabled ? "1" : "0.6")};
  }
  &:hover {
    opacity: ${(props) => (props.disabled ? "1" : "0.7")};
  }
`;
