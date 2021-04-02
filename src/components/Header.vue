<template>
  <div class="header">
      <a href="index.html" class="logo"><img src="../assets/logo.svg" alt="Lien vers la page d'accueil"></a> 
      <h1>Mes films</h1>
    </div>
</template>

<script>
export default {
  name: 'header',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
    display:flex;
    align-items:center;
    background-color:hsl(260, 71%, 62%);
}
.logo {
    width:5rem;
    margin:1rem;
}
h1 {
    font-family:'Raleway', sans-serif;
    font-size:2rem;
    color:#fff;
}
</style>
