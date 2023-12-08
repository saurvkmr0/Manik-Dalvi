
var mode='clinic';
var n=0;
var dateAdjust = 0;

document.addEventListener("DOMContentLoaded", function() {
  hrShow_1();
    const dateElement_1 = document.getElementById('date_1');
    const dateElement_2 = document.getElementById('date_2');
    const dateElement_3 = document.getElementById('date_3');
    const leftBtn = document.querySelector('.scroll-btn.left');
    const rightBtn = document.querySelector('.scroll-btn.right');
    const today = "Today";
    localStorage.setItem('mode', 'In-Clinic');
    

    // Function to update the date container with dates
    function updateDates(n) {
      const today = new Date();
      let datesHTML = '';
        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() + n);
        datesHTML = `<span>${currentDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>`;
        
        const formattedDate = formatDate(currentDate);
        console.log(formattedDate);
        localStorage.setItem('formattedDate',formattedDate);

        if(n===0){
          dateElement_1.innerHTML = "Today";
        }
        else{dateElement_1.innerHTML = datesHTML;}
        currentDate.setDate(today.getDate() + (n+1));
        datesHTML = `<span>${currentDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>`;
        if(n===0){
          dateElement_2.innerHTML = "Tomorrow";
        }
        else{dateElement_2.innerHTML = datesHTML;}
        currentDate.setDate(today.getDate() + (n+2));
        datesHTML = `<span>${currentDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>`;
        dateElement_3.innerHTML = datesHTML;
        
    }
  
    // Initial call to populate dates
    updateDates(n);
  
    // // Event listener for scrolling right
    rightBtn.addEventListener('click', function() {
        n=n+1;
        updateDates(n)
        
      const dateContainer = document.querySelector('.date-container');
      dateContainer.scrollLeft += 120; // Change this value to adjust scroll distance
    });
  
    // Event listener for scrolling left
    leftBtn.addEventListener('click', function() {
      if(n>0){
        n=n-1;
        updateDates(n)
      }
      const dateContainer = document.querySelector('.date-container');
      dateContainer.scrollLeft -= 120; // Change this value to adjust scroll distance
    });

  });
  


// selecting appointment types

function enableClinic(){
    document.getElementById('clinic').style.backgroundColor="#64BC6E";
    // document.getElementById('clinic').style.border="#64BC6E";
    document.getElementById('svgClinic').style.fill="white";
    document.getElementById('call').style.backgroundColor="white";
    // document.getElementById('call').style.border="#e5e5e5";
    document.getElementById('svgCall').style.fill="black";
    document.getElementById('videoCall').style.backgroundColor="white";
    // document.getElementById('videoCall').style.border="#e5e5e5";
    document.getElementById('svgVideoCall').style.fill="black";
    // mode="clinic";
    localStorage.setItem('mode', 'In-Clinic');
    localStorage.setItem('pricing', '500');
    document.getElementById('mainPagePrice').innerHTML="500";

    // for manipulating FAQ section
    const elementCall = document.getElementsByClassName('hideClinic');
    for (let i = 0; i < elementCall.length; i++) {
      elementCall[i].style.display = 'block';
    }
    const elementClinic = document.getElementsByClassName('hideCall');
    for (let i = 0; i < elementClinic.length; i++) {
      elementClinic[i].style.display = 'none';
    }
}

function enableCall(){
    document.getElementById('clinic').style.backgroundColor="white";
    // document.getElementById('clinic').style.border="#e5e5e5";
    document.getElementById('svgClinic').style.fill="black";
    document.getElementById('call').style.backgroundColor="#64BC6E";
    // document.getElementById('call').style.border="#64BC6E";
    document.getElementById('svgCall').style.fill="white";
    document.getElementById('videoCall').style.backgroundColor="white";
    // document.getElementById('videoCall').style.border="#e5e5e5";
    document.getElementById('svgVideoCall').style.fill="black";
    // mode="call";
    localStorage.setItem('mode', 'Tele');
    localStorage.setItem('pricing', '525');
    document.getElementById('mainPagePrice').innerHTML="525";

    // for manipulating FAQ section
    const elementCall = document.getElementsByClassName('hideClinic');
    for (let i = 0; i < elementCall.length; i++) {
      elementCall[i].style.display = 'none';
    }
    const elementClinic = document.getElementsByClassName('hideCall');
    for (let i = 0; i < elementClinic.length; i++) {
      elementClinic[i].style.display = 'block';
    }

}

function enableVideoCall(){
    document.getElementById('clinic').style.backgroundColor="white";
    // document.getElementById('clinic').style.border="#e5e5e5";
    document.getElementById('svgClinic').style.fill="black";
    document.getElementById('call').style.backgroundColor="white";
    // document.getElementById('call').style.border="#e5e5e5";
    document.getElementById('svgCall').style.fill="black";
    document.getElementById('videoCall').style.backgroundColor="#64BC6E";
    // document.getElementById('videoCall').style.border="#64BC6E";
    document.getElementById('svgVideoCall').style.fill="white";
    // mode="video";
    localStorage.setItem('mode', 'Video');
    localStorage.setItem('pricing', '525');
    document.getElementById('mainPagePrice').innerHTML="525";

    // for manipulating FAQ section
    const elementCall = document.getElementsByClassName('hideClinic');
    for (let i = 0; i < elementCall.length; i++) {
      elementCall[i].style.display = 'none';
    }
    const elementClinic = document.getElementsByClassName('hideCall');
    for (let i = 0; i < elementClinic.length; i++) {
      elementClinic[i].style.display = 'block';
    }
}

//showing Green line for date selection

function hrShow_1(){
  document.getElementById('discpHr_1').style.visibility="visible";
  document.getElementById('discpHr_2').style.visibility="hidden";
  document.getElementById('discpHr_3').style.visibility="hidden";
}
function hrShow_2(){
  document.getElementById('discpHr_1').style.visibility="hidden";
  document.getElementById('discpHr_2').style.visibility="visible";
  document.getElementById('discpHr_3').style.visibility="hidden";
}
function hrShow_3(){
  document.getElementById('discpHr_1').style.visibility="hidden";
  document.getElementById('discpHr_2').style.visibility="hidden";
  document.getElementById('discpHr_3').style.visibility="visible";
}


// selecting time

let selectedTime = '';
let storedDivID = '';
let prevStoredDivID = 'time1';
  const divs = document.querySelectorAll('.timeBoxCall div');

  // Function to handle click on div
  function handleClick(event) {
    const selectedDiv = event.target; 
    const innerHTML = selectedDiv.innerHTML; 
    storedDivID = selectedDiv.id;
    selectedTime = innerHTML;
    localStorage.setItem('timing',selectedTime);
    selectThatTime()
  }

  // Add click event listener to each div
  divs.forEach(div => {
    div.addEventListener('click', handleClick);
  });

  function selectThatTime() {
    document.getElementById(prevStoredDivID).style.backgroundColor="white";
    prevStoredDivID = storedDivID;
    console.log(prevStoredDivID);
    document.getElementById(storedDivID).style.backgroundColor="#64BC6E";
    document.getElementById('continue').style.backgroundColor="#0176C4";
    document.getElementById('continue').disabled = false;
}

function loadPaymentPage() {
  window.location.href = "./payment.html";
}





function formatDate(date) {
  const day = String(date.getDate()+dateAdjust).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-based
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}







  