import { Scene } from "model/Scene";

export class Erina extends Scene {
	bg: HTMLImageElement;
	erina_one: HTMLImageElement;
	public constructor() {
		super();
		this.bg = new Image();
		this.bg.src = "./img/erina/background.png";
		this.erina_one = new Image();
		this.erina_one.src = "./img/erina/erina_one.png";
	}
	public namespace() : string {
		return "erina";
	}
	public draw(ctx : CanvasRenderingContext2D) : void {
		this.qp.push(this.bg);
		this.qp.push(this.erina_one);
		this.qp.paint(ctx);
	}
}
