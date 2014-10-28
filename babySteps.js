
var result = 0;
var params = process.argv;
for (var i = 2; i < params.length; i++) {
	result += Number(params[i]);
};

console.log(result);