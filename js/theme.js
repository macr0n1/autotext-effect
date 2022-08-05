var switcher = document.getElementById('switcher-theme');
var bodyStyle = window.getComputedStyle(document.body);

var sessionTheme = sessionStorage.getItem('theme');

if(sessionTheme == 'light') {
    switcher.innerHTML = 'Dark';
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    sessionStorage.setItem('theme', 'light');
} else if(sessionTheme == 'dark') {
    switcher.innerHTML = 'Light';
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    sessionStorage.setItem('theme', 'dark');
} else {
    if(bodyStyle.backgroundColor == "rgb(252, 252, 252)") {
        switcher.innerHTML = 'Dark';
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        sessionStorage.setItem('theme', 'light');
    } else if(bodyStyle.backgroundColor == "rgb(21, 21, 21)") {
        switcher.innerHTML = 'Light';
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        sessionStorage.setItem('theme', 'dark');
    } else {
        switcher.innerHTML = 'Light';
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        sessionStorage.setItem('theme', 'dark');
    }
}

function switchTheme() {
    if(document.body.classList.contains('dark')) {
        switcher.innerHTML = 'Dark';
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        sessionStorage.setItem('theme', 'light');
    } else {
        switcher.innerHTML = 'Light';
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        sessionStorage.setItem('theme', 'dark');
    }
}