/*
CHALK
*/
// let chalk = require('chalk');
// // Warna dalam method
// console.log(chalk.red('Red'));
// console.log(chalk.blue('Blue'));
// console.log(chalk.yellow('Yellow'));
// console.log(chalk.bgRed('Background Red'));
// // Warna dlm bntk string
// console.log(chalk.keyword('orange')('Hai 1'));
// console.log(chalk.keyword('purple')('Hai 2'));
// console.log(chalk.keyword('cyan')('Hai 3'));
// console.log(chalk.keyword('gold')('Hai 4'));
// console.log(chalk.keyword('magenta')('Hai 5'));
// console.log(chalk.keyword('silver')('Hai 6'));
// // Warna code RGB
// console.log(chalk.rgb(0, 44, 44)('wah RGB'));
// console.log(chalk.rgb(255, 51, 255)('wah RGB'));
// // Warna hex code
// console.log(chalk.hex('#6b6786')('wah hexa'));


/*
COLORS
*/
// let colors = require('colors');
// console.log(colors.red('Hey'));
// console.log(colors.magenta('Hey'));
// console.log(colors.bgBlue('Hey'));
// console.log(colors.america('murica'));
// console.log(colors.rainbow('rainbow'));
// console.log(colors.trap('trap'));
// console.log(colors.inverse('inverse'));


/*
SLUG
simbol jadi string
*/
// let slug = require('slug');
// let satu = slug('NodeJS ♥ is ☢');
// let dua = slug('I <3 NodeJS');
// console.log(satu);
// console.log(dua);
// console.log(slug.charmap);
// slug.charmap['☢'] = 'Chernobyl';
// console.log(slug('☢'));


/*
MOMENT
*/
// let moment = require('moment');
// let now1 = moment().format('ddd', 'hA');
// let now2 = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
// console.log(now1);
// console.log(now2);


/*
LODASH
*/
// let lodash = require('lodash');
// // console.log(lodash.isString('123'));
// // console.log(lodash.isBoolean(false));
// // console.log(lodash.isNull('bukan'));
// // console.log(lodash.capitalize('hahaha'));
// // console.log(lodash.upperFirst('apa ya'));
// let x = [1,2,3,4,5,6,7,8,9];
// let y = [1,1,2,2,3,3];
// console.log(lodash.isArray(x));
// console.log(lodash.uniq(y));


/*
UNDERSCORE
*/
let _ = require('underscore');
// let _ = require('./satu');
// let arr = [1,2,3];
// let output = _.map(arr, (val) => val * 2);
// let mapping = arr.map((val) => val * 2);
// console.log(output);
// console.log(mapping);
// let x = [1,2,3];
// let y = [4,5,6];
// let z = [7,8,9];
// let arr = [x,y,z];
// console.log(arr);
// let output = _.map(arr, _.first);
// console.log(output);
// let obj = {
//     a:1,
//     b:2,
//     c:3,
// }
// let x = _.map(obj, (val) => val * 2);
// console.log(x);


/*
YARGS
*/
// let yargs = require('yargs');
// console.log(yargs.x, yargs.y);


let http =  require('http');
let port = 2000;
let fs = require('fs');
let server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-type' : 'text/html'
        });
        res.end('<h1>Hello</h1>');
    } else if (req.url === '/users') {
        let data = {
            nama : 'Lian'
        }
        res.writeHead(200, {
            'Content-type' : 'application/JSON'
        });
        res.end(JSON.stringify(data));
    } else if (req.url === '/json') {
        let json = fs.readFileSync('package.json');
        res.writeHead(200, {
            'Content-type' : 'application/JSON'
        });
        res.end(json);
    }
})
server.listen(port);
console.log(`Server active at port ${port}`);