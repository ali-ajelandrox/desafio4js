document.getElementById('box1').addEventListener('click',function(){
    this.style.backgroundColor='black';
})

document.getElementById('box2').addEventListener('click',function(){
    this.style.backgroundColor='black';
})

document.getElementById('box3').addEventListener('click',function(){
    this.style.backgroundColor='black';
})


document.getElementById('box4').addEventListener('click',function(){
    this.style.backgroundColor='black';
})


document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color= 'pink'
        document.getElementById('key').style.backgroundColor= color
    } else if (event.key === 's') {
        color= 'orange'
        document.getElementById('key').style.backgroundColor= color
    } else if (event.key === 'd') {
        color= 'violet'
        document.getElementById('key').style.backgroundColor= color
    
    } if (event.key === 'q') {
        let div = document.createElement('div');
        div.style.width='200px'
        div.style.height='200px'
        div.style.backgroundColor='purple';
        document.body.appendChild(div);
    } else if (event.key === 'w') {
        let div = document.createElement('div');
        div.style.width='200px'
        div.style.height='200px'
        div.style.backgroundColor='gray';
        document.body.appendChild(div);
    }else if (event.key === 'e') {
        let div = document.createElement('div');
        div.style.width='200px'
        div.style.height='200px'
        div.style.backgroundColor='brown';
        document.body.appendChild(div);
    }


    })


