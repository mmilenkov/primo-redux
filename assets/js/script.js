console.log("Connected");


/* Navbar scroll - full page */

window.onscroll = function () {scrollingMenu()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function scrollingMenu ()
{
	if (window.pageYOffset >= sticky) 
	{
		navbar.classList.add("sticky");
	}
	else
	{
		navbar.classList.remove("sticky");
	}
}

/* Navbar collapse - Responsive*/
var open = document.getElementById("expand");
var responsiveNav = document.getElementById("collapsable")
var close = document.getElementById("close");

function navExpCol ()
{
responsiveNav.classList.toggle("navVisibility");
};

if(open){
  open.addEventListener('click', navExpCol, false);
};

/* Consider adding possibly?
function navClose ()
{
	responsiveNav.classList.remove("navVisibility");
}
if(close){
	close.addEventListener('click', navClose, false);
};
*/