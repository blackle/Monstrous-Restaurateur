/// <reference path="../scenes/Erina.ts" />

document.addEventListener("DOMContentLoaded", function() {
	const canvas = document.getElementById("canvas") as HTMLCanvasElement;
	const ctx = canvas.getContext('2d')!;

	let erina = new Erina();
	console.log(erina.namespace());
	erina.draw(ctx);
});
