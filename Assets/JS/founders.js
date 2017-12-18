//function and logic for staggered fade ins on page load
const body = document.getElementsByTagName('body')[0];
const logo = document.getElementsByClassName('logo');
const h1 = document.getElementsByTagName('h1');
const h3 = document.getElementsByTagName('h3');
const contactButton= document.querySelector('#contactButton');
const nav = document.getElementById('nav');
//function passing arguments of targeted element and time in milliseconds for fade in
function fadeIn(element, time) {
	let milli = new Date().getTime();
	//function that brings opacity from 0 to 1 based on time argument
	let animate = function() {
		element.style.opacity = +element.style.opacity + (new Date() - milli) / time;
		milli = new Date().getTime();
		if (+element.style.opacity < 1) {
		  (window.requestAnimationFrame && requestAnimationFrame(animate)) || setTimeout(animate, 10);
		}
	};
	//calls function for fade in animation
	animate();
}
//fades in body element on page load or reload over 3000ms
fadeIn(body, 3000);
//sets initial 1500ms delay and fades in logo over 1000 ms
setTimeout(function() {
	for (let i = 0; i < logo.length; i++) fadeIn(logo[i], 1000);
}, 1500);
//sets initial 2500ms delay and fades in h1 and h3 elements over 1000ms
setTimeout(function() {
	fadeIn(contactButton, 1000);
	for (let i = 0; i < h1.length; i++) fadeIn(h1[i], 1000);
	for (let i = 0; i < h3.length; i++) fadeIn(h3[i], 1000);
}, 2500);
//sets initial 3000ms delay and fades in navbar over 500ms
setTimeout(function() {
	fadeIn(nav, 500);
}, 3000);

//hamburger menu functionality
//variable initialized to change on menu display, to dictate dynamic menu action via conditional expressions
const dropDown = document.getElementById('dropdown');
const dropButtons = document.querySelector('.dropMenu i');
const menuButtons = document.querySelector('#dropdown');
let menuHidden = true; 
//function to hide menu by changing display property and changes icon to hamburger
function hideMenu() {
	menuHidden = true;
	dropDown.style.display = 'none';
	dropButtons.classList.remove('fa-times');
	dropButtons.classList.add('fa-bars');
}
//function to show menu by chaging the display property and changes icon to x 
function showMenu() {
	menuHidden = false;
	dropDown.style.display = 'initial';
	dropButtons.classList.remove('fa-bars');
	dropButtons.classList.add('fa-times');
}
//adds event listener on click to icon for menu
dropButtons.addEventListener('click', function() {
	//if menu is active, calls hideMenu
	if (menuHidden === false) hideMenu();
	//if menu is hidden, calls showMenu
	else showMenu();
});
//hides menu once navigation selection has been made
menuButtons.addEventListener('click', function() {
	hideMenu();
});

//photobox functionality (enlarges thumbnails)
const imageClick = document.querySelectorAll('.personal .frame img')
const photoBox = document.querySelector('#photobox');
const boxImage = document.querySelector('#photobox img');
const closeBox = document.querySelector('.fa-window-close-o');
let box = true;
//function that activates photobox on click by changing display and opacity (to allow fade in), and calls 300ms fadeIn
function boxControl() {
	for (let i = 0; i < imageClick.length; i++)
		imageClick[i].addEventListener('click', function() {
			photoBox.style.display = 'initial';
			photoBox.style.opacity = '0'
			fadeIn(photoBox, 300);
			//assigns source variable the src of image clicked and assigns src of photobox image this value
			var source = this.getAttribute('src');  
			boxImage.setAttribute('src', source);
		});
}
//activates photobox on displays wider than 750px;
if (document.documentElement.clientWidth > 750) {
	boxControl();
}
//closes photobox on x icon click by changing display property;
closeBox.addEventListener('click', function() {
	photoBox.style.display = 'none';
});
//removes active photobox if windox is downsized below 750px;
window.addEventListener('resize', function() {
if (document.documentElement.clientWidth < 750) photoBox.style.display = 'none'
});

//  copyright year dynamic update
const yearSpan = document.querySelector('#year');
//  updates year using date object and built in method
yearSpan.innerHTML = `${new Date().getFullYear()}`;

// //jQuery alternative for vanilla JS utilized in fade ins...note CSS properties for opacity and display would need to be changed for this alternate code
// $('body').fadeIn(1500, function () {
// 	$('.logo').fadeIn(1000);
// 	$('h1').delay(1000).fadeIn(1000);
// 	$('h3').delay(1000).fadeIn(1000);
// 	$('a').delay(1000).fadeIn(1000);
// 	$('#nav').delay(1500).fadeIn(500);
// });

// //jQuery alternative for vanilla JS for hamburger menu
// function hideMenu() {
// 	$('#dropdown').hide();
// 	menuHidden = true;
// 	$('.dropMenu i').removeClass('fa-times');
// 	$('.dropMenu i').addClass('fa-bars');
// }

// var menuHidden = true;
// $('.fa-bars, .fa-times').click(function() {
// 	if(menuHidden) {
// 		$('#dropdown').show();
// 		menuHidden = false;
// 		$('.dropMenu i').removeClass('fa-bars');
// 		$('.dropMenu i').addClass('fa-times');
// 	}
// 	else if(!menuHidden) {
// 		hideMenu();
// 	}
// });

// $('#dropdown a').click(function() {
// 	hideMenu();
// });

// //jQuery alternative for vanilla JS photobox functionality
// if($(window).width() > 1000 || ($(window).width() > 700 & $(window).height() > 700)) {
// 	$('.personal .frame img').click(function() {
// 		$('#photobox').fadeIn(300);
// 		var source = $(this).attr('src');
// 		$('#photobox img').attr('src', source);
// 	});
// 	$('.fa-window-close-o').click(function() {
// 		$('#photobox').hide();
// 	});
// }
