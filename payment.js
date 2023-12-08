window.onload = loadThePage
var mode = localStorage.getItem('mode');
var pricing = localStorage.getItem('pricing');
var timing = localStorage.getItem('timing');
var formattedDate = localStorage.getItem('formatedDate');
function loadThePage(){
    document.getElementById('changeAppointMode').innerHTML=mode;
    document.getElementById('changeAppointModeTitle').innerHTML=mode;
    document.getElementById('changePrice').innerHTML=pricing;
    document.getElementById('selectedTime').innerHTML=timing;
    document.getElementById('selectedDate').innerHTML=formattedDate;
};




var phoneNumber='';


console.log(mode);

function checkNumber()
{
    document.getElementById('changeAlert').innerHTML="Enter valid phone number";
    document.getElementById("phoneNum").placeholder.style.color="red";
    var numberLen=phoneNumber.length;
    if(numberLen==9)
    {
        document.getElementById('alert').style.display="none";
        document.getElementById('otpBtn').style.backgroundColor="#0176C4";
    }
    else{
        document.getElementById('otpBtn').style.backgroundColor="#D3D3D3";
        document.getElementById('alert').style.display="block";
        console.log(phoneNumber);
        console.log(numberLen);
    }
    
}
