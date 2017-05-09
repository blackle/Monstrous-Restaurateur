/*
 * this is a class that maintains a queue of images 
 * and paints them in order by making a chain of onloads
 */

class QueuedPainter {
	private queuedImages : Array<HTMLImageElement>;
	public constructor() {
		this.queuedImages = new Array<HTMLImageElement>();
	}

	// add image onto queue
	public push(img : HTMLImageElement) : void {
		this.queuedImages.push(img);
	}

	// paint images in queue
	public paint(ctx : CanvasRenderingContext2D) : void {
		this.pumpQueue(ctx, 0);
	}

	// paint a single image, or defer until onload
	private pumpQueue(ctx : CanvasRenderingContext2D, index : number) : void {
		if (this.queuedImages.length <= index){
			return;
		}

		let img = this.queuedImages[index];
		let drawFunc = function() {
			ctx.drawImage(img, 0, 0, 600, 600);
		};

		if (img.complete) {
			drawFunc();
			this.pumpQueue(ctx,index+1);
		} else {
			let that = this;
			img.onload = function() {
				drawFunc();
				that.pumpQueue(ctx,index+1);
			}
		}
	}

	// abort painting, should be called when scene is left
	public abort() {
		for (let img of this.queuedImages) {
			delete img.onload;
		}
		this.queuedImages.length = 0;
	}
}
