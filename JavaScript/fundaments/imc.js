
// <form onsubmit="return calcular(event)">
//       <label>Digite seu peso</label> <br/>
//       <input type="text" name="peso" id="peso" placeholder="65"><br/>

//       <label for="">Digite sua altura</label><br/>
//       <input type="text" name="altura" id="altura" placeholder="Exemplo 1.90m"><br/>

//       <input type="submit" value="Calcular IMC">
//     </form>

//     <div id="resultado">
      
//     </div>




var peso;
var altura;
var imc;
var resultado;

function calcular(event){
  event.preventDefault(); 

  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;

  imc = peso / (altura * altura);
  resultado = document.getElementById("resultado");

  if (imc < 17){
    resultado.innerHTML = "<br/> Seu Resultado foi: " + imc.toFixed(2) + "<br/> Cuidado vc esta muito abaixo do peso ideal";
  }else if(imc > 17 && imc <= 18.49){
    resultado.innerHTML = "<br/> Seu Resultado foi: " + imc.toFixed(2) + "<br/>Voce está Abaixo do peso ideal";
  }else if(imc >= 18.5 && imc < 24.99){
    resultado.innerHTML = "<br/> Seu Resultado foi: " + imc.toFixed(2) + "<br/>Parabéns, você está no peso ideal";
  }else if(imc > 25 && imc <= 29.99){
    resultado.innerHTML = "<br/> Seu Resultado foi: " + imc.toFixed(2) + "<br/>Cuidado, você está levemente acima do peso ideal";
  }else if(imc >= 30){
    resultado.innerHTML = "<br/> Seu Resultado foi: " + imc.toFixed(2) + "<br/>Cuidado, você está com obesidade";
  }


  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
 
}