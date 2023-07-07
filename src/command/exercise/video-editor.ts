
export class VideoEditor {
    private contrast: number = 0.5;
    private _text: string = "";

    public set text(theText: string) {
        this._text = theText;
    }
    public get text(): string {
        return this._text;
    }

    public removeText(): void {
        this.text = "";
    }

    public getContrast(): number {
        return this.contrast;
    }

    public setContrast(contrast: number): void {
        this.contrast = contrast;
    }

    public toString(): string {
        return "VideoEditor{" +
                "contrast=" + this.contrast +
                ", text='" + this.text + '\'' +
                '}';
    }
}
