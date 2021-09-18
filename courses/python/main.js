$(document).ready(function() {
    $.ajax ({
        url: "course1.txt",
        dataType: "text",
        success: function (data) {
            $("#sitewrapper").append(data);
        }
    });
});

const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav__colapse');
const navBtnIcon = document.querySelector('.nav__colapse__icon');

navBtn.addEventListener('click',() => {
    navBtn.classList.toggle('active');

    if(navBtn.classList.contains('active')){
        nav.style.width = 250 + 'px';
        navBtnIcon.style.transform = 'rotateY(-180deg)'
    }else {
        nav.style.width = 100 + 'px';
        navBtnIcon.style.transform = 'rotateY(0deg)'
    };
});