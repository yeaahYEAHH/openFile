'use strict';
const path = require('path'),
  fileSys = require('fs');

document.addEventListener('DOMContentLoaded', () =>{
    let btn = document.querySelector('.btn'),
      file = document.querySelectorAll('#file');

    let move = function(input) {
      let fileName = input.files[0],
      incorrectPath = path.resolve(fileName.name);
      return incorrectPath.replaceAll('\\', '/')
    }

    btn.addEventListener('click', () => {
      
      let files = Array.from(file);
      files.forEach(function (item, index){
        files[index] = item.value
      })

      alert(files)
      // file.forEach(item, () => {
      //   let correctPath = move(item)
      //   fileSys.rename(correctPath, way, err => {
      //     if (err) throw err;
      //       console.log('Файл успешно перемещён');
      //     })
      // })
      
      
    })
})


