import { Component, OnInit,ViewChild  } from '@angular/core';
import { Chart,registerables  } from 'chart.js';

import  ordersData from "./orders.json";
import myGraph from "./orderschart.json";
// const myGraph = require("./orderschart.json")
// const  ordersData = require("./orders.json")


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  graphData = [0,0,0,0,0,0,0]

  chartData = []

   totalOrder: number = 0
    
   totalOrdersCompleted: number = 0
  
   totalOrdersCancelled: number = 0
   
   totalRevenueDay:number = 0

   totalUsers:number = 0

   numberRiders:number=0
   

   mockHttpClient = {

    get: (url: string) => {

        if (url === "/orders/detail") {
            setTimeout(() => {
                this.totalOrder = ordersData.data.totalOrders
                this.totalOrdersCompleted = ordersData.data.totalOrdersCompleted
                this.totalOrdersCancelled = ordersData.data.totalOrdersCancelled
                this.totalRevenueDay = ordersData.data.totalRevenueDay
                this.numberRiders=ordersData.data.numberRiders
                this.totalUsers=ordersData.data.numberUsers                
            }, 3000)
            
        }else if(url ==="/graphdata/detail"){
            setTimeout(() => {
              this.canvas = this.mychart.nativeElement; 
              this.ctx = this.canvas.getContext('2d');
          
              new Chart(this.ctx, {
                type: 'bar',
                data: {
                    datasets: [{
                        label: 'Weekly Sales',
                        data: myGraph.data,
                        backgroundColor: "red",
                        borderColor: "#B0120D",
                       
                    },
                  ],
                    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday']
                },})
        }, 3000)
        }

    }
}
 
   constructor() { 
    Chart.register(...registerables);
  }

  
  ngOnInit(): void {

    this.canvas = this.mychart.nativeElement; 
      this.ctx = this.canvas.getContext('2d');
  
      new Chart(this.ctx, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Total Sales Made That Week',
                data: this.graphData,
                backgroundColor: "rgb(115 185 243 / 65%)",
                borderColor: "#007ee7",
               
            },
          ],
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday']
        },
    });

  }

  canvas: any;

  ctx: any;

@ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.mockHttpClient.get("/orders/detail")
    this.mockHttpClient.get("/graphdata/detail")
  // 
}
}
