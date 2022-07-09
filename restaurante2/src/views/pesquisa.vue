<template>
    <div id="b">

        <p style="font-size:20px">Busque o seu prato</p>
        <input type="text" v-model="pesquisa">
        <button @click="pesquisadb(pesquisa)">Pesquisar</button>
    </div>
    <div class="about" style="">
    <ul class="buscacomida" style="list-style-type: none; display:flex; flex-flow: row wrap; align-items: flex-end; align-content: flex-end;">
        <li v-for='(prato, index) in refeicoes' :key="index" style="list-style-type: none;">
        <div class="produto" style="width: 250px; margin:10px">
            <p style="font-size:40px;">{{prato.strMeal}}</p>
            <img :src="prato.strMealThumb" width="200" style="margin:10px" alt="">
        </div>    
        </li>
        </ul>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data(){
    return{
      refeicoes:"",
      user:null,
      pesquisa:"",
    }
  },
  methods:{
    adicionarCompra(prato){
        firebase.database()
                .ref('/compras/'+ this.user.uid+'/')
                .push()
                .set(prato)         
    },
    pesquisadb(pesquisa){
        this.axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + pesquisa)
      .then(
      res=>{
        console.log(res)
        this.refeicoes = res.data.meals
        }
      )
    },
    navega(prato){
        this.$router.push('/produto/' + prato)
    },
  },
  mounted (){
      this.pesquisadb(null)
      this.user = firebase.auth().currentUser
  }
}
</script>

