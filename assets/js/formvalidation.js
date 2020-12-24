function login()
	{
		var uname = document.getElementById("email").value;
		var pwd = document.getElementById("pws").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname =='')
		{
			alert("please enter user name.");
		}
		else if(pwd=='')
		{
        	alert("enter the password");
		}
		else if(!filter.test(uname))
		{
			alert("Enter valid email id.");
		}
		else if(pwd.length >=8 || pwd.length < 16)
		{
			alert("Enter a Correct Password.");
		}
		else
		{
	alert('Your Logged In');
			}
    }
    function signup()
	{
		var uname = document.getElementById("inputEmail").value;
        var pwds = document.getElementById("inputPws").value;
        var confirmpwd = document.getElementById("inputConfirmPws").value;
        var ucountry = document.getElementById("countries").value;
        
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var pwsfilter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$/;
		if(uname =='')
		{
			alert("please enter user name.");
		}
		else if(pwds=='')
		{
        	alert("enter the password");
		}
		else if(!filter.test(uname))
		{
			alert("Enter valid email id.");
		}
		else if(!pwsfilter.test(pwds)||(pwds.length < 8 || pwds.length > 15))
		{
			alert("Give a strong pasword ");
        }
        else if(confirmpwd != pwds){
            alert("Password dosen't matched");
        }
        else if(ucountry == '')
        {
            alert("Please specify your country");
        }
		else
		{
	alert('Now Your a Number of INSI');
			}
	}