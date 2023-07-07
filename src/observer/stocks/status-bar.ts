import { Observer } from "./observer";
import { Stock } from "./stock";

export class StatusBar implements Observer {
    private stocks: Array<Stock> = new Array<Stock>();

    public addStock(stock: Stock){
        this.stocks.push(stock);
        stock.addObserver(this);
    }
    private show(): void {
        console.log("Status Bar");
        //loop over stocks and print
        for(var stock in this.stocks){ 
            console.log(stock); 
        }
    }
    

    update(): void {
        console.log("Price Changed - Refreshing StatusBar");
        this.show();
    }
    
}