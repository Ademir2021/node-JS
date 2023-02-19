const url_prod = "http://localhost:3000/products";
const url_sale = "http://localhost:3000/sales";
const includedItems = document.getElementById("includedItems");
const btnSearchItem = document.querySelector("#search");
const listItens = document.getElementById("listItens");
const sale = [{fk_name_pers:0, disc_sale:0}] /** Venda + Itens Lancados */
getItem() /**Pegar itens */

const setName = 5
sale[0].fk_name_pers = setName
const setDisc = 4.80
sale[0].disc_sale = setDisc

// const itens = [ /**inclui estes itens */
//                 {item:"Mouse", quant:1, valor:18.00, totalItem:18.00},
//                 {item:"Teclado", quant:1, valor:38.00, totalItem:38.00},
//                 {item:"Conector F", quant:1, valor:1.50, totalItem:1.50}
//               ]
// itens.map((s)=>{sale.push(s)}) /**inclui itens da lista na Venda */

async function getItem(){
   await axios.get(url_prod)
    .then(response =>{
        const data = response.data;
        const itens = data;
        itens.map((val)=>{
            listItens.innerHTML+=` 
            <option value = "${val.descric_product}"></option>`
        })

btnSearchItem.addEventListener("click", function(e){
    e.preventDefault();
        const item = document.getElementById("descric_product").value;
        const amount_product = document.getElementById("amount_product").value;
        for(let i=0; itens.length > i; i++)
            if (item == itens[i].descric_product
                || item == itens[i].id_product
                || item == itens[i].bar_code ){
                const newItem = {};
                newItem.id_product = itens[i].id_product;
                newItem.descric_product = itens[i].descric_product;
                newItem.amount_product = amount_product;
                const val_product = itens[i].val_max_product;
                newItem.val_product = parseFloat(val_product).toFixed(2);
                const total_product_ = itens[i].val_max_product * amount_product;
                newItem.total_product = parseFloat(total_product_).toFixed(2);
                includedItems.innerHTML +=`
                <div id="parent">
                <b>${newItem.id_product}</b>
                <b>${newItem.descric_product}</b>
                <b>${newItem.amount_product}</b>
                <b>${newItem.val_product}</b>
                <b>${newItem.total_product}</b>
                <button onclick=clearItem()>X</button>
                </div> 
                </fieldset>`
                sale.push(newItem);
                console.log(sale);
                }
            }
            )}).catch(error =>console.log(error));
        }
        
        function clearItem() {
            $('#parent', ).empty();
        }