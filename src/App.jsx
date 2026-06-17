import { useState } from "react";
import { Button } from "./components/button";
import { Handsbuttons } from "./components/hands-game";
import { Input } from "./components/input";
import { Modal } from "./components/modal";
import { Score } from "./components/score";
import * as C from "./styles";

const messages = {
  rules: {
    title: "Regras",
    message:
      "Jo ken pô, é um jogo que as pessoas jogam com as mãos, escolhendo entre pedra (mão fechada), tesoura (dois dedos a frente) e papel (mão espalmada). O jogo é similar ao 'par ou ímpar', porém com uma variável a mais. Funciona assim: Cada jogador escolhe uma opção. A tesoura corta o papel, mas é quebrada pela pedra. A pedra quebra a tesoura, mas é amassada pelo peapel. Por fim, o papel é cortado pela tesoura e embrulha a pedra. O desafio aqui é vencer o computador 10 vezes! Faça a sua escolha e boa sorte!",
  },
  user: {
    title: "Usuário",
    message: "Preencha um nome para o jogador.",
  },
};
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

function App() {
  const [title, setTitle] = useState(messages.rules.title);
  const [text, setText] = useState(messages.rules.message);
  const [open, setOpen] = useState(false);
  const [textInit, setTextInit] = useState("Iniciar Jogo!");
  const [userAction, setUserAction] = useState("❓");
  const [computerAction, setComputerAction] = useState("❓");
  const [userScoreValue, setUserScoreValue] = useState(0);
  const [computerScoreValue, setComputerScoreValue] = useState(0);

  const [userName, setUserName] = useState("Jogador");
  const [playGame, setPlayGame] = useState(true);

  const handleModal = (type) => {
    if (!type) {
      setOpen(false);
      setTitle("");
      setText("");
      return;
    }
    setOpen(true);
    setTitle(messages?.[type]?.title);
    setText(messages?.[type]?.message);
  };

  const computerRandomAction = () => {
    const number = Math.floor(Math.random() * actions.length);
    console.log(number);
    return actions[number].label;
  };

  const handleActionClick = (value) => {
    setUserAction(value.label);
    setComputerAction(computerRandomAction());
  };

  const handleUserName = (value) => {
    if (!value) return setUserName("Jogador");
    setUserName(value);
  };

  const startGame = () => {
    if (userName == "Jogador") {
      handleModal("user");
      setPlayGame(true);
      return;
    }
    setPlayGame(false);
  };

  return (
    <C.Container>
      <C.Flex direction="column">
        <C.Typography weight="400" size="32px" lineHeight="48px">
          JO KEN PÔ
        </C.Typography>
        <Input
          placeholder="Digite o nome do jogador"
          onChange={handleUserName}
        />
        <Button onClick={() => startGame()}>
          {playGame ? "Iniciar" : "Parar"}
        </Button>
        <Score
          userName={userName}
          scorePlayer={userScoreValue}
          scoreComputer={computerScoreValue}
        ></Score>
        <C.Spacer margin="10px" />
        <C.Flex justify="space-around">
          <C.Typography size="38px">{userAction}</C.Typography>
          <C.Typography size="38px">{computerAction}</C.Typography>
        </C.Flex>
        <C.Spacer />
        <C.Flex direction="column" gap="0px">
          <C.Typography weight="700" size="22px">
            {textInit}
          </C.Typography>
          <C.Rules onClick={() => handleModal("rules")}>Regras</C.Rules>
        </C.Flex>
        <Handsbuttons
          actions={actions}
          disabled={playGame}
          onClick={(value) => handleActionClick(value)}
        ></Handsbuttons>
        <Modal
          open={open}
          title={title}
          message={text}
          handleModal={() => handleModal(null)}
        />
      </C.Flex>
    </C.Container>
  );
}

export default App;
