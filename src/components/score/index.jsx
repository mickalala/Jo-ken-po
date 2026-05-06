import { Typography, Flex } from "../../styles";

export const Score = ({ userName, scorePlayer, scoreComputer }) => {
  userName = userName.length > 12 ? `${userName.slice(0, 8)}...` : userName;
  return (
    <Flex direction="column">
      <Typography weight="400" size="32px" lineHeight="48px">
        PLACAR
      </Typography>
      <Flex justify="space-between">
        <Flex direction="column" gap="2px">
          <Typography>{userName}</Typography>
          <Typography>{scorePlayer}</Typography>
        </Flex>
        <Typography>x</Typography>

        <Flex direction="column" gap="2px">
          <Typography>máquina</Typography>
          <Typography>{scoreComputer}</Typography>
        </Flex>
      </Flex>
    </Flex>
  );
};
