var open = document.getElementById('open');
var close = document.getElementById('close');

var modal = document.getElementById('modal');

open.addEventListener('click',function(){
    modal.classList.add('show');
})

close.addEventListener('click',function(){
    modal.classList.remove('show');
})