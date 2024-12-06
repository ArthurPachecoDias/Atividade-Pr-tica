const soma = () => {
    console.log(parseInt(args[1]) + parseInt(args[2]));
};

const sub = () => {
    console.log(parseInt(args[1]) - parseInt(args[2]));  
};

const div = () => {
    if (parseInt(args[2]) === 0) {
        console.log('Error: Division by zero is not allowed');
    } else {
        console.log(parseInt(args[1]) / parseInt(args[2]));
    }
};

const args = process.argv.slice(2);

switch (args[0]) {
    case 'soma':
        soma();
    break;

    case 'sub':
        sub();
    break;

    case 'div':
        div();
    break;

    default:
        console.log('does not support', args[0]);
}
