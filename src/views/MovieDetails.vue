<template>
  <div class="movie-details">
    <div class="back">
        <a href="index.html?id=${movie.id}&keywords=${input.value}" id="back" class="back_btn"><i class="fas fa-arrow-left"></i> Retour</a>
    </div>

    <section class="movie">
        <img id="image" src="#" alt="Affiche du film">
        <h2 id="title"></h2>
        <div class="movie_infos">
            <p id="release" class="movie_release"></p>
            <p id="average" class="movie_average"></p>
        </div>
        <p id="summary" class="movie_summary"></p>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src



export default {
  name: 'MovieDetails',
  components: {

  }
}
</script>

<style scoped lang="scss">
.back {
    padding:1rem 0 0;
}
.back_btn {
    background-color: var(--bg-violet);
    border-radius: 3px;
    padding: 1rem;
    margin: 0 1rem;
    color: var(--c-white);
    border: none;
    cursor: pointer;
    display: block;
    width: 85px;
}
.movie {
    color:var(--c-light-grey);
}
.movie_infos {
    display:flex;
    justify-content: flex-start;
    margin-bottom:1rem;
}
.movie_infos p { 
    margin:0 0.5rem;
    font-size:1.2rem;
    color:var(--c-light-grey);

}
.movie img, .movie h2, .movie p {
    margin-bottom:1rem;
}
.movie h2 {
    font-size: 1.6rem;
    color: var(--c-grey);
    word-wrap: break-word;
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
}
.movie_summary {
    padding:0 0.5rem;
    font-size:1.4rem;
}
</style>
