import { ITool } from "./tool";

export class BrushTool implements ITool{
    mouseUp(): void {
        console.log("Brush icon");
    }
    mousDown(): void {
        console.log("Draw a line");
    }
}