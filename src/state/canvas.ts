import { ITool } from "./tool";

export class Canvas{
    private _currentTool!: ITool; //definite assignment - hey compiler - shut up!

    public mouseDown() {
        this._currentTool.mousDown();
    }

    public mouseUp = () => {
        this._currentTool.mouseUp();
    }

    //just getters and setters
    public get currentTool(): ITool {
        return this._currentTool;
    }
    public set currentTool(theCurrentTool: ITool) {
        this._currentTool = theCurrentTool;
    }

}