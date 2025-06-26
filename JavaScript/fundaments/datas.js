var data = new Date();
console.log(data);

console.log(data.getHours());
console.log(data.getMinutes());
console.log(data.getSeconds());
console.log(data.getMilliseconds());

var dataNova = new Date("March 10, 2018");
console.log(dataNova);
console.log(Date.parse(dataNova));
console.log(dataNova.getDate());
console.log(dataNova.getMonth());
console.log(dataNova.getDay());
console.log(dataNova.getFullYear());
console.log(dataNova.getDate() + "/" + (dataNova.getMonth()+ 1)  + "/" + dataNova.getFullYear());
console.log(dataNova.setDate(dataNova.getDate() + 5));
console.log(dataNova.setHours(dataNova.getHours() + 10));
console.log(dataNova);
console.log(dataNova.getDay());
var dias = ["Domingo", "Segunda" , "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
console.log(dias[dataNova.getDay()]);
