<template>
  <nav class="nav-bar">
    <link rel="stylesheet" href="../public/p3.css">
    <router-link to="/"><a href="https://wipsites.com.br"><button style="margin-right: 15px; background: rgb(207, 25, 25); border-radius: 6px; padding: 15px; cursor: pointer; color: #fff; border: none; font-size: 16px;">Home</button></a></router-link>
    <router-link to="/about"><a href="https://wipsites.com.br"><button style="margin-right: 15px; background: rgb(207, 25, 25); border-radius: 6px; padding: 15px; cursor: pointer; color: #fff; border: none; font-size: 16px;">Pratos</button></a></router-link>
        <router-link to="/login"><a href="https://wipsites.com.br"><button style="background: rgb(207, 25, 25); border-radius: 6px; padding: 15px; cursor: pointer; color: #fff; border: none; font-size: 16px;">Login</button></a></router-link>

  </nav>
  <router-view/>
</template>



<style>




#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
