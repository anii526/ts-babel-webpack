import { PixiHelper } from "./PixiHelper";

export class App {
    public pixi: PixiHelper | undefined;
    constructor() {
        // 
    }
    public init() {
        this.initPixi();
    }
    private initPixi() {
        //
        this.pixi = new PixiHelper();
        this.pixi.init();
    }
}