// let menuBtn = document.querySelector('.menu-hamburger-btn');

// menuBtn.addEventListener('click', function(event) {
	
// 	let menu = document.querySelector('.menu-hamburger');

// 	if(!menu.classList.contains('active')) {
// 		menu.classList.add('active');
// 	}
// 	else {
// 		menu.classList.remove('active');
// 	}

// 	let menuList = document.querySelector('.viewport-menu');
// 	if(!menuList.classList.contains('active')) {
// 		menuList.classList.add('active');
// 	}
// 	else {
// 		menuList.classList.remove('active');
// 	}
// });


var app = new Vue({
	el: '#app',
	data: {
		openedMenu: false,

		whatsapp: {
			actived: false,
			number: "(17) 996473999"
		},
		email: {
			actived: true,
			link: "rogercostacontato@gmail.com"
		},
		redes_sociais: {
			facebook: {
				actived: true,
				link: "https://www.facebook.com/rogergomescosta"
			},
			instagram: {
				actived: true,
				link: "https://www.instagram.com/rogercosta.93/"
			}
		}
	},

	methods: {
		openMenu: function() {
			!this.openedMenu ? this.openedMenu = true : this.openedMenu = false;
		}
	}
});