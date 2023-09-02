import {
  Component,
  OnInit
} from '@angular/core';
import {
  Chart
} from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less']
})
export class ChartComponent implements OnInit {


  ngOnInit(): void {

    new Chart("myChart", {
      type: 'line',
      data: {
        labels: ['ديسمبر', 'نوفمبر', 'اكتوبر', 'سبتمبر', 'اغسطس', 'يوليو', 'يونيو', 'مايو', 'ابريل', 'مارس', 'فبراير', 'يناير'],
        datasets: [{
          label: 'استخدم',
          data: [8, 5, 8, 5, 7, 5, 7, 9, 6, 4, 8, 6],
          borderWidth: 2.5,
          borderColor: '#8A74F9',
          backgroundColor: 'rgba(138, 116, 249, 0.2)',
          pointRadius: 0,
          pointHoverRadius: 5,
          pointBackgroundColor: '#8A74F9'
        }]
      },
      options: {
        legend: {
          display: false,
          labels: {
            fontColor: "blue",
            fontSize: 18,
            fontFamily: 'Neo Sans Arabic',
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: "white",
              stepSize: 0.75,

            }
          }],
          xAxes: [{
            gridLines: {
              display: false ,
              color: "#FFFFFF"
            },
            ticks: {
              fontFamily: 'Neo Sans Arabic',
              fontSize: 12,
            }
          }]
        },
        plugins: {
          filler: {
            propagate: false,
          }
        }
      }
    });

  }

}
