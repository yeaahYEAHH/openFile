const path = require('path'),
  fileSys = require('fs');



document.addEventListener('DOMContentLoaded', () =>{
  let btn = document.querySelector('.btn');

  let move = function(files, check, way) {
    for(let i = 0; i < files.length; i++){    
      if(check[i].checked){
        let fileName =  path.win32.basename(files[i].value), correctPath;
        for (const f of files[i].files) {
          correctPath = f.path
        }
        fileSys.copyFile(correctPath, `//10.0.5.204/in/povs/radio/${fileName}`, function (err) {
          if (err) throw err;
            alert("Успешно перемещено")
        });
        
      }
    }    
  }

  btn.addEventListener('click', () => {
    let fileList = document.querySelectorAll('.file'),
    checkList = document.querySelectorAll('#check'),
    absolutpath = document.querySelector('#path').value.replaceAll('\\', '/');
    console.log(absolutpath)
    console.log(path.resolve(__filename))
    move(fileList, checkList, absolutpath)
  })
})



