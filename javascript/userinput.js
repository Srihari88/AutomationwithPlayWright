const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is the day today? ', (userinput) => {
    let day = userinput.toLowerCase();

    switch (day) {
        case 'monday':
            console.log('Today is Monday');
            break;
        case 'tuesday':
            console.log('Today is Tuesday');
            break;
        case 'wednesday':
            console.log('Today is Wednesday');
            break;
        case 'thursday':
            console.log('Today is Thursday');
            break;
        case 'friday':
            console.log('Today is Friday');
            break;
        case 'saturday':
            console.log('Today is Saturday');
            break;
        case 'sunday':
            console.log('Today is Sunday');
            break;
        default:
            console.log('It is not a week day.');
    }

    rl.close();
});
