document.addEventListener('keydown', function(event) {
  const body = document.getElementsByTagName('body');
  

  if (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "i" || event.key === "Ä±")) {
    event.preventDefault();
    

    body[0].innerHTML = "Loading...";

      fetch('https://api.ipify.org/?format=json')
        .then(response => response.json())
        .then(data => {
          // Display IP address on the screen
          body[0].innerHTML = "Your IP Address: " + data.ip;
          

        })
        .catch(error => {
          console.error('Error fetching IP:', error);
        });
    } else {

      body[0].innerHTML = "You declined to share your IP address.";
    }
  }
});
