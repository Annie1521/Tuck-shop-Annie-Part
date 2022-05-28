
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

function findTotal(){
    var items=purchases.Annie.Monday
    var pricer=0;
    
    console.log(products.items[0])
    for(i=0;i<items.length;i++){
        
        var thing=items[i]
        var pricey=products.thing
        alert(pricey)
        pricer=pricer+pricey
        
    }
    var taxedPrice=pricer*1.13
    alert(price,taxedPrice)
}
findTotal()