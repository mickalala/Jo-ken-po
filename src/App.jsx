import { useState } from "react";
import { Button } from "./components/button";
import { Handsbuttons } from "./components/hands-game";
import { Input } from "./components/input";
import { Modal } from "./components/modal";
import { Score } from "./components/score";
import * as C from "./styles";

const message = [
  {
    title: "Regras",
    message:
      "Jo ken pô, é um jogo que as pessoas jogam com as mãos, escolhendo entre pedra (mão fechada), tesoura (dois dedos a frente) e papel (mão espalmada). O jogo é similar ao 'par ou ímpar', porém com uma variável a mais. Funciona assim: Cada jogador escolhe uma opção. A tesoura corta o papel, mas é quebrada pela pedra. A pedra quebra a tesoura, mas é amassada pelo peapel. Por fim, o papel é cortado pela tesoura e embrulha a pedra. O desafio aqui é vencer o computador 10 vezes! Faça a sua escolha e boa sorte!",
  },
];

function App() {
  const [title, setTitle] = useState(message[0].title);
  const [text, setText] = useState(message[0].message);
  const [open, setOpen] = useState(false);
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
          <C.Rules onClick={() => setOpen(true)}>Regras</C.Rules>
        </C.Flex>
        <Handsbuttons
          actions={actions}
          disabled={false}
          onClick={(value) => handleClick(value)}
        ></Handsbuttons>
        <Modal
          open={open}
          title={title}
          message={text}
          handleModal={() => setOpen(false)}
        />
      </C.Flex>
    </C.Container>
  );
}

export default App;
