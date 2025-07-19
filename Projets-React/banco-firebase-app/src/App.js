import { useEffect, useState } from "react";
import { db, auth } from "./firebaseConnection";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"
import "./style.css";

function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [idPost, setIdPost] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [user, setUser] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
        let listaPost = [];

        snapshot.forEach((doc) => {
          listaPost.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          });
        });
        setPosts(listaPost);
      });
    }
    loadPosts();
  });

  useEffect(() => {
    async function checkLogin(){
      onAuthStateChanged(auth, (user) => {
        if(user){
          console.log(user);
          setUser(true);
          setUserDetails({
            uid: user.uid, 
            email: user.email,
          })
        }else {
          setUser(false);
          setUserDetails({});
        }
      })
    }

    checkLogin();
  }, [])


  //  useEffect(() => {
  //   buscarPost();
  // }, [autor, titulo])

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
      });
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

    const postRef = collection(db, "posts");
    await getDocs(postRef)
      .then((snapshot) => {
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          });
        });
        setPosts(lista);
      })
      .catch((error) => {
        console.log("Error ao buscar posts", error);
      });
  }

  async function editarPost() {
    const docRef = doc(db, "posts", idPost);
    await updateDoc(docRef, {
      titulo: titulo,
      autor: autor,
    })
      .then(() => {
        alert("Post atualizado com sucesso");
        setIdPost("");
        setTitulo("");
        setAutor("");
        buscarPost();
      })
      .catch((error) => {
        console.log("Error ao atualizar post", error);
      });
  }

  async function excluirPost(id) {
    const docRef = doc(db, "posts", id);
    await deleteDoc(docRef, {
      titulo: titulo,
      autor: autor,
    })
      .then(() => {
        alert("Post excluído com sucesso");
        buscarPost();
      })
      .catch((error) => {
        console.log("Error ao excluir post", error);
      });
  }

  async function novoUsuario() {
    await createUserWithEmailAndPassword(auth, email, senha)
    .then((value) => {
      alert("Cadastrado com sucesso");
      setEmail("");
      setSenha("");
      console.log(value);
    })
    .catch((error) => {
      if(error.code === "auth/weak-password") {
        alert("Senha muito fraca");
      }else if (error.code === "auth/email-already-in-use"){
        alert("Email já cadastrado");
      }
    })  
  }

  async function logarUsuario() {
    await signInWithEmailAndPassword(auth, email, senha)
    .then((value) => {
      alert("Login realizado com sucesso");
      console.log(value.user)

      setUserDetails({
        uid: value.user.uid, 
        email: value.user.email,
      })

      setUser(true);

      setEmail("");
      setSenha("");
      
    })
    .catch((error) => {
      console.log("Error ao fazer login: ", error);
    })
  }

  async function fazerLogout() {
    await signOut(auth)
    .then(() => {
      setUser(false);
      setUserDetails({});
      alert("Logout realizado com sucesso");
    })

    .catch((error) => {
      console.log("Error ao fazer logout: ", error);
    })  
  }

  return (
    <div className="App">
      <h1>React js + FireBase</h1>

     {user && (
      <div>
        <strong>Seja bem vindo(a) voce está logado</strong> <br />
        <span>ID: {userDetails.uid}</span> <br />
        <span>Email: {userDetails.email}</span> <br /> 
        
        <button onClickCapture={fazerLogout}>Sair da conta</button>
      </div>
     )}


      <div className="container">
        <h2>Usuários</h2>
        <label>Email</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite o seu email" /> <br />


        <label>Senha: </label>
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite a sua senha" />
        <br />

        <button onClick={novoUsuario}>Cadastrar</button>
        <button onClick={logarUsuario}>Fazer Login</button>
        
      </div>
      <br /> <br />
      <hr />

      <div className="container">
        <h2>Posts</h2>
        <label>Id do Post:</label>
        <input
          type="text"
          placeholder="Digite o id do post"
          value={idPost}
          onChange={(e) => setIdPost(e.target.value)}
        />{" "}
        <br />
        <label>Titulo:</label>
        <textarea
          type="text"
          placeholder="digite o titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        ></textarea>
        <label>Autor:</label>
        <input
          type="text"
          placeholder="Autor do post"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={buscarPost}>Buscar post</button>
        <br />
        <button onClick={editarPost}>Atualizar Post</button>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <strong>ID: {post.id}</strong> <br />
                <span>Titulo: {post.titulo}</span> <br />
                <span>Autor: {post.autor}</span> <br />
                <button onClick={() => excluirPost(post.id)}>
                  Excluir
                </button>{" "}
                <br /> <br />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
