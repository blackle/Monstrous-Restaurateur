function url_for_img(imgname) {
	return "url('"+window.imgDB[imgname]+"')";
}

function loadScene(sceneName) {
	console.log(sceneName);
	sceneDesc = window.sceneDB[sceneName];

	document.getElementById("layer1").style.backgroundImage = url_for_img(sceneDesc["layer1"]);
	document.getElementById("layer2").style.backgroundImage = url_for_img(sceneDesc["layer2"]);
	document.getElementById("layer3").style.backgroundImage = url_for_img(sceneDesc["layer3"]);
	document.getElementById("layer4").style.backgroundImage = url_for_img(sceneDesc["layer4"]);
	document.getElementById("topGameText").innerHTML = sceneDesc["text"];

	var gameText = document.getElementById("gameText")
	gameText.className = "";
	void gameText.offsetWidth;
	gameText.className = "fade";

	["opt1", "opt2", "opt3"].forEach( function(s) {
		var opt = sceneDesc[s];
		var optTag = document.getElementById(s);

		if (typeof opt !== "object") {
			optTag.parentElement.style.display = "none";
			return;
		} else {
			optTag.parentElement.style.display = null;
		}

		optTag.firstChild.textContent = opt["text"];
		var optFunc = opt["func"];
		if (typeof optFunc === "string") {
			var optFuncCopy = "" + opt["func"];
			optFunc = function() {
				window.location.hash = "!"+optFuncCopy;
			}
		}
		optTag.onclick = optFunc;
	});
};

function onHashChange() {
	console.log("onHashChange")
	loadScene(window.location.hash.slice(2));
}

window.addEventListener("hashchange", onHashChange, false);

var imagesPreload = {};
function onLoad() {
	for (prop in window.imgDB) {
		imagesPreload[prop] = new Image()
		imagesPreload[prop].src = window.imgDB[prop];
	}

	console.log(window.location.hash);
	if (window.location.hash.charAt(1) === '!') {
		loadScene(window.location.hash.slice(2));
	} else {
		window.location.hash = "!"+window.startScene;
	}
}