// URL = https://sujeitoprogramador.com/rn-api/?api=posts

let listElement = document.querySelector("#app");
let posts = [];

function nutriapp(){
  fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
  .then((r) => r.json())
  .then((json) => {
    posts = json;

    posts.map((item) =>{
      let liElement = document.createElement("li");
      let titleElement = document.createElement("strong");
      let imgElement = document.createElement("img");
      let descriptionElement = document.createElement("a");

      let titleTexto = document.createTextNode(item.titulo);
      titleElement.appendChild(titleTexto);
      liElement.appendChild(titleElement);

      imgElement.src = item.capa;
      liElement.appendChild(imgElement);

      let descriptionTexto = document.createTextNode(item.subtitulo);
      descriptionElement.appendChild(descriptionTexto);
      liElement.appendChild(descriptionElement);


      listElement.appendChild(liElement);
    })
  })
  .catch(() => {
    console.error("Erro ao carregar os posts");
  })
}

nutriapp();