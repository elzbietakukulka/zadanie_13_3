process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {

	console.log('Node wersja: ' +process.versions.node);
	console.log('Język systemu: ' +process.env.LANG);

    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
        	case '/exit':
            	process.stdout.write('Quitting app!\n');
            	process.exit();
            	break;
       		default:
            	process.stderr.write('Wrong instruction!\n');
        }
    }
});