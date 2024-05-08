// js.Frim(Записывать первым): <script type="text/javascript" src="https://Cripte.github.io/MyFrim/JsFrim.js"></script>
// css.Frim: <link rel="stylesheet" type="text/css" href="https://Cripte.github.io/MyFrim/styleFrim.css">


// fontawesome: <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
// AdapMeta: <meta name="viewport" content="width=device-width, initial-scale=1.0">
function prin(Text) {
	console.log(Text);
};


function ConnectId(elem){
	return document.getElementById(elem);   
}

function Anim(objNEW) {

	let NowElem = objNEW['elem'];
	let NowTopElem = objNEW['elem'].offsetTop;
	let NowLeftElem = objNEW['elem'].offsetLeft;

	let ST = +objNEW['top'] - +NowTopElem;
	let SL = +objNEW['left'] - +NowLeftElem;

	let VT = +ST / +objNEW['time'];
	let VL = +SL / +objNEW['time'];

	let OnePositionT = +NowElem.offsetTop + +VT
	let OnePositionL = +NowElem.offsetLeft + +VL


	GlobalInterval = setInterval(function () {
		if (NowElem != '') {

			if (objNEW['left'] != '') {
				OnePositionL +=+VL
				NowElem.style.left = OnePositionL + 'px'
			}
			if (objNEW['top'] != '') {
				OnePositionT += +VT
				NowElem.style.top = OnePositionT + 'px'
			}			
			if (objNEW['left'] <= objNEW['elem'].offsetLeft || objNEW['top'] <= objNEW['elem'].offsetTop) {
				clearInterval(GlobalInterval);
			}
		}
		
	}, 1000/60)

}
	

//Функцыя которая уберает елемент. Пример: display_none(elem); 
function display_none(elem) {
	if (elem.classList.contains("display") == true ) {
		elem.classList.remove("display");
	};
	elem.classList.add("display_none");		
};
//Функцыя которая делает елемент существующим. Пример: display_none(elem); 
function display(elem) {
	if (elem.classList.contains("display_none") == true ) {
		elem.classList.remove("display_none");
	};
	elem.classList.add("display");
};
function aClass(elem,Class) {
	if (elem.classList.contains(Class) == true ) {
		elem.classList.remove(Class);
	};
	elem.classList.add(Class);
};
function rClass(elem,Class) {
	if (elem.classList.contains(Class) == false ) {
		prin('Класа не существует')
	}else{
		elem.classList.remove(Class);
	}
			
};


