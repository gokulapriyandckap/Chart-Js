const ctx = document.getElementById('myChart');
      
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['python', 'js', 'PHP', 'Laravel', 'HTML', 'Css'],
            datasets: [{
              label: 'Dckap Palli Syallabus',
              data: [70, 30, 30, 50, 20, 30],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(124,252,0)',
                'rgb(143,0,255)',
                'rgb(255,165,0)'
              ],
              hoverOffset: 30
            }]
          },
          options: {
            borderWidth: 1,
            borderRadius : 1,
            hoverBorderWidth : 10,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });