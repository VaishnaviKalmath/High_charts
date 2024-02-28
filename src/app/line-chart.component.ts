import { Component, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements AfterViewInit {

  chartOptions: Highcharts.Options;

  ngAfterViewInit() {
    this.chartOptions = {
      chart: {
        type: 'line',
        events: {
          load: () => {
            this.makePointsDraggable();
          }
        }
      },
      title: {
        text: 'Interactive Line Chart with Draggable Points'
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
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]
      }]
    };

    Highcharts.chart('container', this.chartOptions);
  }

  makePointsDraggable() {
    this.chartOptions.series.forEach(series => {
      series.points.forEach(point => {
        const graphic = point.graphic.element;

        graphic.onmousedown = (e: MouseEvent) => {
          const startY = e.clientY;
          const pointY = point.plotY;

          const moveHandler = (me: MouseEvent) => {
            const deltaY = me.clientY - startY;
            const newY = this.chartOptions.yAxis[0].toValue(pointY - deltaY);
            point.update(newY);
          };

          document.addEventListener('mousemove', moveHandler);

          document.onmouseup = () => {
            document.removeEventListener('mousemove', moveHandler);
            document.onmouseup = null;
          };
        };
      });
    });
  }
}
