import {useState} from "react";

import {Nome} from "./components/nome";

function App() {
  const [aluno, setAluno] = useState("Sujeito Programador");

  function handleChangeName(nome) {
    setAluno(nome)
  }

  return (
    <div className="container">
      <h1>Component APP</h1><br />
      <h2>Olá {aluno}</h2>
      <button onClick={() => handleChangeName("Robson de Jesus")}>
        Mudar Nome
      </button>
      {/* <Nome aluno="Robson de Jesus" idade={29}/> */}
     
    </div>
  );
}

export default App;



