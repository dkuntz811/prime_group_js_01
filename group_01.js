var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

function calcBonus (empArray) {
	empArray.forEach (function(employee, i) {
        var currentEmp = [];
        currentEmp[0] = employee[0];
        var bonus = 0;
        switch (employee[3]) {
        	case 1: 
        	case 2: bonus = 0; 
        	break;
        	case 3: bonus = .04;
        	break;
        	case 4: bonus = .06;
        	break;
        	case 5: bonus = .1;
        	break; 
        	default: 

        }
        if (employee[1].length == 4) {
        	bonus += .05;
        }
        employee[2] = parseInt(employee[2]);
        if (employee[2]>65000) {
        	bonus -= .01;
        }
        if (bonus > .13) {
             bonus = .13;

        }
        var totalBonus = employee[2] * bonus;
        totalBonus = Math.round(totalBonus);
        currentEmp[3] = totalBonus;
        currentEmp[1] = bonus;
        currentEmp[2] = parseInt(employee[2]) + totalBonus;
       console.log(currentEmp);
        });
		

	}
	calcBonus(employees);






