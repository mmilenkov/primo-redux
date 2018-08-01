console.log("Connected");

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