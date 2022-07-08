<template>
  <div class="nav-bar">
    <ul>
      <li v-for='(prato, index) in refeicoes' :key="index">
      {{prato.strCategory}}
      <img :src="prato.strCategoryThumb" style="height: 115px">
      </li>
    </ul>
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
  data(){
    return{
      refeicoes:[],
      user:null
    }
  },

  mounted (){
    this.axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(
      res=>{
        console.log(res)
        this.refeicoes = res.data.categories
        }
      )
      this.user = firebase.auth().currentUser
  }
}
</script>
