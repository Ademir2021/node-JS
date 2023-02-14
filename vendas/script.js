const url = "http://localhost:3000/products";
const includedItems = document.getElementById("includedItems")
const buttonSearchItem = document.querySelector("#search")
const listItens= document.getElementById("listItens");
let newItem = {}
const soldItems = [] /**Itens Vendidos */
getItem()

async function getItem(){
   await axios.get(url)
    .then(response =>{
        const data = response.data
        const itens = data
        itens.map((val)=>{
        listItens.innerHTML+=`
        <option value = "${val.descric_product}"></option>`
        })

buttonSearchItem.addEventListener("click", function(e){
    e.preventDefault()
    /* Pegar Input do Value*/
        const item = document.getElementById("item").value
        const quant = document.getElementById("quant").value
    /*Laço for para buscar item*/
        for(let i=0; itens.length > i; i++)
            if (item == itens[i].descric_product || item == itens[i].id_product || item == itens[i].bar_code ){
                newItem.item = itens[i].descric_product
                newItem.quant = quant
                let valor = itens[i].val_max_product
                newItem.valor = parseFloat(valor).toFixed(2)
                let totalItem_ = 0
                totalItem_ = itens[i].val_max_product * quant;
                newItem.totalItem = parseFloat(totalItem_).toFixed(2)
    /*Rederiza na tela**/
includedItems.innerHTML +=`
        <div id="">
            <span>${newItem.item}</span>
            <span>${newItem.quant}</span>
            <span>${newItem.valor}</span>
            <span>${newItem.totalItem}</span>
            <button onClick="">Apagar</button>
        </ul>`
    //console.log(newItem) 
            soldItems.push(newItem)  
            console.log(soldItems)
        }})
    })
.catch(error =>console.log(error))
}


