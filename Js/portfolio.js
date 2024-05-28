// contact form validation starts here 
function validate_contact(){
    Event.preventDefault();
    var fullname= document.forms['contactform']['fullname'].value;
    var youremail= document.forms['contactform']['youremail'].value;
    var yourmessage= document.forms['contactform']['yourmessage'].value;
    if(fullname !=="" || youremail !=="" || yourmessage !==""){
        alert("Thank you for contacting us");
    }else{
        alert("please fill the form");
    }
}

// contact validation ends here


