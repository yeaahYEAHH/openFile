'use strict';
// const path = require('path');
// let fileSys = require('fs');

document.addEventListener('DOMContentLoaded', () =>{
    let btn = document.querySelector('.btn'),
      file_1 = document.querySelector('#file'),
      way = document.getElementById('path').text;

    let fileName = function(input) {
      let file = input.files[0];
      return file.name 
    }

    let pathFile = function(name){
      return path.dirname(name)
    }
    
    btn.addEventListener('click', () => {
      alert(way)
      // try{
      //   let afa = fileName(file_1)
      //   fileSys.rename(pathFile(afa), way, err => {
      //     if (err) throw err;
      //   })
      // }catch (e){
      //   conlose.log(e.name)
      // }
    })
})


