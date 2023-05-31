//--------------------------------------------------------------------------------------------------------------------//
// ДЗ:
//     Створіть папку
const fs = require('node:fs/promises');
const path = require('node:path');

const foo = async () =>{
    const mainFolder = path.join(process.cwd(), 'mainFolder');

    await fs.mkdir(mainFolder, {recursive: true});

    const fileNames = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];
    const folderNames = ['folder1', 'folder2', 'folder3', 'folder4', 'folder5'];

    for (const file of fileNames) {
        await fs.writeFile(path.join(mainFolder, file), 'Hello!');
    }
    for (const folder of folderNames) {
        await fs.mkdir(path.join(mainFolder, folder), {recursive: true});
    }

    const files = await fs.readdir(mainFolder);
    for (const file of files) {
        const stat = await fs.stat(path.join(mainFolder, file))
        console.log(path.join(mainFolder, file), ' : ', stat.isDirectory() ? 'folder' : 'file');;
    }

}

foo();
//--------------------------------------------------------------------------------------------------------------------//
// В тій папці створіть 5 папок і 5 файлів



// І за допомогою модулю fs виведіть в консоль, чи це папка чи це файл
//
// FILE: {fileName}
// FOLDER: {folderName}
//
// !руками нічого не робимо, все через fs