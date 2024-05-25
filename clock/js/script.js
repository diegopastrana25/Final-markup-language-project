document.addEventListener('DOMContentLoaded', function() {
    function updateClock() {
        const now = new Date();
        document.getElementById('time').textContent = now.toLocaleTimeString();
        document.getElementById('dateDisplay').textContent = now.toLocaleDateString({ year: 'numeric', month: 'numeric', day: 'numeric' });
    }
    updateClock();
    setInterval(updateClock, 900);
});
