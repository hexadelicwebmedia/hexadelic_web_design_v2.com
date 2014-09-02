  var fullURI = window.location.href;

        $(document).ready(function() {			
          $('#images').kwicks({
            max : 600,
            spacing : 2
          });
          $('ul.sf-menu').sooperfish();
  
			
		  $("a").click(function()
		  {
			  var elem = $(this).parent('li'); 
			  var elem2 = $(this).parent().parent().parent('li');
			  var elem3 = $(this).parent().parent().parent().parent().parent('li');
			  if( elem.attr('class')) 
			  {
				  var root = elem.attr('class').split(' ')[0]; //alert(root);
			  }
				  else if(elem2.attr('class')) 
				  {
					  var root = elem2.attr('class').split(' ')[0]; //alert(root);
				  }
					  else if(elem3.attr('class'))
					  {
						  var root = elem3.attr('class'.split(' ')[0]); //alert(root);
					  }		

			  		var path = location.href.substring(0,location.href.lastIndexOf("/")+1);
					alert(path);
			  		var hrefName = $(this).attr('href'); 
			 		var className = $(this).attr('class');
			  		var requestURI = path + root + '.php';
			  		if ((findBaseName(fullURI) + '.php')  ==  hrefName)
					  {					
						var file = "content_bar/" + hrefName;
						$('#content_bar').load(path + 'content_bar/' + className + '.php');
						event.preventDefault(); 
					  }
		

		  });
        });
		<!--this is the end of all jquery, below are specialized javascript functions-->
		
		function findBaseName(url) 
		{
			var fileName = url.substring(url.lastIndexOf('/') + 1);
			var dot = fileName.lastIndexOf('.');
			return dot == -1 ? fileName : fileName.substring(0, dot);
		}
	
		function loadXMLDoc(file, className)
		{
			var xmlhttp; alert(file);
			//var path = className+"/"+file; alert("in loadXMLdoc " + file);
			if (window.XMLHttpRequest)
			{// code for IE7+, Firefox, Chrome, Opera, Safari
			  xmlhttp=new XMLHttpRequest();
			}
			else
			{// code for IE6, IE5
			  xmlhttp=new ActiveXObject("Microsoft.XSMLHTTP");
			}
			xmlhttp.onreadystatechange=function()
			{
			  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			  {
					document.getElementById("content_bar").innerHTML=xmlhttp.responseText;//alert("ajax called");
			  }
			}
			xmlhttp.open("POST",file,true);
			xmlhttp.send();
			//alert(xmlhttp.responseText);
		}
		
		function signup(){
			event.preventDefault(); 
			var path = location.href.substring(0,location.href.lastIndexOf("/")+1);			alert(path);
			$('#content_bar').load(path + 'content_bar/signup.php');

		}
		
		function login(){
			event.preventDefault(); 
			var path = location.href.substring(0,location.href.lastIndexOf("/")+1);
			var file = findBaseName(fullURI);
			$('#content_bar').load(path + 'content_bar/login.php');			alert(file);

		}
		function logout()
		{
			event.preventDefault(); 
			var path = location.href.substring(0,location.href.lastIndexOf("/")+1);
			var file = findBaseName(fullURI);
					//	$('#content_bar').load(path + 'content_bar/logout.php');			alert('logout' + file);
			
		}
