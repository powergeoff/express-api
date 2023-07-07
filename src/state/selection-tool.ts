import { ITool } from "./tool";

export class SelectionTool implements ITool{
    mouseUp(): void {
        console.log("Selection icon");
    }
    mousDown(): void {
        console.log("Draw dashes");
    }
}