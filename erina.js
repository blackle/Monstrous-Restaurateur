window.imgDB = {
	"restrauntBG": "./img/erina/background.png",
	"counter": "./img/erina/counter.png",
	"erinaHello": "./img/erina/erina_hello.png",
	"erinaChagrin": "./img/erina/erina_chagrin.png",
};

window.startScene = "erina_counter_1";

window.sceneDB = {
"erina_counter_1": {
	"layer1": "restrauntBG",
	"layer2": "erinaHello",
	"layer3": "counter",
	"text": "\"Hello! Welcome to Fish Fuck Fjord, where all we serve is fish! What fish do you want to vore today?\"",
	"opt1": {
		"text": "salmon!",
		"func": "sloppy_molly_milk"
	},
	"opt2": {
		"text": "trout!",
		"func": "sloppy_molly_burger"
	},
	"opt3": {
		"text": "v-vore me....!!!",
		"func": "erina_counter_vore"
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
