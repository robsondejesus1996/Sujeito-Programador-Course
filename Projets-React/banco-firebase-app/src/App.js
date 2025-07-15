import { useState } from "react";
import { db } from "./firebaseConnection";
import {addDoc, collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import "./style.css";

function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");

  const [posts, setPosts] = useState([]);

  async function handleAdd() {
    // await setDoc(doc(db, "posts", "12345"), {
    //   titulo: titulo, 
    //   autor: autor,
    // })

    // .then(() => {
    //   console.log("Dados registrado no banco")
    // })
    // .catch((error) => {
    //   console.log("Error de cadastro:", error)
    // })}
    await addDoc(collection(db, "posts"), {
      titulo: titulo, 
      autor: autor,
    })
    .then(() => {
      console.log("Cadastrado com sucesso");
      setTitulo("");
      setAutor("");
    })
    .catch((error) => {
      console.log("Error de cadastro:", error);
    })
}


async function buscarPost() {
  // const postRef = doc(db, "posts", "cx9zYbTrPP0k6KA7AeaS")
  // await getDoc(postRef)
  // .then((snapshot) => {
  //   setAutor(snapshot.data().autor);
  //   setTitulo(snapshot.data().titulo);
  // })
  // .catch((error) => {
  //   console.log("Error ao buscar post", error)
  // })

  const postRef = collection(db, "posts")
  await getDocs(postRef)

  .then((snapshot) => {
    let lista = [];

    snapshot.forEach((doc) => {
      lista.push({
        id: doc.id,
        titulo: doc.data().titulo, 
        autor: doc.data().autor
      })
    })
    setPosts(lista);
  })
  .catch((error) => {
    console.log("Error ao buscar posts", error);
  })

}

  return (
    <div className="App">
      <h1>React js + FireBase</h1>

      <div className="container">
        <label>Titulo:</label>
        <textarea
          type="text"
          placeholder="digite o titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        ></textarea>
        <label>Autor:</label>
        <input type="text" placeholder="Autor do post" value={autor} onChange={(e) => setAutor(e.target.value)}/>

        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={buscarPost}>Buscar post</button>

        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <span>Titulo: {post.titulo}</span> <br />
                <span>Autor: {post.autor}</span> <br /> <br />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
