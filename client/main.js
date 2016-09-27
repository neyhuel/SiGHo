import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

function cantDiasMes(mes, anio){
  return new Date(anio || new Date().getFullYear(), mes, 0).getDate();
}

var primer_dia =  new Date();
//console.log("primer_dia con la fecha actual: " + primer_dia)
primer_dia.setDate(1);
//console.log("primer_dia: " + primer_dia)
dia_sem_primer_dia = primer_dia.getDay()
//console.log( "Dia semana primer dia: " + dia_sem_primer_dia)
resta = 1 - dia_sem_primer_dia


primer_dia =  new Date();

var desde = resta
var hasta = resta + 42
var maximo = cantDiasMes(primer_dia.getMonth()+1, primer_dia.getFullYear())


for (i = desde; i < hasta; i++) {
	primer_dia.setDate(i)
	console.log( "Fecha("+i+"): " + primer_dia )
	if (i <= 0 || i >= maximo){
		primer_dia =  new Date();
		primer_dia.setDate(1)
	}
}

var calendar = {
	'sem1' : {
		'td1':{'dia': 28, 'mes': 8, 'disable': true, 'today': false},
		'td2':{'dia': 29, 'mes': 8, 'disable': true, 'today': false},
		'td3':{'dia': 30, 'mes': 8, 'disable': true, 'today': false},
		'td3':{'dia': 31, 'mes': 8, 'disable': true, 'today': false},
		'td4':{'dia': 1, 'mes': 9, 'disable': false, 'today': false},
		'td5':{'dia': 2, 'mes': 9, 'disable': false, 'today': false},
		'td6':{'dia': 3, 'mes': 9, 'disable': false, 'today': false}
	},
	'sem2' : {
		'td1':{'dia': 4, 'mes': 9, 'disable': false, 'today': false},
		'td2':{'dia': 5, 'mes': 9, 'disable': false, 'today': false},
		'td3':{'dia': 6, 'mes': 9, 'disable': false, 'today': false},
		'td3':{'dia': 7, 'mes': 9, 'disable': false, 'today': false},
		'td4':{'dia': 8, 'mes': 9, 'disable': false, 'today': false},
		'td5':{'dia': 9, 'mes': 9, 'disable': false, 'today': false},
		'td6':{'dia': 10, 'mes': 9, 'disable': false, 'today': false}
	},
	'sem3' : {
		'td1':{'dia': 11, 'mes': 9, 'disable': false, 'today': false},
		'td2':{'dia': 12, 'mes': 9, 'disable': false, 'today': false},
		'td3':{'dia': 13, 'mes': 9, 'disable': false, 'today': false},
		'td3':{'dia': 14, 'mes': 9, 'disable': false, 'today': false},
		'td4':{'dia': 15, 'mes': 9, 'disable': false, 'today': false},
		'td5':{'dia': 16, 'mes': 9, 'disable': false, 'today': false},
		'td6':{'dia': 17, 'mes': 9, 'disable': false, 'today': false}
	},
	'sem4' : {
		'td1':{'dia': 18, 'mes': 9, 'disable': false, 'today': false},
		'td2':{'dia': 19, 'mes': 9, 'disable': false, 'today': false},
		'td3':{'dia': 20, 'mes': 9, 'disable': false, 'today': false},
		'td3':{'dia': 21, 'mes': 9, 'disable': false, 'today': false},
		'td4':{'dia': 22, 'mes': 9, 'disable': false, 'today': false},
		'td5':{'dia': 23, 'mes': 9, 'disable': false, 'today': false},
		'td6':{'dia': 24, 'mes': 9, 'disable': false, 'today': false}
	},
	'sem5' : {
		'td1':{'dia': 25, 'mes': 9, 'disable': false, 'today': false},
		'td2':{'dia': 26, 'mes': 9, 'disable': false, 'today': true},
		'td3':{'dia': 27, 'mes': 9, 'disable': false, 'today': false},
		'td3':{'dia': 28, 'mes': 9, 'disable': false, 'today': false},
		'td4':{'dia': 29, 'mes': 9, 'disable': false, 'today': false},
		'td5':{'dia': 30, 'mes': 9, 'disable': false, 'today': false},
		'td6':{'dia': 1, 'mes': 8, 'disable': true, 'today': false}
	},
	'sem6' : {
		'td1':{'dia': 2, 'mes': 8, 'disable': true, 'today': false},
		'td2':{'dia': 3, 'mes': 8, 'disable': true, 'today': false},
		'td3':{'dia': 4, 'mes': 8, 'disable': true, 'today': false},
		'td3':{'dia': 5, 'mes': 8, 'disable': true, 'today': false},
		'td4':{'dia': 6, 'mes': 8, 'disable': true, 'today': false},
		'td5':{'dia': 7, 'mes': 8, 'disable': true, 'today': false},
		'td6':{'dia': 8, 'mes': 8, 'disable': true, 'today': false}
	}
}

