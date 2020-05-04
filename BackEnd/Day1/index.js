/*
EXPORT IMPORT
*/
// let satu = require('./satu');
// let { nama, hello, loop, timeout } = satu;
///////////////////////////////////////////////////////
// console.log(nama);
// console.log(hello('Andi'));
// console.log(hello(nama));
///////////////////////////////////////////////////////
// loop(() => console.log('Hello'), 10);
// timeout(() => console.log('Delay'), 1000);
// setTimeout(() => console.log('Timeout'), 3000);


/*
ASSERT
*/
// let assert = require('assert'); 
// // UNIT TESTING
// // Apabila dalam assert ada yang false, throw error
// // line dibwh error tidak lagi dibaca aka Break
// // console.log(assert);
// let nama = 'Lian';
// console.log('Sebelum');
// assert.equal('4', 4);
// assert.strictEqual(6, 6);
// assert.notEqual();
// assert.notStrictEqual();
// console.log('Sesudah');


/*
URL MODULE
*/
// let url = require('url');
// let link = 'https://localhost:2000/users?username=lian';
// let parse = url.parse(link);
// console.log(parse);


/*
OPERATION SYSTEM
*/
// let os = require('os');
// console.log(os.hostname());
// console.log(os.type());
// console.log(os.platform());
// console.log(os.release());
// console.log(os.homedir());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.userInfo());
// console.log(os.cpus());


/*
EVENT MODULE
*/
// let events = require('events');
// let newEvent = new events.EventEmitter();   // class => cetakan object
//                                             // FrontEnd kirim data => drag UI
//                                             // eventListener => setiap kali drag panggil API
//                                             // BackEnd => terima data dari FrontEnd
//                                             // emit('drag')
// newEvent.on('klik', (str) => console.log(`Ada Click ${str}`));
// newEvent.on('drag', () => console.log('Ada Drag'));
// newEvent.on('hover', () => console.log('Ada Hover'));
// newEvent.emit('klik', 'Wah');
// newEvent.emit('drag');
// newEvent.emit('hover');


/*
FILE SYSTEM
*/
// const fs = require('fs');
// console.log(fs);
// ============================== SYNCHRONOUS ================================================
// fs.writeFileSync('dua.txt', 'Hello Ini Dua'); // Buat file baru
// fs.appendFileSync('satudua.txt', '\n Wah bertambah'); // nambahin file yg udh ada
// fs.unlinkSync('satu.txt'); // delete file
// ============================== ASYNCHRONOUS ===============================================
// fs.writeFile('satu.txt', 'ini satu.js', () => console.log('file berhasil dibuat'));
// fs.appendFile('satu.txt', '\nWah nambah asynchronous', () => console.log('wah append'));
// fs.unlink('satudua.txt', () => console.log('wah di delete'));
// console.log('synchronous');
// ============================== ENCODING ===================================================
// console.log(fs.readFileSync('satu.txt')); // Encode => dari buffer jd text
// fs.rename('dua.txt', 'duaBaru.txt', () => console.log('renamed'));
// fs.mkdirSync('folderBaru');
// fs.writeFileSync('./folderBaru/satu.txt', 'Hello ini didlm folder');

