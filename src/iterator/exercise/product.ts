export class Product {
    private _id: number;
    private _name: string;

    constructor(id: number, name: string){
        this._id = id;
        this._name = name;
    }

    public toString = () => {
        return "Product{" +
        "id=" + this._id +
        ", name='" + this._name + '\'' +
        '}';
    }
}