const MATERIALES =  [38, 14, 12, 29, 2, 11, 21]
const PDF =  [6,37,8,45,3,22,33,43,1,17]

const fabricacion =  [32, 4, 2, 18, 30, 43, 10, 13, 1, 27]
const materiales =  [11, 23, 41, 9, 15, 19, 22, 8, 16, 46, 7, 39]

let solution = {}
let starters = []


function camara(){
	solution = {};
	starters = [1, 2, 4, 7, 9, 10, 11, 13, 15, 18, 19, 23, 27, 30, 32, 41, 43, 50];
	solution[32]={11: [22, "Carcasa"]};
	solution[4]= {19: [47, "Trípode"]};
	solution[2]={41:[39, "Placa base"]};
	solution[18]={23:[16, "Lentes"]};
	solution[30]={22: [8, "Carcasa con ranura"]};
	solution[43]={46: [36, "Circuitería interna"] };// 46 = 7 + 39 (cables + placa base)
	solution[10]={15: [18, "Chasis"]};
	solution[13]={16:[6, "Lentes pulidas"]};
	solution[1]={9: [20, "Objetivo"]};
	solution[27]={ 8: [29, "Carcasa terminada"]};
	solution[50]={ 156: [3, "Camara terminada"]};
	
	loadPopup();
}

function coche(){
	solution = {};
	starters = [1, 3, 4, 5, 6, 10, 12, 15, 21, 22, 25, 28, 31, 32, 33, 34, 41]; 
	solution[33]={10:[26,"Carcasa"], 31:[27, ""]};
	solution[25]={1:[19, "Base decorativa"]};
	solution[5]={32:[24, "Motor"]};
	solution[6]={41:[38, "Llantas"]};
	solution[15]={26:[37, "Carcasa terminada"]};
	solution[22]={29:[23, "Chasis montado"]}; 
	solution[28]={3:[20, "Chasis"]};
	solution[21]={20:[13, "Chasis ajustado"]};
	solution[34]={12:[18, "Ejes de las ruedas"]};
	solution[4]={18:[16, "Ejes terminados"]};
	solution[50]={ 168: [3, "Coche terminado"]};
	
	loadPopup();
}

function tutorial() {
	solution = {};
	starters = [1,2,4,6,7];
	solution[1]={2:[3, ""]};
	solution[4]={3:[5, ""]};
	solution[7]={11:[8, ""]};
	
	loadPopup();
}

function loadPopup(){
	document.getElementById('text').innerText = `Coge las cartas: \n ${starters.join(', ')}`;
    document.getElementById('wrapper').classList.add('hidden');
    document.getElementById('botonfabrika').classList.add('hidden');
}

function func(a, b){
	if (a in solution){
		if (b in solution[a])
		{
			console.log(solution[a][b]);
			document.querySelector("#result").innerHTML=`Coge la carta: ${solution[a][b][0]}`;
			document.querySelector("#iA").value ="";
			document.querySelector("#iB").value ="";
		}
		else{
			console.log("Cerca:");
			console.log(solution[a]);
			document.querySelector("#result").innerHTML=`Esa combinación no es correcta.`;
		}
	}
	else{
		console.log(solution);
		document.querySelector("#result").innerHTML=`Esa carta no existe.`;
	}
};


function closePopup(){
    document.getElementById('popup').classList.add('hidden');
    document.getElementById('wrapper').classList.remove('hidden');
    document.getElementById('botonfabrika').classList.remove('hidden');
}

function showResult() {
    // Ocultar inputs y botón inicial
    document.getElementById('wrapper').classList.add('hidden');
    document.getElementById('botonfabrika').classList.add('hidden');

    // Mostrar texto y botón de retorno
    document.getElementById('return').classList.remove('hidden');
}

function resetForm() {
    // Mostrar inputs y botón inicial
    document.getElementById('wrapper').classList.remove('hidden');
    document.getElementById('botonfabrika').classList.remove('hidden');

    // Ocultar texto y botón de retorno
    document.getElementById('return').classList.add('hidden');
}

function button_callback(e){
	const iA = document.querySelector("#iA");
	const iB = document.querySelector("#iB");
	func(parseInt(iA.value),parseInt(iB.value));
	showResult();
}