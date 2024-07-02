let items=document.querySelectorAll('.nav-content-links-ul li a');
items.forEach(function(items){
    items.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector('.nav-content-links-ul li a.selected').classList.remove('selected');
        this.classList.add('selected');
        let dataBox = this.getAttribute('data-content');
       document.querySelector('.nav-content-contents li.selected').classList.remove('selected');
       document.querySelector(`.nav-content-contents li[data-content=${dataBox}]`).classList.add('selected');
        
    })
})