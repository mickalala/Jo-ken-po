import { Flex, Typography } from "../../styles";
import { HandCircle } from "./style";

export const Handsbuttons = ({ actions, disabled, onClick }) => {
  return (
    <Flex>
      {actions.map((action) => (
        <HandCircle
          key={action.value}
          disabled={disabled}
          onClick={() => onClick(action)}
        >
          <Typography size="32px">{action.label}</Typography>
        </HandCircle>
      ))}
    </Flex>
  );
};
