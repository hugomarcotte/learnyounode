var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err,fileContent){
	if(!err){
		console.log(fileContent.split('\n').length-1);	
	}

});

