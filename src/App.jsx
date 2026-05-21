import { Button } from "./components/button";
import { Handsbuttons } from "./components/hands-game";
import { Input } from "./components/input";
import { Score } from "./components/score";
import * as C from "./styles";

function App() {
  const actions = [
    {
      value: 1,
      label: "👊🏼",
      description: "Rock",
    },
    {
      value: 2,
      label: "✌🏼",
      description: "Scissors",
    },
    {
      value: 3,
      label: "✋🏼",
      description: "Paper",
    },
  ];
  const handleClick = (value) => {
    console.log(value);
  };
  return (
    <C.Container>
      <C.Flex direction="column">
        <C.Typography weight="400" size="32px" lineHeight="48px">
          JO KEN PÔ
        </C.Typography>
        <Input
          placeholder="Digite o nome do jogador"
          onChange={(value) => console.log(value)}
        />
        <Button>Iniciar</Button>
        <Score userName="Jogador" scorePlayer={0} scoreComputer={0}></Score>
        <C.Spacer margin="10px" />
        <C.Flex justify="space-around">
          <C.Typography size="38px">❓</C.Typography>
          <C.Typography size="38px">❓</C.Typography>
        </C.Flex>
        <C.Spacer />
        <C.Flex direction="column" gap="0px">
          <C.Typography weight="700" size="22px">
            Inicie o Jogo!
          </C.Typography>
          <C.Rules>Regras</C.Rules>
        </C.Flex>{" "}
        <Handsbuttons
          actions={actions}
          disabled={false}
          onClick={(value) => handleClick(value)}
        ></Handsbuttons>
      </C.Flex>
    </C.Container>
  );
}

export default App;
