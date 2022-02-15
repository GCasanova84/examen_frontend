<template>
  <div class="home px-4">
    <h5 class="text-start my-3 ms-2">Home</h5>
    <div class="card p-2 mb-4">
      <img src="" class="img-fluid img-thumbnail" height="300" alt="Vitrina" />
      <div class="card-body text-start">
        <h5 class="card-title">Bienvenido</h5>
        <p class="card-text">
          Bienvenido al sistema de Órdenes e Inventario de ClassicModels
        </p>
      </div>
    </div>
    <div class="row">
      <div v-for="(kpi, i) in data.kpis" :key="i" class="col-6">
        <indicators :data="kpi" :id="i" />
      </div>
    </div>
  </div>
</template>

<script>
import Indicators from "../components/Indicators.vue";

export default {
  components: {
    Indicators,
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
    data() {
      return this.$store.getters.data
    }
  },
  created() {
    if (this.user.id) {
      fetch('http://157.230.190.251/api/v1/cmodels/secure/dashboard', {
        method: 'GET'
      })
      .then((response) => response.json())
      .then(result => {
        this.$store.dispatch('setData', result)
      })
    }
  },
};
</script>