<template>
<div class="form" style="height: 100px; position: relative; margin-left: auto; margin-right: auto;">
  <form>
    <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
      Login
    </h3>

    <div class="form-outline mb-4">
      <input
        type="email"
        placeholder="E-mail"
        id="form2Example18"
        class="form-control form-control-lg"
        v-model="email"
      />
    </div>

    <div class="form-outline mb-4">
      <input
        type="password"
        placeholder="Palavra-Passe"
        id="form2Example28"
        class="form-control form-control-lg"
        v-model="password"
      />
    </div>

    <div class="pt-1 mb-4">
      <button
        class="btn btn-primary btn-lg btn-block"
        @click="login"
        type="button"
      >
        Login
      </button>
    </div>
  </form>
</div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          console.log(res);
          alert("Logado");
        });
    },
  },
  created() {
    this.user = firebase.auth().currentUser;
  },
};
</script>

