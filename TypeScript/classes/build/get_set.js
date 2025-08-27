"use strict";
class Jogo {
    constructor(servidor) {
        this.id = "1234";
        this.servidor = servidor;
    }
    get getServidorIP() {
        console.log("=== Metodo get ===");
        return this.servidor;
    }
    set setServidorIP(novoIp) {
        if (this.servidor === novoIp) {
            throw new Error("IP nao pode ser o mesmo");
        }
        this.servidor = novoIp;
    }
}
const GTA5 = new Jogo("244.178.44.111");
try {
    GTA5.setServidorIP = "144.178.44.111";
}
catch (error) {
    console.log("Errror: " + error);
}
console.log(GTA5.getServidorIP);
// console.log(GTA5)
