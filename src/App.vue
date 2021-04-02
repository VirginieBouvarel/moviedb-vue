<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'app',
  components: {
    Header,
  }

}
</script>

<style lang="scss">

html {
	box-sizing:border-box;
}

*, *:before, *:after {
	box-sizing:inherit;
	margin:0;
	padding:0;
}

body {
	font-family: 'Raleway', sans-serif;
	font-size:1.4rem;
}

h1, h2, h3 {
	margin:0;
}

img {
	max-width:100%;
	height:auto;
}

a {
	text-decoration:none;
    cursor:pointer;
}

button {
    cursor:pointer;
}

ul li {
	list-style-type: none;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap; /* added line */
    border: 0;
}

</style>
