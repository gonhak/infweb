const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav__colapse');
const navBtnIcon = document.querySelector('.nav__colapse__icon');
const loginPage = document.querySelector('.loginScreen');
const input = document.querySelector('.loginScreen__box__input');
const loginBtn = document.querySelector('.loginScreen__box__button');
const passwords = ["fnatanek", "mkoziel", "rrady"];
let password;

const checkingPass = () => {
    passwords.forEach(el => {
        if (input.value === el) {
            password = el;
        }
    });

    if (input.value === password && input.value !== "") {
        loginPage.style.opacity = 0;
        loginPage.style.zIndex = '-1';
    } else if (input.value !== password || input.value == "") {
        input.value = '';
        input.placeholder = "Spróbuj ponownie...."
    };

    password = "";
};

const checkingPassInput = (event) => {
    if(event.keyCode == 13){
        checkingPass();
    };
};

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('active');

    if (navBtn.classList.contains('active')) {
        nav.style.width = 250 + 'px';
        navBtnIcon.style.transform = 'rotateY(-180deg)';
    } else {
        nav.style.width = 100 + 'px';
        navBtnIcon.style.transform = 'rotateY(0deg)';
    };
});

loginBtn.addEventListener('click', checkingPass);
input.addEventListener('keydown', checkingPassInput);