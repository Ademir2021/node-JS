const dataItem= document.getElementById("itens");

var data = [{name:"Mouse Serial"},
            {name:"Teclado"},
            {name:"Caixa som"},
            {name:"Monitor"},
            {name:"Receptor B5"}
            ]

data.map((val)=>{
dataItem.innerHTML+=`
<option value = ${val.name}></option>`
})
