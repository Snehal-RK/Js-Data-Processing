import food from "./food.json" assert { type: 'json' };
const foodList = food;

//function pageReload() {
//	window.location.reload();
//}

const table = document.getElementsByTagName('table');
const tbody = document.getElementById("tableList");

document.getElementById("showAll").addEventListener('click', all);
function all(){
		for (var i=0; i<foodList.length; i++){
			let row = tbody.insertRow(-1);
			
			var obj = foodList[i];
//			console.log(obj.foodname);
			
			for(var key in obj){
				var value = obj[key];
				let data = row.insertCell(-1);
				data.innerHTML = value;
			}
//			data.innerHTML = (`${obj.id}, ${obj.foodname}, ${obj.calorie}, ${obj.category}, ${obj.protiens}, ${obj.cab}`);
			tbody.appendChild(row);
		}
}


document.getElementById("showVeg").addEventListener('click', vegetables);
function vegetables(){
	
	const tbody = document.getElementById("tableList");
		
		for (var i=0; i<foodList.length; i++){
			let row = tbody.insertRow(-1);
			
			var vegObject = foodList[i];
//			console.log(obj.foodname);
			
			for(var key in vegObject){
				var value = vegObject[key];
				if(vegObject.category === 'Vegetable'){
					let data = row.insertCell(-1);
					data.innerHTML = value;
				}
			}
			tbody.appendChild(row);
		}
}

document.getElementById("showFruits").addEventListener('click', fruits);
function fruits(){
	const tbody = document.getElementById("tableList");
		
		for (var i=0; i<foodList.length; i++){
			let row = tbody.insertRow(-1);
			
			var fruitObject = foodList[i];
//			console.log(obj.foodname);
			
			for(var key in fruitObject){
				var value = fruitObject[key];
				if(fruitObject.category === 'Fruit'){
					let data = row.insertCell(-1);
					data.innerHTML = value;
				}
			}
			tbody.appendChild(row);
		}
}

document.getElementById("showProtein").addEventListener('click', protein);
function protein(){
	const tbody = document.getElementById("tableList");
		
		for (var i=0; i<foodList.length; i++){
			let row = tbody.insertRow(-1);
			
			var proteinObject = foodList[i];
//			console.log(obj.foodname);
			
			for(var key in proteinObject){
				var value = proteinObject[key];
				if(proteinObject.category === 'Protein'){
					let data = row.insertCell(-1);
					data.innerHTML = value;
				}
			}
			tbody.appendChild(row);
		}
}

document.getElementById("showNuts").addEventListener('click', nuts);
function nuts(){
	const tbody = document.getElementById("tableList");
		
		for (var i=0; i<foodList.length; i++){
			let row = tbody.insertRow(-1);
			
			var nutObject = foodList[i];
//			console.log(obj.foodname);
			
			for(var key in nutObject){
				var value = nutObject[key];
				if(nutObject.category === 'Nuts'){
					let data = row.insertCell(-1);
					data.innerHTML = value;
				}
			}
			tbody.appendChild(row);
		}
}

document.getElementById("showGrains").addEventListener('click', grains);
function grains(){
	const tbody = document.getElementById("tableList");
		
		for (var i=0; i<foodList.length; i++){
			let row = tbody.insertRow(-1);
			
			var grainsObject = foodList[i];
//			console.log(obj.foodname);
			
			for(var key in grainsObject){
				var value = grainsObject[key];
				if(grainsObject.category === 'Grain'){
					let data = row.insertCell(-1);
					data.innerHTML = value;
				}
			}
			tbody.appendChild(row);
		}
}

document.getElementById("showDairy").addEventListener('click', dairy);
function dairy(){
	const tbody = document.getElementById("tableList");
		
		for (var i=0; i<foodList.length; i++){
			let row = tbody.insertRow(-1);
			
			var dairyObject = foodList[i];
//			console.log(obj.foodname);
			
			for(var key in dairyObject){
				var value = dairyObject[key];
				if(dairyObject.category === 'Dairy'){
					let data = row.insertCell(-1);
					data.innerHTML = value;
				}
			}
			tbody.appendChild(row);
		}
}

document.getElementById("showCG").addEventListener('click', highCal);
function highCal(){
	const tbody = document.getElementById("tableList");
		
		for (var i=0; i<foodList.length; i++){
			let row = tbody.insertRow(-1);
			
			var CGObject = foodList[i];
//			console.log(obj.foodname);
			
			for(var key in CGObject){
				var value = CGObject[key];
				if(CGObject.calorie>100){
					let data = row.insertCell(-1);
					data.innerHTML = value;
				}
			}
			tbody.appendChild(row);
		}
}

document.getElementById("showCL").addEventListener('click', lowCal);
function lowCal(){
	const tbody = document.getElementById("tableList");
		
		for (var i=0; i<foodList.length; i++){
			let row = tbody.insertRow(-1);
			
			var LCObject = foodList[i];
//			console.log(obj.foodname);
			
			for(var key in LCObject){
				var value = LCObject[key];
				if(LCObject.calorie<100){
					let data = row.insertCell(-1);
					data.innerHTML = value;
				}
			}
			tbody.appendChild(row);
		}
}

