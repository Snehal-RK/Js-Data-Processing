import food from './food.json' assert { type: 'json' };
const foodList = food


console.log("-----------All Items-----------");
for (var i=0; i<foodList.length; i++){
	var obj = foodList[i];
	console.log(obj.foodname);
}


console.log("-----------Vegetables-----------");
for(var i=0; i<=foodList.length; i++){
	var vegObject = foodList[i];
	for(var key in vegObject){
//		var value = vegObject[key];
		if(vegObject.category === 'Vegetable'){
//			console.log(key+" "+value);
			console.log(vegObject.foodname);
		}
	}
}


console.log("-----------Fruits-----------");
for(var i=0; i<=foodList.length; i++){
	var fruitObject = foodList[i];
	for(var key in fruitObject){
		var value = fruitObject[key];
		if(fruitObject.category === 'Fruit'){
//			console.log(key+" "+value);
			console.log(fruitObject.foodname);
		}
	}
}


console.log("-----------Protein Foods-----------");
for(var i=0; i<=foodList.length; i++){
	var proteinObject = foodList[i];
	for(var key in proteinObject){
		var value = proteinObject[key];
		if(proteinObject.category === 'Protein'){
//			console.log(key+" "+value);
			console.log(proteinObject.foodname);
		}
	}
}


console.log("-----------Nuts-----------");
for(var i=0; i<=foodList.length; i++){
	var nutObject = foodList[i];
	for(var key in nutObject){
		var value = nutObject[key];
		if(nutObject.category === 'Nuts'){
//			console.log(key+" "+value);
			console.log(nutObject.foodname);
		}
	}
}


console.log("-----------Grains-----------");
for(var i=0; i<=foodList.length; i++){
	var grainsObject = foodList[i];
	for(var key in grainsObject){
		var value = grainsObject[key];
		if(grainsObject.category === 'Grain'){
//			console.log(key+" "+value);
			console.log(grainsObject.foodname);
		}
	}
}


console.log("-----------Dairy-----------");
for(var i=0; i<=foodList.length; i++){
	var dairyObject = foodList[i];
	for(var key in dairyObject){
		var value = dairyObject[key];
		if(dairyObject.category === 'Dairy'){
//			console.log(key+" "+value);
			console.log(dairyObject.foodname);
		}
	}
}


console.log("-----------Calories > 100-----------");
for(var i=0; i<=foodList.length; i++){
	var CGObject = foodList[i];
	for(var key in CGObject){
		var value = CGObject[key];
		if(CGObject.calorie>100){
			console.log(CGObject.foodname+" - "+CGObject.calorie);
		}
	}
}


console.log("-----------Calories < 100-----------");
for(var i=0; i<=foodList.length; i++){
	var LCObject = foodList[i];
	for(var key in LCObject){
		var value = LCObject[key];
		if(LCObject.calorie<100){
			console.log(LCObject.foodname+" - "+LCObject.calorie);
		}
	}
}
// ----------------------------------------------------------------




