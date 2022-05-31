
var products={
    pencil:{
        price: 2,
        name:"pencil",
    },
    chips:{
        price: 3,
        name:"chips",
    },
    candy:{
        price: 4,
        name:"candy",
    },
    sweater:{
        price: 5,
        name:"sweater",
    }
}

var purchases={
    Annie:{
        Monday:["chips", "candy"],
        Tuesday:["sweater", "chips"],
        Wednesday:["candy", "pencil"],
    },
    Jazz:{
        Monday:["pencil", "chips"],
        Tuesday:["candy", "pencil"],
        Wednesday:["chips", "caandy"],
    },
    Virgil:{
        Monday:["chips", "sweater"],
        Tuesday:["pencil", "candy"],
        Wednesday:["candy", "chips"],
    },
    Kailah:{
        Monday:["pencil", "sweater"],
        Tuesday:["chips", "pencil"],
        Wednesday:["sweater", "candy"],
    },
}
var pricer
var taxedPrice
function findTotal(name,day){
    pricer=0
    var item=purchases[name]
    var items=item[day]
    
    
    
    for(i=0;i<items.length;i++){
        console.log(items[i])
        var thing=items[i]
        var thingy=window[thing]
        console.log(thing+thingy)
        var pricey=parseInt(products[items[i]].price)
        // alert(pricey)
        pricer=pricer+pricey
        
    }
    taxedPrice=pricer*1.13

    
    console.log(Object.keys(purchases))
}
findTotal("Annie","Monday")

function Review(name,day){
    var item=purchases[name]
    var items=item[day]
    var div1=document.createElement('div')
    document.body.appendChild(div1)
    div1.innerHTML="Reciept for: "+name+"      Date: "+day
    var div2=document.createElement('div')
    document.body.appendChild(div2)
    div2.innerHTML=products[items[0]].name+"       $"+products[items[0]].price
    var div3=document.createElement('div')
    document.body.appendChild(div3)
    div3.innerHTML=products[items[1]].name+"       $"+products[items[1]].price
    var div4=document.createElement('div')
    document.body.appendChild(div4)
    div4.innerHTML="Total: $"+pricer
    var div5=document.createElement('div')
    document.body.appendChild(div5)
    div5.innerHTML="Taxed Total: $"+Math.round(taxedPrice*100)/100

}
Review("Annie","Monday")

function EndOfDay(day){
    var endTotal=0
    var People=Object.keys(purchases)
    for(let i=0;i<People.length;i++){
        findTotal(People[i],day)
        endTotal=endTotal+pricer
    }
    alert("The end of day total is $"+endTotal)
}
EndOfDay("Monday")
