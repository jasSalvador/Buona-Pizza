/*Los clientes pueden elegir 3 ingredientes gratis, pero los demás cuestan $800 pesos cada uno. Al elegir los ingredientes extras,
se debe mostrar los ingredientes agregados y el valor total, Al hacer clic en “Ingresar Propina”, se debe agregar $1000 pesos 
como valor por defecto, Si el usuario ingresa otro valor, la propina debe reflejar el cambio, al hacer clic en “Enviar Pedido”,
se mostrará un mensaje por medio de un alert*/

let agregarIngredientes = [];
let contador = 0;


$("input").on("click", function(){
    if ($(this).prop("checked")){    //prop funcion propia de jq para evaluar el checkbox
        agregarIngredientes.push(this.name)
        $("#ingredientes").text(agregarIngredientes)
        if (agregarIngredientes.length > 3){
            let suma = (agregarIngredientes.length - 3) * 800
            $("#precioIngredientesExtras").text(`$${suma}`)
            $("#ingredientesExtras").text(agregarIngredientes.slice(3)) //slice mostrara desde el 3
        }
    }else if (! $(this).prop("checked")){
        agregarIngredientes = agregarIngredientes.filter(item => item != this.name)
        $("#ingredientes").text(agregarIngredientes)
        if (agregarIngredientes.length > 3){
            let resta = (agregarIngredientes.length - 3) * 800
            $("#precioIngredientesExtras").text(`$${resta}`)
            $("#ingredientesExtras").text(agregarIngredientes.slice(3))
        } else {
            let resta = 0;
            $("#precioIngredientesExtras").text(`$${resta}`)
            $("#ingredientesExtras").text("")
        }
    }
});
    
function ingresoPro() {
    $("#propina").text(`$${$("#ingresarPropina").val()}`)
}

$("#btn").on("click", function(){
    if($("#propina").text() != ""){
        alert(`Su propina de ${$("#propina").text()} ha sido enviada`)
    }else {
        alert("Aun no has definido una propina")
    }
});

function start() {
    $("#propina").text("$1000")
}
