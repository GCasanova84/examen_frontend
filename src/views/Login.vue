<template>
  <div class="container-fluid px-5">
    <div class="row mb-4">
      <div class="card mt-4">
        <div class="row">
          <div class="col-1">
            <img src="../assets/logo.png" height="80" alt="logo" />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-3 mx-auto">
        <div class="card py-4">
          <div class="card-body">
            <h3 class="card-title mb-5">Login Usuarios</h3>
            <form class="px-4" @submit="login">
              <div class="form-group text-start">
                <label for="exampleInputEmail1" class="text-secondary"
                  >Email</label
                >
                <input
                  v-model="formData.username"
                  type="email"
                  class="form-control my-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group text-start">
                <label for="exampleInputPassword1" class="text-secondary"
                  >Contraseña</label
                >
                <input
                  v-model="formData.password"
                  type="password"
                  class="form-control my-2"
                  id="exampleInputPassword1"
                />
              </div>
              <h6 class="my-5">Ingrese sus credenciales de usuario</h6>
              <div class="d-grid">
                <button type="submit" class="btn btn-primary">Ingresar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: "usuario@classicmodels.com",
        password: "abc123",
      },
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      fetch("http://157.230.190.251/api/v1/cmodels/users/login", {
        method: 'POST',
        body: JSON.stringify(this.formData),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.id) {
            alert(`Bienvenido ${result.username}`);
            //sessionStorage.setItem('user',JSON.stringify(result));
            this.$store.commit('setUser', result); 
            this.$router.push('Home')
          } else {
            alert("“Please check your login information.”");
          }
        });
    },
  },
};
</script>

<style>
</style>