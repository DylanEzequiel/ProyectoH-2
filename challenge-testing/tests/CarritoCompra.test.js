let CarritoCompra = require("./index")


describe ("Test de agregarProducto",()=>{
    let instancia=new CarritoCompra()
    
    
    it("debe devolver un array",()=>{
        expect(instancia.carrito).toEqual([])
    });

    
    it("debe incluir al objeto cuando se agrega",()=>{
        instancia.agregarProducto({name:"coca",price:20})
        expect(instancia.carrito).toContainEqual({name:"coca",price:20})
    });

    it("debe calcular el total con 1 producto",()=>{
        expect(instancia.calcularTotal()).toBe(20)
    });

    it("debe devolver el precio con un descuento",()=>{
        expect(instancia.aplicarDescuento(10)).toBe(18)
    })
    
    
    it("debe incluir a los objetos cuando se agregan",()=>{
        instancia.agregarProducto({name:"harina", price:40});
        expect(instancia.carrito).toContainEqual({name:"coca",price:20},{name:"harina", price:40})
        expect(instancia.carrito.length).toBe(2)
    });
   it("debe calcular el total con 2 productos",()=>{
        expect(instancia.calcularTotal()).toBe(60)
    })
    it("debe devolver el precio con un descuento con 2 productos",()=>{
        expect(instancia.aplicarDescuento(25)).toBe(45)
    })
})