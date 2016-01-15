var x = prompt('Введите число, которое будем возводить в степень');
var n = prompt('Введите степень, в которую будем возводить число');


function pow(x, n) {
  var result = 1;

  for (var i = 0; i < n; i++) {
	result = result * x;
  }
  
  return result;
}

var powResult = pow(x, n);

console.log(powResult);
