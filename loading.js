window.onload = function() {
    var countdownElement = document.getElementById('countdown25');
    var countdownTime = 10;

    var countdownInterval = setInterval(function() {
        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            // Hide the loader
            document.getElementById('loader25').style.display = 'none';
            // Show the main content
            document.getElementById('content25').style.display = 'block';
        } else {
            // Update the countdown timer
            countdownTime--;
            var minutes = Math.floor(countdownTime / 60);
            var seconds = countdownTime % 60;
            countdownElement.textContent = `00:${seconds < 10 ? '0' : ''}${seconds}`;
        }
    }, 1000);
};