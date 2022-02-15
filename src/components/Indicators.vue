<template>
  <div class="card">
    <div class="row">
      <div class="col-4">
        <progress-indicator :dataPoints="dataPoints" :id="id"/>
        <router-link to="" style="text-decoration: none;">Ver Detalles</router-link>        
      </div>
      <div class="col-8">
        <h3 class="my-4" style="font-weight: bold;">{{ data.nombre }}</h3>
        <div class="row px-5">
          <div v-for="(item, index) in computedData" :key="index" class="col-6">
            <div style="font-size: 3em; font-weight: bold; line-height: 1;">{{ item }}</div>
            <span>Órdenes</span>
            <div>{{ computedKey(computedData, item) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressIndicator from './ProgressIndicator.vue';

export default {
  name: "Indicators",
  components: {
    ProgressIndicator
  },
  props: {
    data: Object,
    id: Number
  },
  methods: {
    computedKey(obj, val) {
      return Object.keys(obj).find((key) => obj[key] === val);
    },
  },
  computed: {
    computedData() {
      let newData = { ...this.data };
      delete newData.nombre;
      return newData;
    },
    dataPoints() {
      let data = [];
      for (let datum in this.computedData) {
        data.push({ y: this.computedData[datum] })
      }
      return data;
    }
  },
};
</script>

<style>
</style>