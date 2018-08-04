<template>
  <div class="container">
      <div class="row">
          <button @click="selectedComponent = 'appQuote'">Quote</button>
          <button @click="selectedComponent = 'appAuthor'">Author</button>
          <button @click="selectedComponent = 'appNew'">New</button>
      </div>
      <hr>
      <div class="row">
          <div>{{ selectedComponent }}</div>
          <keep-alive>
              <component :is="selectedComponent">
                  <p>Default Content</p>
              </component>
          </keep-alive>
          <!--<app-quote>
              <h2 slot="title">{{ quoteTitle }}</h2>
              <p>A wonderful quote</p>
          </app-quote>-->
      </div>
  </div>
</template>

<script>
    import Qoute from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';
    export default {
        data: function(){
            return {
                quoteTitle: 'The Quote',
                selectedComponent: 'appQuote',
            }
        },
        components:{
            appQuote: Qoute,
            appAuthor: Author,
            appNew: New,
        }
    }
</script>

<style scoped>
    .row{
        display: block;
        margin: 0 -15px;
    }
</style>
