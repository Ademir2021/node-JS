const url = "http://localhost/users:3000"

const searchItem = document.getElementById("searchItem")
const buttonSearchItem = document.querySelector("#search")
const dataItens= document.getElementById("listItens");

const vendidos = []

/*Itens **/
const itens = [
            {id:1, name:"Mouse Serial", barras:"123", valor:18.00},
            {id:2, name:"Teclado 2", barras:"1234", valor:29.90},
            {id:3, name:"Monitor AOC 18", barras:"12345", valor:680.90},
            {id:4, name:"Caixa Som", barras:"123456", valor:120.90}
            ]
    itens.map((val)=>{
            dataItens.innerHTML+=`
            <option value = "${val.name}"></option>`
            })

buttonSearchItem.addEventListener("click", function(e){
e.preventDefault()
/* Pegar Input do Value*/
const item = document.getElementById("item").value
const quant = document.getElementById("quant").value
/*Laço for para buscar item*/
let itens_ = {}
for(let i=0; itens.length > i; i++)
    if(item == itens[i].name || item == itens[i].id || item == itens[i].barras){
        itens_.item = itens[i].name
        let valor = itens[i].valor
        itens_.valor = parseFloat(valor).toFixed(2)
        itens_.totalItem = 0
        let totalItem_ = itens[i].valor * quant;
        itens_.totalItem = parseFloat(totalItem_).toFixed(2)
        /*Rederiza na tela**/
searchItem.innerHTML +=`
    <p>${itens_.item} ${itens_.valor} ${itens_.totalItem}</p>`
    console.log(itens_) 
    vendidos.push(itens_)  
    console.log(vendidos)
}
})