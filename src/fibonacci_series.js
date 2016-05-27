'use strict';
function fibonacci(num)
{
	if(num < 2)
	{
		return num;
	}
	else 
		return fibonacci(num - 1) + fibonacci(num - 2);
}

function fibonacci_series(n) {
	var arr = [];
	for(var i = 0; i <= n; i++)
	{
		arr.push(fibonacci(i));
	}
	return arr;

}

module.exports = fibonacci_series;
