import { QueuedPainter } from "util/QueuedPainter";

export abstract class SceneBase {
	protected qp : QueuedPainter;
	public constructor() {
		this.qp = new QueuedPainter();
	}

	public abstract namespace() : string;
	public abstract draw(ctx : CanvasRenderingContext2D) : void;
}