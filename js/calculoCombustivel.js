let capacidadeTanqueG = 0;
let capacidadeTanqueE = 0;
let capacidadeTanqueGNV = 0;

let valorGasolinaBomba = 0;
let valorEtanolBomba = 0;
let valorGNVBomba = 0;

//Gasolina
let autonomiaGasolina = 0;
let consumoDeGasolina = 0;
let valorGastoGasolina = 0;
let encherTanqueG = 0;

//Etanol
let autonomiaEtanol = 0;
let consumoDeEtanol = 0;
let valorGastoEtanol = 0;
let encherTanqueE = 0;

//GNV
let autonomiaGNV = 0;
let consumoDeGNV = 0;
let valorGastoGNV = 0;
let encherTanqueGNV = 0;

function setarValoresPadroes() {
	capacidadeTanqueG = 57;
	capacidadeTanqueE = 57;
	capacidadeTanqueGNV = 16;

	valorGasolinaBomba = 5.29;
	valorEtanolBomba = 3.59;
	valorGNVBomba = 4.59;

	autonomiaGasolina = 520;
	autonomiaEtanol = 395;
	autonomiaGNV = 170;

	calcularConsumo();
	calcularCusto();
}

function calcularConsumo() {
	consumoDeGasolina = autonomiaGasolina / capacidadeTanqueG;
	consumoDeEtanol = autonomiaEtanol / capacidadeTanqueE;
	consumoDeGNV = autonomiaGNV / capacidadeTanqueGNV;
}

function calcularCusto() {
	valorGastoGasolina = valorGasolinaBomba / consumoDeGasolina;
	encherTanqueG = valorGasolinaBomba * capacidadeTanqueG;

	valorGastoEtanol = valorEtanolBomba / consumoDeEtanol;
	encherTanqueE = valorEtanolBomba * capacidadeTanqueE;

	valorGastoGNV = valorGNVBomba / consumoDeGNV;
	encherTanqueGNV = valorGNVBomba * capacidadeTanqueGNV;
}

function clickAquiButtonClick() {
	let modalAbre = document.getElementById('botaoCalcular');
	modalAbre.style.display = 'none';
	let modal = document.getElementById("calcularModal");
	modal.style.display = "block";
	document.getElementById('botaoCalcular').addEventListener('click', function() {
		clickAquiButtonClick();
	});
}



function enviarFormulario() {
	coletarDadosTela();
	calcularConsumo();
	calcularCusto();
	atualizarTela();
	calcularModalFechar();
}

function limparFormulario(){
	const campoGasolina = document.getElementById('capacidadeTanqueG');
	const campoAutGasolina = document.getElementById('autonomiaGasolina');
	const campoValorGasolina = document.getElementById('valorGasolinaBomba');
    const campoEtanol = document.getElementById('capacidadeTanqueE');
	const campoAutEtanol = document.getElementById('autonomiaEtanol');
	const campoValorEtanol = document.getElementById('valorEtanolBomba');
    const campoGNV = document.getElementById('capacidadeTanqueGNV');
	const campoAutGNV = document.getElementById('autonomiaGNV');
	const campoValorGNV = document.getElementById('valorGNVBomba');

	campoGasolina.value = '';
	campoAutGasolina.value = '';
	campoValorGasolina.value = '';
    campoEtanol.value = '';
	campoAutEtanol.value = '';
	campoValorEtanol.value = '';
    campoGNV.value = '';
	campoAutGNV.value = '';
	campoValorGNV.value = '';

	return false;
}

function coletarDadosTela() {
	capacidadeTanqueG = document.getElementById('capacidadeTanqueG').value;
	capacidadeTanqueE = document.getElementById('capacidadeTanqueE').value;
	capacidadeTanqueGNV = document.getElementById('capacidadeTanqueGNV').value;
	autonomiaGasolina = document.getElementById('autonomiaGasolina').value;
	autonomiaEtanol = document.getElementById('autonomiaEtanol').value;
	autonomiaGNV = document.getElementById('autonomiaGNV').value;
	valorGasolinaBomba = document.getElementById('valorGasolinaBomba').value;
	valorEtanolBomba = document.getElementById('valorEtanolBomba').value;
	valorGNVBomba = document.getElementById('valorGNVBomba').value;
}

function atualizarTela() {
	//--------------------------AUTONOMIA--------------------------------------------------
	let autonomiaGasolinaSpan = document.getElementById('autonomiaGasolinaSpan');
	autonomiaGasolinaSpan.innerText = autonomiaGasolina;
	let autonomiaEtanolSpan = document.getElementById('autonomiaEtanolSpan');
	autonomiaEtanolSpan.innerText = autonomiaEtanol;
	let autonomiaGNVSpan = document.getElementById('autonomiaGNVSpan');
	autonomiaGNVSpan.innerText = autonomiaGNV;

	//-------------------------CAPACIDADE DO TANQUE------------------------------------------
	let capacidadeTanqueGSpan = document.getElementById('capacidadeTanqueGSpan');
	capacidadeTanqueGSpan.innerText = capacidadeTanqueG;
	let capacidadeTanqueESpan = document.getElementById('capacidadeTanqueESpan');
	capacidadeTanqueESpan.innerText = capacidadeTanqueE;
	let capacidadeTanqueGNVSpan = document.getElementById('capacidadeTanqueGNVSpan');
	capacidadeTanqueGNVSpan.innerText = capacidadeTanqueGNV;

	//--------------------------CONSUMO DE COMBUSTÍVEIS---------------------------------------
	let consumoDeGasolinaSpan = document.getElementById('consumoDeGasolinaSpan');
	consumoDeGasolinaSpan.innerText = consumoDeGasolina.toFixed(2);
	let consumoDeEtanolSpan = document.getElementById('consumoDeEtanolSpan');
	consumoDeEtanolSpan.innerText = consumoDeEtanol.toFixed(2);
	let consumoDeGNVSpan = document.getElementById('consumoDeGNVSpan');
	consumoDeGNVSpan.innerText = consumoDeGNV.toFixed(2);

	//-----------------------------VALOR GASTO POR KM-----------------------------------------
	let valorGastoGasolinaSpan = document.getElementById('valorGastoGasolinaSpan');
	valorGastoGasolinaSpan.innerText = valorGastoGasolina.toFixed(2);
	let valorGastoEtanolSpan = document.getElementById('valorGastoEtanolSpan');
	valorGastoEtanolSpan.innerText = valorGastoEtanol.toFixed(2);
	let valorGastoGNVSpan = document.getElementById('valorGastoGNVSpan');
	valorGastoGNVSpan.innerText = valorGastoGNV.toFixed(2);

	//-------------------VALORES GASTOS PARA COMPLETAR O TANQUE--------------------------------
	let encherTanqueGSpan = document.getElementById('encherTanqueGSpan');
	encherTanqueGSpan.innerText = encherTanqueG.toFixed(2);
	let encherTanqueESpan = document.getElementById('encherTanqueESpan');
	encherTanqueESpan.innerText = encherTanqueE.toFixed(2);
	let encherTanqueGNVSpan = document.getElementById('encherTanqueGNVSpan');
	encherTanqueGNVSpan.innerText = encherTanqueGNV.toFixed(2);


}

setarValoresPadroes();