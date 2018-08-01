import { ITest } from "./ITest";

export class Test implements ITest{
    constructor(){
        // 
    }
    public init():void{
        console.log('init');            
    }
    public appendText(text: string = 'Горячая перезагрузка во всей своей КУРСЕЕЕЕЕЕ!!!!!!!!') {
        const root = document.getElementById('root');
        const el = document.createElement('div');
        el.innerText = text;
        if (root) {
            root.appendChild(el);
        }
    }
}