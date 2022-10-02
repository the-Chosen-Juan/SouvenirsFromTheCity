// DATOS USUARIO
const user = "admin"
const password = "admin"


// LOGIN
function login(){

    let usuario = prompt("Ingresá tu usuario")
    let contraseña = prompt("ingresá tu contraseña")

    if (validar(usuario, contraseña)){
        alert("Bienvenido "+ user)
        iniciarCarrito()

    } else {
        alert("Volvé a ingresar tus datos")

        do{
        usuario = prompt("Ingresá tu usuario")
        contraseña = prompt("ingresá tu contraseña")
        }
        while (validar(usuario, contraseña)==false) {
            alert("Bienvenido "+ user)
            iniciarCarrito()
        }
    }
}

// VALIDACION DE DATOS
function validar (usuario, contraseña){
    if (usuario === user && contraseña === password){
        return true
    } else if (usuario != user && contraseña === password) {
        alert("Usuario incorrecto")
        return false
    } else if (usuario === user && contraseña != password) {
        alert("Contraseña incorrecta")
        return false
    } else {
        alert("Usuario y contraseña incorrectas")
        return false
    }
}

// CARRITO
function iniciarCarrito(){

    let lista = ""
    let compraFinalizada = false

    alert("Nuestra selección de productos: " + "\n" + "1- " + "Coca-Cola" + "\n" + "2- " + "Sprite" + "\n" + "3- " + "Fanta" + "\n" + "4- " + "Pepsi")

    while (!compraFinalizada){

        let codigo = prompt("Ingresá el n° de código del artículo que querés comprar")
        let item = codigoProducto(codigo)

        if (item){
            alert(item + " agregada.")
            lista += "\n" + item


        }else{
            
            if(codigo === null){
                compraFinalizada = true
            }else {
                alert("Ingresá un código válido")
            }
        }

    }

    if (lista != ""){
        let terminarCompra = confirm("¿Terminaste de comprar?")
        if(terminarCompra){
            alert("Compraste: " + lista)
        }else{
            iniciarCarrito()
        }
    }
    
}

// TRADUCCIÓN DE PRODUCTO

function codigoProducto (codigo){
    
    let item 
    switch(codigo){
        case "1":
            item = "Coca-Cola"
            break;

        case "2":
            item = "Sprite"
            break;

        case "3":
            item = "Fanta"
            break;

        case "4":
            item = "Pepsi"
            break;
        
        default :
            item = false
    }
    
    return item
}

// EJECUCIÓN
login()