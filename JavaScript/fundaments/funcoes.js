var area = document.getElementById("area");


function entrar(){
  var nome = prompt("Digite o seu nome:");


  if(nome == null || nome.trim() === "") {
    area.innerHTML = "Por favor, digite um nome válido.";
    return; 
  }else {
    area.innerHTML = "Bem vindo " + nome + " ";

    let buttonSair = document.createElement("button");
    buttonSair.innerText = "Sair Da Conta";
    buttonSair.onclick = sair;

    area.appendChild(buttonSair);
  }
}


function sair() {
  alert("Até mais")
  area.innerHTML = "Você saiu da conta.";
}


function mediaAluno(nota1, nota2) {
  var media = (nota1 + nota2) / 2;

  if(media >= 7){
    console.log("Aluno aprovado com a média: " + media);
  }else if(media < 7){
    console.log("Aluno reprovado com a média: " + media);
  }
}


function aluno(nome, curso){
  var mensagem = "Seja bem vindo " + nome + " ao curso de " + curso;
  console.log(mensagem);
}