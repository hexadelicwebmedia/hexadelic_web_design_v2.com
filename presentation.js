// JavaScript Document
var current_slide = 0;
var count = 0;
var n = 0;
window.onload = changeSlide();

function changeSlide()
{
	setInterval("current_slide++; next()", 1000);
}
$(function()
{
	$(document).keyup(function(e) 
	{
    	if (e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 32) next();
		else if (e.keyCode == 37 || e.keyCode == 38) back();  
    });
	$('.slides').swipe(
	{
		swipe:function(event, direction, distance, duration, fingerCount) 
		{
			switch(direction) 
			{
				case "left":
					next();
					break;
				case "right":
					back();
					break;	
			}
		}
	});
	init_slides();
});
function init_slides()
{
	$('section').eq(current_slide).addClass('active');	
}
function next()
{
	if (n <  $('section').length)
		n++;
	else
		n = 0;		
	goto(n);
}

function back()
{
	if (n == 0)
		n =  $('section').length;
	else 
		n = n - 1;	
	goto(n);
}

function goto(n)
{
	if (n > -1 && n < $('section').length)
	{
		current_slide = n;	
	}
	else
		return;
	$('section').removeClass('active').eq(current_slide).addClass('active');
}
