document.addEventListener("DOMContentLoaded", function() {
    const dateElement_1 = document.getElementById('date_1');
    const dateElement_2 = document.getElementById('date_2');
    const dateElement_3 = document.getElementById('date_3');
    const leftBtn = document.querySelector('.scroll-btn.left');
    const rightBtn = document.querySelector('.scroll-btn.right');
    var n=0;
    const today = "Today";
    var Mode;

    // Function to update the date container with dates
    function updateDates(n) {
      const today = new Date();
      let datesHTML = '';
        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() + n);
        datesHTML = `<span>${currentDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>`;
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
    mode="clinic";
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
    mode="call";
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
    mode="video";
}


// selecting time

let selectedTime = '';
let storedDivID = '';
let prevStoredDivID = 'time1';
  const divs = document.querySelectorAll('.timeBoxCall div');

  // Function to handle click on div
  function handleClick(event) {
    const selectedDiv = event.target; // Get the clicked div element
    const innerHTML = selectedDiv.innerHTML; // Get the innerHTML of the selected div
    storedDivID = selectedDiv.id;
    // console.log("Selected Div's innerHTML:", innerHTML);
    selectedTime = innerHTML;
    // console.log("Selected Div's ID is:", storedDivID);
    selectThatTime()
    
    // You can store innerHTML in a variable or perform any other action here
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
  // window.location.href = 'https://remedoapp.com/rweb/doctors/drmanikdalvi/992acd41-dc20-4334-b7ce-9da565389754';
  window.location.href = "./payment.html";
}



  