import { Button } from "./components/button";
import { Input } from "./components/input";
import { Score } from "./components/score";
import * as C from "./styles";

function App() {
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
        <Score userName="Jogador" scorePlayer="0" scoreComputer="0"></Score>
      </C.Flex>
    </C.Container>
  );
}

export default App;
