// Ensure the DOM is fully loaded before rendering charts
document.addEventListener('DOMContentLoaded', function () {

    // Global Dark Mode Styling for Chart.js
    const darkThemeOptions = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#f8f9fa' // Light gray/white text for legends
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)' // Faint white lines
                },
                ticks: {
                    color: '#f8f9fa' // Bright white labels for Y-axis
                }
            },
            x: {
                grid: {
                    display: false // Hide X-axis grid lines for a cleaner look
                },
                ticks: {
                    color: '#f8f9fa' // Bright white labels for X-axis
                }
            }
        }
    };

    // 1. Bar Chart: Ratings Distribution
    const ctxRating = document.getElementById('ratingChart').getContext('2d');
    new Chart(ctxRating, {
        type: 'bar',
        data: {
            labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
            datasets: [{
                label: 'Number of Albums',
                data: [5, 12, 45, 68, 22],
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: darkThemeOptions // Applies our readability fixes
    });

    // 2. Doughnut Chart: Release Era Breakdown
    const ctxEra = document.getElementById('eraChart').getContext('2d');
    new Chart(ctxEra, {
        type: 'doughnut',
        data: {
            labels: ['1970s', '1980s', '1990s', '2000s', '2010s+'],
            datasets: [{
                data: [15, 25, 40, 30, 42],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(255, 205, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                    labels: { color: '#f8f9fa' }
                }
            }
        }
    });

    // 3. Line Chart: Completion Velocity
    const ctxVelocity = document.getElementById('velocityChart').getContext('2d');
    new Chart(ctxVelocity, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Albums Logged',
                data: [10, 15, 12, 28, 35, 22, 40],
                fill: true,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.3,
                borderWidth: 2
            }]
        },
        options: darkThemeOptions // Applies our readability fixes
    });
});