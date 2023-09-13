console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = '/frontend/css/blue.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = '/frontend/css/default.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = '/frontend/css/green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = '/frontend/css/purple.css'
	}

	localStorage.setItem('theme', mode)
};



let menu = 'closed'

let menuIcon = document.getElementById('menu-icon')
let navigation = document.getElementById('navigation')
let closeBtn = document.getElementById('close-btn')

menuIcon.addEventListener('click', toggleMenu)
closeBtn.addEventListener('click', toggleMenu)


function toggleMenu() {
	if (menu == 'closed') {
		navigation.style.display = 'block'
		closeBtn.style.display = 'block'
		menu = 'open'
	} else {
		navigation.style.display = 'none'
		closeBtn.style.display = 'none'
		menu = 'closed'
	}
}


// Attaching the event listener function to window's resize event

window.addEventListener("resize", function () {
let width = document.documentElement.clientWidth;
	if (width > 1080) {
		navigation.style.display = 'block'
	} else {
		navigation.style.display = 'none'
	}
	menu = 'closed'
	closeBtn.style.display = 'none'
});

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'UA-47692315-56');



				