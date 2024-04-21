const dropdowns= document.querySelectorAll('.dropdown');

dropdowns.forEach (dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.lang-menu');
    const options = dropdown.querySelectorAll('.lang-menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click',()=>{
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-clicked');
        menu.classList.toggle('lang-menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click',()=>{ 
            selected.innerText = option.innerText;

            select.classList.remove('select-clicked');
            caret.classList.remove('caret-clicked');
            menu.classList.remove('lang-menu-open');
            
            options.forEach(option => {
                option.classList.remove('active');
            });
            //Add active class to clicked option element
            option.classList.add('active');
            });
        });
    });
