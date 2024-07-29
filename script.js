function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    };
    document.getElementById('datetime').innerText = now.toLocaleDateString('en-US', options);
}

setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call to display immediately
