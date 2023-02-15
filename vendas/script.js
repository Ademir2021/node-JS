const url = "http://localhost:3000/products";
const includedItems = document.getElementById("includedItems")
const buttonSearchItem = document.querySelector("#search")
const listItens= document.getElementById("listItens");
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
        const item = document.getElementById("item").value
        const quant = document.getElementById("quant").value
        for(let i=0; itens.length > i; i++)
            if (item == itens[i].descric_product || item == itens[i].id_product || item == itens[i].bar_code ){
                let newItem = {}
                newItem.item = itens[i].descric_product
                newItem.quant = quant
                let valor = itens[i].val_max_product
                newItem.valor = parseFloat(valor).toFixed(2)
                let totalItem_ = 0
                totalItem_ = itens[i].val_max_product * quant;
                newItem.totalItem = parseFloat(totalItem_).toFixed(2)
                includedItems.innerHTML +=`
                <div id="parent">
                <div>${newItem.item}</div>
                <div id="x">${newItem.quant}</div>
                <div>${newItem.valor}</div>
                <div>${newItem.totalItem}</div>
                <div><button onclick=myFunc()>Click me</button></div>
                </div>
                `
                console.log(newItem)
                soldItems.push(newItem)
                }
            }
            )}).catch(error =>console.log(error))
        }

        function myFunc() {
            $('#parent').empty();
        }