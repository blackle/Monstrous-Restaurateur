imgDB = {
	"restrauntBG": "./img/background.png",
	"counter": "./img/counter.png",
	"mollyNeutral": "./img/sloppy_molly_neutral.png",
	"mollyWTF": "./img/sloppy_molly_wtf.png",
	"mollyBehind": "./img/sloppy_molly_behind.png",
	"mollyHoldingTail": "./img/sloppy_molly_holdingtail.png",
	"mollyFood": "./img/sloppy_molly_food.png",
	"mollyChagrin": "./img/sloppy_molly_chagrin.png",
	"mollyAnyway": "./img/sloppy_molly_anyway.png",
	"seatedBG": "./img/seated_background.png",
	"table": "./img/table.png",
	"tableBroken": "./img/table_broken.png",
	"burger": "./img/burger.png",
	"burgerOpened": "./img/burger_opened.png",
};

sceneDB = {
"sloppy_molly_1": {
	"layer1": "restrauntBG",
	"layer2": "mollyNeutral",
	"layer3": "counter",
	"text": "\"yo welcome to sloppy molly's I'm the eponymous sloppy molly what the fuck do you want to eat today?\"",
	"opt1": {
		"text": "m-milk....",
		"func": "sloppy_molly_milk"
	},
	"opt2": {
		"text": "a cheese burgese if you please~",
		"func": "sloppy_molly_burger"
	},
	"opt3": {
		"text": "Hello, you might've heard of me, I'm the head restaurant reviewer for the Dragonland Gazette and...",
		"func": "sloppy_molly_reviewer"
	}
},
"sloppy_molly_awk": {
	"layer1": "restrauntBG",
	"layer2": "mollyWTF",
	"layer3": "counter",
	"text": "\"...\"",
	"opt1": {
		"text": "...",
		"func": "sloppy_molly_1"
	}
},
"sloppy_molly_milk": {
	"layer1": "restrauntBG",
	"layer2": "mollyWTF",
	"layer3": "counter",
	"text": "\"the only drinks we have are in the fuckin' uhhhhh coke freestyle machine, you want a cup? what cup size do you want asshole?\"",
	"opt1": {
		"text": "something small if you have it",
		"func": "sloppy_molly_milk_2"
	},
	"opt2": {
		"text": "a large!!! the bigger the better!!!",
		"func": "sloppy_molly_milk_2"
	},
	"opt3": {
		"text": "d... cup...",
		"func": "sloppy_molly_awk"
	}
},
"sloppy_molly_milk_2": {
	"layer1": "restrauntBG",
	"layer2": "mollyWTF",
	"layer3": "counter",
	"text": "\"ok here u go bud, the freestyle machine is over there\"<br/><br/><b>you have obtained: drink cup</b>",
	"opt1": {
		"text": "-->",
		"func": "freestyle_1"
	},
},
"sloppy_molly_burger": {
	"layer1": "restrauntBG",
	"layer2": "mollyBehind",
	"layer3": "counter",
	"text": "\"yo raymond!! put on a cheese deluxe for this asshole!\"",
	"opt1": {
		"text": "...",
		"func": "sloppy_molly_burger2"
	}
},
"sloppy_molly_burger2": {
	"layer1": "restrauntBG",
	"layer2": "mollyWTF",
	"layer3": "counter",
	"text": "\"you want fries with that too, asshole?\"",
	"opt1": {
		"text": "hhhhhhh",
		"func": "seated_1"
	},
	"opt2": {
		"text": "im gonna go sit down",
		"func": "seated_1"
	}
},
"sloppy_molly_reviewer": {
	"layer1": "restrauntBG",
	"layer2": "mollyWTF",
	"layer3": "counter",
	"text": "\"wait, so you're the asshole who rated us one out of five stars last year for abrasiveness?\"",
	"opt1": {
		"text": "uhhh",
		"func": "sloppy_molly_reviewer2"
	}
},
"sloppy_molly_reviewer2": {
	"layer1": "restrauntBG",
	"layer2": "mollyHoldingTail",
	"layer3": "counter",
	"text": "\"well, I took your criticism to heart, and I'm trying to be both a better host and a better snake. for example, I didn't even call you asshole yet!\"",
	"opt1": {
		"text": "you just called me asshole one scene ago",
		"func": "sloppy_molly_reviewer2.1"
	},
	"opt2": {
		"text": "good for you!",
		"func": "sloppy_molly_reviewer2.2"
	}
},
"sloppy_molly_reviewer2.1": {
	"layer1": "restrauntBG",
	"layer2": "mollyWTF",
	"layer3": "counter",
	"text": "\"don't push it\"",
	"opt1": {
		"text": "uhhhhhhhhhhh",
		"func": "sloppy_molly_reviewer2.2"
	}
},
"sloppy_molly_reviewer2.2": {
	"layer1": "restrauntBG",
	"layer2": "mollyNeutral",
	"layer3": "counter",
	"text": "\"so what do you want, reviewer person?\"",
	"opt1": {
		"text": "burger!!! a plump juicy cheezy burg!",
		"func": "sloppy_molly_burger"
	},
	"opt2": {
		"text": "m-milk...?",
		"func": "sloppy_molly_milk"
	}
},

///SEATED

"seated_1": {
	"layer1": "seatedBG",
	"layer3": "table",
	"text": "<i>you take a seat at one of the many tables at this fine establishment, unfortunately the one you chose has one leg shorter than the rest</i>",
	"opt1": {
		"text": "rotate the table until it doesn't wiggle anymore",
		"func": "seated_broken_table"
	},
	"opt2": {
		"text": "put a folded up piece of notebook paper underneath a leg",
		"func": "seated_food_arriving"
	},
	"opt3": {
		"text": "accept the wiggliness of the table",
		"func": "seated_food_arriving"
	}
},
"seated_broken_table": {
	"layer1": "seatedBG",
	"layer3": "tableBroken",
	"text": "<i>the table falls to pieces</i>",
	"opt1": {
		"text": "uhhh...!!!!! undo! undo!!",
		"func": "seated_1"
	},
	"opt2": {
		"text": "I'm sure it'll be fine...",
		"func": "seated_broken_table2"
	}
},
"seated_broken_table2": {
	"layer1": "seatedBG",
	"layer3": "tableBroken",
	"layer4": "mollyFood",
	"text": "\"Here's your burger, pal, I hope you enjoy this sloppy molly--\"",
	"opt1": {
		"text": "...",
		"func": "seated_broken_table3"
	}
},
"seated_broken_table3": {
	"layer1": "seatedBG",
	"layer3": "tableBroken",
	"layer4": "mollyChagrin",
	"text": "\"...\"",
	"opt1": {
		"text": "...",
		"func": "seated_broken_table4"
	}
},
"seated_broken_table4": {
	"layer1": "seatedBG",
	"layer3": "tableBroken",
	"layer4": "mollyChagrin",
	"text": "\"............\"",
	"opt1": {
		"text": "............",
		"func": "sloppy_molly_1"
	}
},

///food arriving

"seated_food_arriving": {
	"layer1": "seatedBG",
	"layer3": "table",
	"text": "<i>perfect! the problem is solved and the food is just about to arrive!</i>",
	"opt1": {
		"text": "BURGER!! BURGER!! BURGER!!",
		"func": "seated_food_arrived"
	}
},
"seated_food_arrived": {
	"layer1": "seatedBG",
	"layer2": "mollyFood",
	"layer3": "table",
	"text": "\"Here's your burger, pal, I hope you enjoy this sloppy molly delicacy by me, sloppy molly.\"",
	"opt1": {
		"text": "BURGER!! BURGER!! BURGER!!",
		"func": "burger_gotted"
	},
	"opt2": {
		"text": "I thought I heard you calling to a person named raymond to make the cheeze deluxe? right before you called me an asshole to my face?",
		"func": "seated_food_molly_heartfelt1"
	}
},

///heartfelt?

"seated_food_molly_heartfelt1": {
	"layer1": "seatedBG",
	"layer2": "mollyChagrin",
	"layer3": "table",
	"text": "\"Uh, well, there is no raymond, I got nervous and started acting strange. Sorry for calling you an asshole by the way...\"",
	"opt1": {
		"text": "BURGER!! BURGER!! BURGER!!",
		"func": "burger_gotted"
	},
	"opt2": {
		"text": "nervous? do you get nervous often?",
		"func": "seated_food_molly_heartfelt2"
	}
},
"seated_food_molly_heartfelt2": {
	"layer1": "seatedBG",
	"layer2": "mollyChagrin",
	"layer3": "table",
	"text": "\"Well, I mostly only ever get regulars, not a lot of people come in when they see me working the counter, they assume I'm a succubus or something...\"",
	"opt1": {
		"text": "What, you're not a succubus???",
		"func": "seated_food_molly_heartfelt2.1"
	},
	"opt2": {
		"text": "why would people avoid you if you even were a succubus?",
		"func": "seated_food_molly_heartfelt2.2"
	},
	"opt3": {
		"text": "I'm a succubus!!! and I want my burger!!!",
		"func": "burger_gotted"
	}
},
"seated_food_molly_heartfelt2.1": {
	"layer1": "seatedBG",
	"layer2": "mollyFood",
	"layer3": "table",
	"text": "\"Yeah, I'm not a succubus. I'm a vorabus\"",
	"opt1": {
		"text": "why would people avoid you if you even were a succubus?",
		"func": "seated_food_molly_heartfelt2.2"
	},
	"opt2": {
		"text": "what's a vorabus?",
		"func": "seated_food_molly_vorabus_explained"
	},
	"opt3": {
		"text": "I'm a vorabus!!! and I'm gonna vore that burger!!!",
		"func": "burger_gotted"
	}
},
"seated_food_molly_heartfelt2.2": {
	"layer1": "seatedBG",
	"layer2": "mollyChagrin",
	"layer3": "table",
	"text": "\"They uh... assume I don't use... 'kosher ingredients'\"",
	"opt1": {
		"text": "oh... ew",
		"func": "seated_food_molly_heartfelt2.2.1"
	}
},
"seated_food_molly_heartfelt2.2.1": {
	"layer1": "seatedBG",
	"layer2": "mollyChagrin",
	"layer3": "table",
	"text": "\"And given my nickname, this sounds even more... unpleasant\"",
	"opt1": {
		"text": "ew ew ew ew ew",
		"func": "seated_food_molly_heartfelt2.2.2"
	}
},
"seated_food_molly_heartfelt2.2.2": {
	"layer1": "seatedBG",
	"layer2": "mollyFood",
	"layer3": "table",
	"text": "\"But, I'm not a succubus, and even if I was, I would only use pure, locally sourced ingredients in my products\"",
	"opt1": {
		"text": "that still sounds super lewd",
		"func": "burger_gotted"
	},
	"opt2": {
		"text": "if you're not a succubus, what are you?",
		"func": "seated_food_molly_heartfelt2.2.3"
	}
},
"seated_food_molly_heartfelt2.2.3": {
	"layer1": "seatedBG",
	"layer2": "mollyFood",
	"layer3": "table",
	"text": "\"I'm a vorabus.\"",
	"opt1": {
		"text": "what's a vorabus?",
		"func": "seated_food_molly_vorabus_explained"
	}
},
"seated_food_molly_vorabus_explained": {
	"layer1": "seatedBG",
	"layer2": "mollyFood",
	"layer3": "table",
	"text": "\"A vorabus is a demon who derives energy from creating food for others' consumption.\"",
	"opt1": {
		"text": "from the sound of it I assumed it meant you get energy from #voreing people",
		"func": "seated_food_molly_vorabus_explained2"
	},
	"opt2": {
		"text": "ah! so it makes a lot of sense that you run a restaurant!",
		"func": "burger_gotted"
	}
},
"seated_food_molly_vorabus_explained2": {
	"layer1": "seatedBG",
	"layer2": "mollyChagrin",
	"layer3": "table",
	"text": "\"Uhhhhhh that's part of it, but not something I've done since college...\"",
	"opt1": {
		"text": "...",
		"func": "burger_gotted"
	}
},

///burger gotted!!!

"burger_gotted": {
	"layer1": "seatedBG",
	"layer2": "mollyAnyway",
	"layer3": "table",
	"layer4": "burger",
	"text": "\"Anyway! I hope you enjoy your burger!\"",
	"opt1": {
		"text": "thank you molly!!! I love you!!!",
		"func": "burger_gotted_opened"
	},
	"opt2": {
		"text": "thank you molly!!! I appreciate you as a culinary professional!!!",
		"func": "burger_gotted_opened"
	},
	"opt3": {
		"text": "thank you molly!!! I'm gonna vore the fuck out of this burger!!!",
		"func": "burger_gotted_opened"
	}
},
"burger_gotted_opened": {
	"layer1": "seatedBG",
	"layer3": "table",
	"layer4": "burgerOpened",
	"text": "<i>Perfect! you made it this far and got your (strangely photorealistic) burger! time to complete the burger eating minigame!</i>",
	"opt1": {
		"text": "-->",
		"func": "burger_gotted_opened"
	}
}
};


function url_for_img(imgname) {
	return "url('"+imgDB[imgname]+"')";
}

function loadScene(sceneName) {
	console.log(sceneName);
	sceneDesc = sceneDB[sceneName];

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
	for (prop in imgDB) {
		imagesPreload[prop] = new Image()
		imagesPreload[prop].src = imgDB[prop];
	}

	console.log(window.location.hash);
	if (window.location.hash.charAt(1) === '!') {
		loadScene(window.location.hash.slice(2));
	} else {
		window.location.hash = "!"+"sloppy_molly_1";
	}
}