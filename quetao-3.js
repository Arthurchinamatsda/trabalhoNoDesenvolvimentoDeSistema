//terceira questao
const estoqueDPecas = [ "engrenagem" , "mola" , "cano" , "superbonder"]
function retiraPecas (){
    estoqueDPecas.unshift("macaco de carro")
    estoqueDPecas.pop()
}
retiraPecas()
console.log(estoqueDPecas)