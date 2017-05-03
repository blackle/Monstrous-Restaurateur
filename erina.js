window.imgDB = {
	"restrauntBG": "./img/erina/background.png",
	"counter": "./img/erina/counter.png",
	"erinaHello": "./img/erina/erina_hello.png",
	"erinaChagrin": "./img/erina/erina_chagrin.png",
	"erinaSmile": "./img/erina/erina_smile.png",
	"erinaSmileForward": "./img/erina/erina_smile_forward.png",
	"erinaOne": "./img/erina/erina_one.png",
};

window.startScene = "erina_counter_1";

window.sceneDB = {
"erina_counter_1": {
	"layer1": "restrauntBG",
	"layer2": "erinaHello",
	"layer3": "counter",
	"text": "\"Bonjour! Welcome to Fish Fuck Fjord, where all we serve is fish! What fish do you want to vore today?\"",
	"opt1": {
		"text": "salmon!",
		"func": "erina_counter_salmon"
	},
	"opt2": {
		"text": "tuna!",
		"func": "erina_counter_tuna"
	},
	"opt3": {
		"text": "v-vore me....!!!",
		"func": "erina_counter_vore"
	}
},
"erina_counter_salmon": {
	"layer1": "restrauntBG",
	"layer2": "erinaHello",
	"layer3": "counter",
	"text": "\"We have lots of salmon! What kind of salmon do you want?\"",
	"opt1": {
		"text": "atlantic!",
		"func": "sloppy_molly_milk"
	},
	"opt2": {
		"text": "pacific!",
		"func": "sloppy_molly_burger"
	},
	"opt3": {
		"text": "there are more than one kind?",
		"func": "erina_counter_salmon_explain"
	}
},
"erina_counter_salmon_explain": {
	"layer1": "restrauntBG",
	"layer2": "erinaSmile",
	"layer3": "counter",
	"text": "\"Yes! Salmon comes in all varieties. Would you like me to tell you all the kinds we have?\"",
	"opt1": {
		"text": "absolutely!",
		"func": "sloppy_molly_milk"
	},
	"opt2": {
		"text": "I appreciate your enthusiasm about fish but I'm quite hungry, how about you surprise me?",
		"func": "sloppy_molly_burger"
	},
	"opt3": {
		"text": "on second thought I'll take tuna",
		"func": "erina_counter_tuna"
	}
},

"erina_counter_tuna": {
	"layer1": "restrauntBG",
	"layer2": "erinaOne",
	"layer3": "counter",
	"text": "\"We have exactly one tuna.\"",
	"opt1": {
		"text": "what??? how???",
		"func": "erina_counter_tuna_explain"
	},
	"opt2": {
		"text": "this is understandable, tuna is in high demand and there is a supply problem due to overfishing on the western coast",
		"func": "erina_counter_tuna_prepare"
	}
},
"erina_counter_tuna_explain": {
	"layer1": "restrauntBG",
	"layer2": "erinaHello",
	"layer3": "counter",
	"text": "\"Tuna is in high demand and there is a supply problem due to overfishing on the western coast.\"",
	"opt1": {
		"text": "oh",
		"func": "erina_counter_tuna_prepare"
	}
},
"erina_counter_tuna_prepare": {
	"layer1": "restrauntBG",
	"layer2": "erinaSmile",
	"layer3": "counter",
	"text": "\"Indeed! So! How would you like your tuna prepared?\"",
	"opt1": {
		"text": "smoked!",
		"func": "sloppy_molly_burger"
	},
	"opt2": {
		"text": "barbequed!",
		"func": "sloppy_molly_burger"
	},
	"opt3": {
		"text": "how about salmon instead?",
		"func": "erina_counter_salmon"
	}
},


"erina_counter_vore": {
	"layer1": "restrauntBG",
	"layer2": "erinaHello",
	"layer3": "counter",
	"text": "\"Sorry mon amie! That's against company policy!!!\"",
	"opt1": {
		"text": "sorry I don't know what came over me...",
		"func": "erina_counter_1"
	},
	"opt2": {
		"text": "can I vore you then?",
		"func": "erina_counter_vore2"
	}
},
"erina_counter_vore2": {
	"layer1": "restrauntBG",
	"layer2": "erinaHello",
	"layer3": "counter",
	"text": "\"That's <i>also</i> against company policy!!!\"",
	"opt1": {
		"text": "I'll take the hint",
		"func": "erina_counter_1"
	},
	"opt2": {
		"text": "unrelatedly, why are you wearing a maid outfit? and why do you have boobs when you're a shark?",
		"func": "erina_counter_explainy"
	}
},
"erina_counter_explainy": {
	"layer1": "restrauntBG",
	"layer2": "erinaChagrin",
	"layer3": "counter",
	"text": "\"This maid outfit is the official uniform of Fish Fuck Fjord. Additionally: I have boobs because all sharks have boobs. That's just science.\"",
	"opt1": {
		"text": "it looks a bit tight on you",
		"func": "erina_counter_explainy2"
	}
},
"erina_counter_explainy2": {
	"layer1": "restrauntBG",
	"layer2": "erinaChagrin",
	"layer3": "counter",
	"text": "\"It is. I can't even look down. I feel cute as fuck though. That makes it all worth it.\"",
	"opt1": {
		"text": "I'm ready to uhhh order now...",
		"func": "erina_counter_1"
	}
},
};
