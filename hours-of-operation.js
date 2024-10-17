document.addEventListener("DOMContentLoaded", function() {
    var hoursTitle = document.getElementById('hoursTitle');
    var hoursInfo = document.getElementById('hoursInfo');
    
    // Get current time
    var currentTime = new Date().getHours();
  
    // Set opening hours
    var openingTime = 8;
    var closingTime = 16;
  
    // Check if it's within opening hours
    var isOpenNow = currentTime >= openingTime && currentTime <= closingTime;
  
    // Update the display based on current time
    hoursInfo.textContent = isOpenNow ? 'Open now' : 'Closed now';
    hoursInfo.style.color = isOpenNow ? 'green' : 'red';
  });