<template>
  <div class="home">
    <SearchForm/>
    <Result/>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchForm from '@/components/SearchForm.vue';
import Result from '@/components/Result.vue';


export default {
  name: 'Home',
  components: {
   SearchForm,
   Result,
  }
}
</script>
