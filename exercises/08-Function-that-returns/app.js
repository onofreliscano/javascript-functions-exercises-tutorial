var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ******///

console.log ("Dolar to Euro: " + dollarToEuro(137));
console.log ("Euro to Yen: " + euroToYen(137));
console.log ("+++++++++++++++++++++++++++++++++++++++++++++");
console.log ("Dolar to Yen: " + euroToYen(dollarToEuro(137)).toFixed(2));

