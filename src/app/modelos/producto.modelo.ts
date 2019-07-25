export class Producto {
    public id: number;
    public tipoProducto: String;
    public marca: String;
    public modelo: String;
    public precio: number;
    public detalle: String;


    constructor(id: number, tipoProducto: String, marca: String, precio: number, detalle: String, modelo: String) {
        this.id = id;
        this.tipoProducto = tipoProducto;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.detalle = detalle;
    }
}