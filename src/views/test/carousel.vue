<template>
  <div class="icarousel-container">
    <Carousel class="icarousel" autoplay :perPageCustom="[[320, 1], [576, 2], [768, 2], [1024, 3]]"
      :navigationEnabled="true"
      navigationPrevLabel='<div class="icarousel-navigationLabel icarousel-navigationLabel-prev"><img src="img/icons/common/car-left.png" /></div>'
      navigationNextLabel='<div class="icarousel-navigationLabel icarousel-navigationLabel-next"><img src="img/icons/common/car-right.png" /></div>'
      paginationActiveColor="#8f75e5" paginationColor="#d8d8d8">
      <Slide>
        <div class="example">
          <p>wehwefjowefoewhfhf</p>
        </div>
      </Slide>
      <Slide>
        <div class="example">
          <p>wehwefjowefoewhfhf</p>
        </div>
      </Slide>
      <Slide>
        <div class="example">
          <p>wehwefjowefoewhfhf</p>
        </div>
      </Slide>
      <Slide>
        <div class="example">
          <p>wehwefjowefoewhfhf</p>
        </div>
      </Slide>
      <Slide>
        <div class="example">
          <p>wehwefjowefoewhfhf</p>
        </div>
      </Slide>
      <Slide>
        <div class="example">
          <p>wehwefjowefoewhfhf</p>
        </div>
      </Slide>
      <Slide>
        <div class="example">
          <p>wehwefjowefoewhfhf</p>
        </div>
      </Slide>
      <Slide>
        <div class="example">
          <p>wehwefjowefoewhfhf</p>
        </div>
      </Slide>
    </Carousel>

  </div>
</template>

<script>
  import {
    Carousel,
    Slide
  } from 'vue-carousel';
  export default {
    name: 'carousel',
    components: {
      Carousel,
      Slide
    },
  }
</script>

<style>
  .icarousel-container {
    padding: 0 60px;
  }

  .example {
    width: 90%;
    height: 100px;
    margin: 0.4rem auto;
    background-color: #0066CC;
    text-align: center;
  }

  .icarousel {
    background-color: #f2f2f2;
  }

  .icarousel-navigationLabel {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    border: 1px solid #a9a9a9;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icarousel-navigationLabel>img {
    width: 1.2rem;
    height: 1.2rem;
  }

  .icarousel-navigationLabel-prev {
    margin-right: -2rem;
  }

  .icarousel-navigationLabel-next {
    margin-left: -2rem;
  }
</style>
