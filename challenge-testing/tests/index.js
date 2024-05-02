class CarritoCompra{
    constructor()
        { this.carrito=[]}
    agregarProducto(producto){
        this.carrito.push(producto)
    }
    calcularTotal(){
        let total=0
        this.carrito.forEach(el=> total += el.price)
        return total
    }
    aplicarDescuento(porcentaje){
        let total= this.calcularTotal()
        let desc= total * (porcentaje/100 )
        return total - desc
    }

}    

module.exports=CarritoCompra