$(window).on('load', function () {
 $(".error").hide(); 

$(".btn").click(function(){
	/////////////////////defintion variables
	var fname=$("#fname");
	var lname=$("#lname");
	var email=$("#email");
	var password=$("#pass");	
	var cpass=$("#cpass");
	var mGender=$("#mgndr");
   var fGender=$("#fgndr");
	var usrcity=$("#city");

	
	
	
	
	
	
	
	validate(fname);
	validate(lname);
	validate(email);
	validate(password);
	validate(cpass);
	validgender(mGender,fGender);
	cityselect(usrcity);
   //$(".error").show(); 

});
});

/////////////////////////////////////////////////////building function
function validate(id)
{
	var inputid=(id).val();
	if(inputid==null||inputid=="")
	{
		//alert("innnn");
		$(spanid).show(); 
	}else
	{
				$(spanid).hide(); 

	}
}
//////////////////////
function validgender(mGender,fGender)  
{ 
 
x=0;  
  
if(mGender.checked)   
{  
x++;  
} if(fGender.checked)  
{  
x++;   
}  
if(x==0)  
{ 
 $("#GenderError").show();

   
return false;  
} 
$("#GenderError").hide();
return true; 
}
/////////////////
function cityselect(usrcity)  
{  var flag=false;
if(flag==false)
{
	$("#cityerror").show();

var op = document.getElementById("city").value;
if (op=="option")
 {
flag=true;
}
else
{

	$("#cityerror").hide();
}

}
} 
///////////////////////
