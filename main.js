const MATERIALES =  [38, 14, 12, 29, 2, 11, 21]
const PDF =  [6,37,8,45,3,22,33,43,1,17]

const fabricacion =  [32, 4, 2, 18, 30, 43, 10, 13, 1, 27]
const materiales =  [11, 23, 41, 9, 15, 19, 22, 8, 16, 46, 7, 39]

let solution = {}


function camara(){
	solution = {};
	solution[32]={11: [22, "Carcasa"]};
	solution[4]= {19: [47, "Trípode"]};
	solution[2]={41:[39, "Placa base"]};
	solution[18]={23:[16, "Lentes"]};
	solution[30]={22: [8, "Carcasa con ranura"]};
	solution[43]={46: [36, "Circuitería interna"] };// 46 = 7 + 39 (cables + placa base)
	solution[10,15, 18, "Chasis"]
	solution[13]={16:[6, "Lentes pulidas"]};
	solution[1]={9: [20, "Objetivo"]};
	solution[27]={ 8: [29, "Carcasa terminada"]};
}

function coche(){
	solution = {};
	solution[33]={10:[26,"Carcasa"]};
	solution[25]={1:[10, "Base decorativa"]};
	solution[5]={32:[24, "Motor"]};
	solution[6]={41:[38, "Llantas"]};
	solution[15]={26:[37, "Carcasa terminada"]};
	solution[22]={9:[23, "Chasis montado"]}; 
	solution[28]={3:[20, "Chasis"]};
	solution[21]={2:[13, "Chasis ajustado"]};
	solution[34]={1:[18, "Ejes de las ruedas"]};
	solution[4]={1:[16, "Ejes terminados"]};
}

function tutorial() {
}
function func(a, b){
	if (a in solution){
		if (b in solution[a])
		{
			console.log(solution[a][b]);
			document.querySelector("#result").innerHTML=`Has construido: ${solution[a][b][1]} <br>Coge la carta con ID: ${solution[a][b][0]}`;
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