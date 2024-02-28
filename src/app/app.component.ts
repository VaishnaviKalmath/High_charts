import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
/*   pieChart=new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },
  
    credits: {
      enabled: false,
    },
  
    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },
  
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Diseases',
    },
  
    legend: {
      enabled: false,
    },
  
    series: [
      {
        type: 'pie',
        data: [
          { name: 'COVID 19', y: 1, color: '#eeeeee' },
  
          { name: 'HIV/AIDS', y: 2, color: '#393e46' },
  
          { name: 'EBOLA', y: 3, color: '#00adb5' },
          { name: 'DISPORA', y: 4, color: '#eeeeee' },
          { name: 'DIABETES', y: 5, color: '#506ef9' },
        ],
      },
    ],
  })
} */

/* Highcharts.chart('container', {
  chart: {
      type: 'line',
      events: {
          load: function() {
              this.update({
                  chart: {
                      panning: true,
                      panKey: 'shift'
                  }
              });
          }
      }
  },
  title: {
      text: 'Interactive Line Chart with Drag and Drop'
  },
  xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
  },
  yAxis: {
      title: {
          text: 'Value'
      }
  },
  series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6],
      dragDrop: {
          draggableY: true
      }
  }]
});
} */