var x = +prompt('Введите число, которое будем возводить в степень');
var n = +prompt('Введите степень, в которую будем возводить число');

function pow(x, n) {
  var result = 1;
  var abs = Math.abs(n);

for (var i = 0; i < abs; i++) {
	result = result * x; 
}
if (n > 0) {
 	return result;
} else {
	result = 1 / result;
    return result;
}
}

var powResult = pow(x, n);

console.log(powResult);
alert(powResult)