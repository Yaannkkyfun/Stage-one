document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        const now = new Date();
        const hours = String(now.getUTCHours()).padStart(2, '0');
        const minutes = String(now.getUTCMinutes()).padStart(2, '0');
        const seconds = String(now.getUTCSeconds()).padStart(2, '0');
        
        // Format the time as HH:MM:SS
        const timeString = `${hours}:${minutes}:${seconds}`;
        
        // Update the time in the DOM
        document.getElementById('currentTimeUTC').textContent = timeString;
        document.getElementById('currentDay').textContent = now.toLocaleDateString('en-GB', { weekday: 'long' }); // Display day only
    }
    
    // Update the time immediately and then every second
    updateTime();
    setInterval(updateTime, 1000);
}); 