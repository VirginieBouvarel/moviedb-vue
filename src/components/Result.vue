<template>
    <section class="result">
        <h2 class="sr-only">Résultat</h2>
        <ul class="cards"></ul>
    </section>
</template>

<script>
export default {
  name: 'Result',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.result {
    padding:2rem 1rem;
}
.cards {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}
.card {
    width:172.5px;
    border-radius:3px;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    box-shadow:2px 5px 10px -3px rgba(0, 0, 0, 0.3);
}

.card img {
    width:100%;
    padding-bottom: 1rem;
    border-radius:3px 3px 0 0;
}
.card h3 {
    font-size: 1.2rem;
    color:var(--c-grey);
    word-wrap: break-word;
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
}
.card p {
    font-size:1rem;
    color:var(--c-light-grey);
    padding-left: 0.5rem;
}
.card img {
    width:172.5px;
    height:268.75px;
}

</style>