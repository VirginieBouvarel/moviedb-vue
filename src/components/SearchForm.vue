<template>
    <section class="search">
        <form class="search_form" method="GET" action="details.html">
            <input class="search_input" type="search" name="search_input" id="search_input">
            <button class="search_btn" type="submit"  id="search_btn">Rechercher</button>
        </form>
    </section>
</template>

<script>
export default {
  name: 'SearchForm',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.search_form {
    padding:2rem;
    display:flex;
    flex-direction:column;
    align-items: center;
}
.search_input {
    border:none;
    border:1px solid silver;
    border-radius:3px;
    padding:0.5rem;
    width:75%;
}
.search_btn {
    border:none;
    background-color: hsl(260, 71%, 62%);
    color: hsl(0, 0%, 100%);
    padding:1rem;
    border-radius:3px;
    margin-top:1rem;
}

</style>