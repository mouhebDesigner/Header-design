function showMenu(){
    let burger = document.getElementById('burger');
    let menu = document.querySelector('.menu');
    burger.addEventListener('click', function(){
        menu.classList.toggle('show-menu');
        // alert('hello world');
    });
}
showMenu();