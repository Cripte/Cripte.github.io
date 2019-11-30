// js.Frim(Записывать первым): <script type="text/javascript" src="https://Cripte.github.io/MyFrim/JsFrim.js"></script>
// css.Frim: <link rel="stylesheet" type="text/css" href="https://Cripte.github.io/MyFrim/styleFrim.css">


// fontawesome: <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
// AdapMeta: <meta name="viewport" content="width=device-width, initial-scale=1.0">
function print(Text) {
	console.log(Text);
};
function ConnectId(elem){
	return document.getElementById(elem);   
}
function padding(elem,pos,vaule) {
	var posL,
		posT,
		posR,
		posB;
	if (pos == 'left') {
		posL = elem.style.paddingLeft = vaule;
	}else if (pos == 'bottom') {
		posB = elem.style.paddingBottom = vaule;
	}else if (pos == 'top') {
		posT = elem.style.paddingTop = vaule;
	}else if (pos == 'right') {
		posR = elem.style.paddingRight = vaule;
	}else if (pos == 0) {
		posL = elem.style.padding = vaule;
	};
};
function margin(elem,pos,vaule) {
	var posL,
		posT,
		posR,
		posB;
	if (pos == 'left') {
		posL = elem.style.marginLeft = vaule;
	}else if (pos == 'bottom') {
		posB = elem.style.marginBottom = vaule;
	}else if (pos == 'top') {
		posT = elem.style.marginTop = vaule;
	}else if (pos == 'right') {
		posR = elem.style.marginRight = vaule;
	}else if (pos == 0) {
		posL = elem.style.margin = vaule;
	};
};
function pos(elem,pos,vaule) {
	var posL,
		posT,
		posR,
		posB;
	if (pos == 'left') {
		posL = elem.style.left = vaule;
	}else if (pos == 'bottom') {
		posB = elem.style.bottom = vaule;
	}else if (pos == 'top') {
		posT = elem.style.top = vaule;
	}else if (pos == 'right') {
		posR = elem.style.right = vaule;
	};
};
//Anim(elem,'left',Скорость,Докуда,Идиница Измерения('px','em','hv','%'...))
function Anim(elem,pos,i,posx,unit) {
	if (pos == 'left') {
		var checkleft;
		var check;
		var Anif = setInterval(function () {
			checkleft = elem.getBoundingClientRect();
			check = checkleft.left;
			check += i;
			elem.style.left = check + unit;
			if (posx <= check ) {
				clearInterval(Anif);
			};
		}, 1000/60);
	}else if (pos == 'top') {
		var checktop;
		var check;
		var Anif = setInterval(function () {
			checkleft = elem.getBoundingClientRect();
			check = checktop.top;
			check += i;
			elem.style.top = check + unit;
			if (posx <= check ) {
				clearInterval(Anif);
			};
		}, 1000/60);
	}else if (pos == 'bottom') {
		var checbottom;
		var check;
		var Anif = setInterval(function () {
			checkbottom = elem.getBoundingClientRect();
			check = checkbottom.bottom;
			check += i;
			elem.style.bottom = check + unit;
			if (posx <= check) {
				clearInterval(Anif);
			};
		}, 1000/60);
	}else if (pos == 'right') {
		var checkright;
		var check;
		var Anif = setInterval(function () {
			checkleft = elem.getBoundingClientRect();
			check = checkright.right;
			check += i;
			elem.style.right = check + unit;
			if (posx <= check ) {
				clearInterval(Anif);
			};
		}, 1000/60);
	};
};
//Функцыя которая уберает елемент.Пример: display_none(elem); 
function display_none(elem) {
	if (elem.classList.contains("display") == true ) {
		elem.classList.remove("display");
	};
	elem.classList.add("display_none");		
};
//Функцыя которая делает елемент существующим.Пример: display_none(elem); 
function display(elem) {
	if (elem.classList.contains("display_none") == true ) {
		elem.classList.remove("display_none");
	};
	elem.classList.add("display");
};
function addClass(elem,classAdd){
	if (elem.classList.contains(classAdd) == true) {
		delClass(elem,classAdd);
	}
	elem.classList.add(classAdd);
}
function delClass(elem,classlist){
	elem.classList.remove(classlist);
}
//Функцыя которая делает елемент цветным.Пример: bg_color(elem,'bg_red' или HEX("#000000","#ffffff"),rgb(0,0,0),rgba(0,0,0,от 0 до 1); 
function bg_color(elem,color){
	let checkCosnt;
	let i;
	checkCosnt = elem.classList;
	if (color[0] == "b") {
		for (i = 0; i < checkCosnt.length; i++) {
			if (checkCosnt[i] == "bg_black"){
				elem.classList.remove("bg_black");
			}else if (checkCosnt[i] == "bg_gray"){
				elem.classList.remove("bg_gray");
			}else if (checkCosnt[i] == "bg_red"){
				elem.classList.remove("bg_red");
			}else if (checkCosnt[i] == "bg_green"){
				elem.classList.remove("bg_green");
			}else if (checkCosnt[i] == "bg_white"){
				elem.classList.remove("bg_white");
			}else if (checkCosnt[i] == "bg_blue"){
				elem.classList.remove("bg_blue");
			}else if (checkCosnt[i] == "bg_yellow"){
				elem.classList.remove("bg_yellow");
			}else if (checkCosnt[i] == "bg_f23030"){
				elem.classList.remove("bg_f23030");
			};
		};
		elem.classList.add(color);
	}else if (color[0] == "r" && color[1] == "g") {
		elem.style.backgroundColor = color;
	}else if (color[0] == "#") {
		elem.style.backgroundColor = color;
	}else if (color == "remove") {
		for (i = 0; i < checkCosnt.length; i++) {
			if (checkCosnt[i] == "bg_black"){
				elem.classList.remove("bg_black");
			}else if (checkCosnt[i] == "bg_gray"){
				elem.classList.remove("bg_gray");
			}else if (checkCosnt[i] == "bg_red"){
				elem.classList.remove("bg_red");
			}else if (checkCosnt[i] == "bg_green"){
				elem.classList.remove("bg_green");
			}else if (checkCosnt[i] == "bg_white"){
				elem.classList.remove("bg_white");
			}else if (checkCosnt[i] == "bg_blue"){
				elem.classList.remove("bg_blue");
			}else if (checkCosnt[i] == "bg_yellow"){
				elem.classList.remove("bg_yellow");
			}else if (checkCosnt[i] == "bg_f23030"){
				elem.classList.remove("bg_f23030");
			};
		};
	};
};
let CheckOpenOrClose = "Open";
function dropMenu(elem){
	if (CheckOpenOrClose == "Open") {
		display(elem);
		CheckOpenOrClose = "Close";
	}else if (CheckOpenOrClose == "Close") {
		display_none(elem);
		CheckOpenOrClose = "Open";
	};
};

