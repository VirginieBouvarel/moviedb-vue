<template>
    <div class="footer">
        <p class="copyright">Réalisé par VirginieBouvarel©2021 </p>
    </div>
</template>

<script>
export default {
  name: 'Footer',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
    background-color:hsl(260, 71%, 62%);
    position:fixed;
    bottom:0;
    width:100%;
    min-height:10rem;
    color:hsl(0, 0%, 100%);
    text-align:center;
}

.copyright {
    margin:3rem;
    font-size:1.1rem;
}

@media screen and (max-width:375px) {
    .card {
        width:155px;
    }
}
</style>
