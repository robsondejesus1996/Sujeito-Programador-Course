var lista = ["Robson", "Lucas", "João", "Maria", 150];
console.log(lista);

console.log(lista[0]);
console.log(lista.length);

console.log(lista.indexOf("João"));
console.log(lista.indexOf("Jesus"));
lista[1] = "Pedro";
console.log(lista);
lista.push("Ana");
console.log(lista);
lista.shift();
console.log(lista);
lista.pop();
console.log(lista);
console.log(lista.join(" ; "));