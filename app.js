// MODULE
console.log("Hello!");

// Global variables
// console.log(__dirname);
// console.log(__filename);
// console.log(process.cwd());

// const os = require('os');
// console.log(os.arch());

//--------------------------------------------------------------------------------------------------------------------//
// ДЗ:
//     Створіть папку

const fs = require('fs');
const path = require('path');

const mainFolder = path.join(__dirname, 'main_folder');

// fs.mkdir(path.join( 'main_folder'), (err)=>{
//   if (err) throw new Error(err.message);
// });


// console.log(fs);
// console.log(path);
//--------------------------------------------------------------------------------------------------------------------//
// В тій папці створіть 5 папок і 5 файлів

const folderOne = path.join(__dirname, 'main_folder', 'folderOne');

// const folderOne = fs.mkdir(path.join(__dirname, 'main_folder', 'folderOne'), (err)=>{
//     if(err) throw new Error(err.message);
//     files.forEach(file => {
//         console.log(file.isDirectory());
//     })
// })
const text2Path1 = path.join(__dirname, 'main_folder', 'folderOne', 'text1.txt');
//
// fs.writeFile( text2Path1, 'Hello from Okten 1', (err)=>{
//   if (err) throw new Error(err.message);
// })

const folderTwo = path.join(__dirname, 'main_folder', 'folderTwo');

// const folderTwo = fs.mkdir(path.join(__dirname, 'main_folder', 'folderTwo'), (err)=>{
//     if(err) throw new Error(err.message);
//     files.forEach(file => {
//         console.log(file.isDirectory());
//     })
// })
const text2Path2 = path.join(__dirname, 'main_folder', 'folderTwo', 'text2.txt');
//
// fs.writeFile( text2Path2, 'Hello from Okten 2', (err)=>{
//   if (err) throw new Error(err.message);
// })

//
const folderThree = path.join(__dirname, 'main_folder', 'folderThree');

// const folderThree = fs.mkdir(path.join(__dirname, 'main_folder', 'folderThree'), (err)=>{
//     if(err) throw new Error(err.message);
//     files.forEach(file => {
//         console.log(file.isDirectory());
//     })
// })
const text2Path3 = path.join(__dirname, 'main_folder', 'folderThree', 'text3.txt');
//
// fs.writeFile( text2Path3, 'Hello from Okten 3', (err)=>{
//   if (err) throw new Error(err.message);
// })
//
const folderFour = path.join(__dirname, 'main_folder', 'folderFour');
// const folderFour = fs.mkdir(path.join(__dirname, 'main_folder', 'folderFour'), (err)=>{
//     if(err) throw new Error(err.message);
//     files.forEach(file => {
//         console.log(file.isDirectory());
//     })
// })
const text2Path4 = path.join(__dirname, 'main_folder', 'folderFour', 'text4.txt');
//
// fs.writeFile( text2Path4, 'Hello from Okten 4', (err)=>{
//     if (err) throw new Error(err.message);
// })
//
const folderFive = path.join(__dirname, 'main_folder', 'folderFive');
// const folderFive = fs.mkdir(path.join(__dirname, 'main_folder', 'folderFive'), (err)=>{
//     if(err) throw new Error(err.message);
//     files.forEach(file => {
//         console.log(file.isDirectory());
//     })
// })
const text2Path5 = path.join(__dirname, 'main_folder', 'folderFive', 'text5.txt');
//
// fs.writeFile( text2Path5, 'Hello from Okten 5', (err)=>{
//     if (err) throw new Error(err.message);
// })


// І за допомогою модулю fs виведіть в консоль, чи це папка чи це файл
//
// FILE: {fileName}
// FOLDER: {folderName}
//

function checkFileType(filePath) {
    const fileName = path.basename(filePath);
    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.error(err);
        } else {
            if (stats.isFile()) {
                console.log(`FILE: ${fileName}`);
            } else if (stats.isDirectory()) {
                console.log(`FOLDER: ${fileName}`);
            } else {
                console.log(`Не вдалося визначити тип для: ${filePath}`);
            }
        }
    });
}

checkFileType(mainFolder);

checkFileType(folderOne);
checkFileType(folderTwo);
checkFileType(folderThree);
checkFileType(folderFour);
checkFileType(folderFive);


checkFileType(text2Path1);
checkFileType(text2Path2);
checkFileType(text2Path3);
checkFileType(text2Path4);
checkFileType(text2Path5);

// !руками нічого не робимо, все через fs