import { Flex, Typography, Spacer } from "../../styles";
import { ModalStyled, ModalButton } from "./style";

export const Modal = ({ open, handleModal, title, message }) => {
  return (
    <ModalStyled open={open}>
      <Flex direction={"column"}>
        <Typography primary size={"32px"} weight="400">
          {title}
        </Typography>
        <Typography primary weight="400">
          {message}
        </Typography>
        <ModalButton onClick={() => handleModal()}>X</ModalButton>
      </Flex>
    </ModalStyled>
  );
};
