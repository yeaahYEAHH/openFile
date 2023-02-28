'use strict';
const path = require('path'),
  fileSys = require('fs');

document.addEventListener('DOMContentLoaded', () =>{
    let btn = document.querySelector('.btn'),
      fileList = document.querySelectorAll('.file'),
      checkList = document.querySelectorAll('#check');

    let move = function(files, check) {

      for(let i = 0; i < files.length; i++){
        let fileName =  path.win32.basename(fileList[i].value),
        incorrectPath = path.resolve(fileName),
        correctPath = incorrectPath.replaceAll('\\', '/');
        if(check[i].checked){
          fileSys.rename(correctPath, `C:/Users/Да это я/Documents/Открытие файлов/test/${fileName}`, err => {
                if (err) throw err;
                  console.log('Файл успешно перемещён');
          })
        }
      }    
    }

    btn.addEventListener('click', () => {
      let agga = path.resolve('Documents','caerthaedrfh.txt')
      alert(agga.replaceAll('\\', '/'))
      alert(fileList[0].value)
      alert(path.resolve('./caerthaedrfh.txt'))
      fileSys.rename(fileList[0].value, `C:/Users/Да это я/Documents/Открытие файлов/test/lox.txt`, err => {
        if (err) throw err;
          console.log('Файл успешно перемещён');
  })
      // file.forEach(item, () => {
      //   let correctPath = move(item)
      //   fileSys.rename(correctPath, way, err => {
      //     if (err) throw err;
      //       console.log('Файл успешно перемещён');
      //     })
      // })
      
      
    })
})


