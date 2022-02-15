<template>
  <div>
    <div :id="computedId" style="height: 260px;"></div>
    <span class="percentage">{{computedPercentage}}%</span>    
  </div>
</template>

<script>
import * as CanvasJS from "../canvasjs.min";
export default {
  name: "ProgressIndicator",
  data() {
    return {
      chart: null,
    };
  },
  computed: {
    chartOptions() {
      return {
        colorSet: "biColor",
        data: [
          {
            type: "doughnut",
            innerRadius: 108,
            dataPoints: this.computedDataPoints,
          },
        ],
      };
    },
    computedId() {
      return `chart${this.id}`;
    },
    computedDataPoints() {
      if (parseInt(this.id) === 1) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return this.dataPoints.reverse();
      } else {
        return this.dataPoints;
      }
    },
    computedPercentage() {
        if (parseInt(this.id) === 1) {
        return (this.computedDataPoints[0].y / this.computedDataPoints[1].y)*100
      } else {
        return (parseInt(this.computedDataPoints[0].y) / (parseInt(this.computedDataPoints[1].y) + parseInt(this.computedDataPoints[0].y)))*100
      }
        
    }
  },
  props: {
    dataPoints: Array,
    id: Number,
  },
  mounted() {
    CanvasJS.addColorSet("biColor", ["#0356fc", "#FFFFFF"]);
    this.chart = new CanvasJS.Chart(this.computedId, this.chartOptions);
    this.chart.render();
  },
};
</script>

<style>
.percentage {
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5em;
}
</style>