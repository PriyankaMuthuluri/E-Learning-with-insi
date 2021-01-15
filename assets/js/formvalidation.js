function login()
	{
		var email = document.getElementById("email").value;
		var pwd = document.getElementById("pws").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(email =='')
		{
			alert("please enter email.");
		}
        else if(!filter.test(email))
		{
			alert("Enter valid email id.");
		}
		else if(pwd=='')
		{
        	alert("enter the password");
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
		var inemail = document.getElementById("inputEmail").value;
        var pwds = document.getElementById("inputPws").value;
        var confirmpwd = document.getElementById("inputConfirmPws").value;
        var ucountry = document.getElementById("countries").value;
        
		var filtere = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var pwsfilter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$/;
		if(inemail =='')
		{
			alert("please enter email id.");
		}
        else if(!filtere.test(inemail))
		{
			alert("Enter valid email id.");
		}
		else if(pwds=='')
		{
        	alert("enter the password");
		}

		else if(!pwsfilter.test(pwds)||(pwds.length < 8 || pwds.length > 15))
		{
			alert("Give a strong pasword ");
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
