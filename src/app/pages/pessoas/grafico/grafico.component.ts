import {Component, OnInit} from '@angular/core';
import * as CanvasJS from 'src/assets/canvasjs.min.js';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
  templateUrl: 'grafico.component.html',
  styleUrls: ['grafico.component.scss']
})
export class GraficoComponent implements OnInit{
  dados: any[] = [];
  private ocupadas: number;
  private disponiveis: number;

  constructor(private dynamicDialogRef: DynamicDialogRef,
              private dynamicDialogConfig: DynamicDialogConfig){
  }

  ngOnInit(): void {
    this.dados = this.dynamicDialogConfig.data;

    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      exportFileName: "Doughnut Chart",
      exportEnabled: true,
      animationEnabled: true,
      title:{
        text: "Gráfico de tarefas"
      },
      legend:{
        cursor: "pointer",
      },
      data: [{
        type: "doughnut",
        innerRadius: 90,
        showInLegend: true,
        dataPoints: this.dados
      }]
    });

    chart.render();
  }

}
