const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        emojidisplay(); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        emojidisplay();    //add this
    }
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        emojidisplay();
    }
}

function emojidisplay() {
    let cTheme =localStorage.getItem('theme')
    if (cTheme === 'dark') {
        document.getElementById('emoji').innerHTML = '';
        document.getElementById('emoji').innerHTML = "&#127774;";
    }
    else if(cTheme ==='light'){
        document.getElementById('emoji').innerHTML = '';
        document.getElementById('emoji').innerHTML = "&#127769;";
    }
}
emojidisplay();

//navbar open-close
// const menu = document.getElementById('menu');
// const close = document.getElementById('close');
// const nav = document.getElementById('navtabs');
// menu.addEventListener('click', () => {
//     nav.style.display = 'block';
//     menu.style.display = 'none';
//     close.style.display = 'block';
// })
// close.addEventListener('click', () => {
//     nav.style.display = 'none';
//     close.style.display = 'none';
//     menu.style.display = 'block';
// })