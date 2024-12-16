fetch('https://ipinfo.io/json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ip-address').textContent = `Your IP: ${data.ip}`;
    })
    .catch(error => {
        console.error('Error fetching IP:', error);
        document.getElementById('ip-address').textContent = 'Unable to fetch IP address.';
    });
