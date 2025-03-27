//segunda questão
let filaDeEsperaComLimite = [];
let limite = 5;                                 //cria um limite
filaDeEsperaComLimite.unshift("eduarda")
filaDeEsperaComLimite.unshift("maduh")        //pessoa teste
function addClient(){                           //função
    filaDeEsperaComLimite.unshift("gabriel","maria","leonardo")
};
function removeClient(){
    filaDeEsperaComLimite.pop()
};

function verificar(i) {
    i = filaDeEsperaComLimite.length
    if (i < limite) {
        addClient();
        console.log(filaDeEsperaComLimite)
    }
    else{
        removeClient();
        console.log(filaDeEsperaComLimite)
    }
};
verificar();
