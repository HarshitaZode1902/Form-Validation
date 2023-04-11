function validateform()
        {
            var fname=document.myform.fname.value;
            var lname=document.myform.lname.value;
            var password=document.myform.password.value;
            var email=document.myform.email.value;
            var address=document.myform.address.value;
            var phone=document.myform.phone.value;
            var atposition=email.indexOf("@");  
            var dotposition=email.lastIndexOf(".");  
            if (fname==null || fname=="" ||fname.length<6)
            {  
                alert("First name must contain at least 6 characters");  
                return false;  
            }
            else if (lname==null || lname=="" )
            {  
                alert("Last name cannot be empty");  
                return false;  
            }
            else if (address==null || address=="" )
            {  
                alert("Address cannot be empty");  
                return false;  
            }
            else if(password.length<6 && password=="")
            {  
                alert("Password must be at least 6 characters long");  
                return false;  
            }
            else if(phone.length!=10)
            {  
                alert("Enter 10 digit phone number");  
                return false;  
            }  
            else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length)
            {  
                alert("Please enter a valid e-mail address ");  
                return false;  
            }  
            function myFunction() {
                alert("The form was submitted");
            }
        }