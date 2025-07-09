import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");

  const [tarefas, setTarefas] = useState(() => {
    const tarefasStorage = localStorage.getItem('@tarefa');
    return tarefasStorage ? JSON.parse(tarefasStorage) : [];
  });

  useEffect(() => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas));
  }, [tarefas]);

  function handleRegistrar(e) {
    e.preventDefault();

    if (input.trim() === "") return;

    setTarefas([...tarefas, input]);
    setInput("");
  }

  return (
    <div className="container">
      <h1>Cadastrando tarefas</h1>
      <form onSubmit={handleRegistrar}>
        <label>Nome da tarefa:</label><br />
        <input placeholder="Digite uma tarefa" value={input} onChange={(e) => setInput(e.target.value)} /><br />
        <button type="submit">Registrar</button>
      </form>

      <br />

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;