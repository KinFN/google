const gearIcon = document.querySelector('footer .gear-icon');
const footerDialogMenu =  document.querySelector('footer .footer-dialog-menu');

gearIcon.addEventListener('click',()=>{

    footerDialogMenu.classList.toggle('open');
});
