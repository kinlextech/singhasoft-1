<template>
  <article>
      <div class="bg-header image" style="background-image:url('https://image.freepik.com/free-vector/healthcare-background-with-medical-symbols-hexagonal-frame_1017-26363.jpg')">
        <div class="container">
          <h1>About Us</h1>
        </div>
      </div>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('lo/about').fetch()

    return {
      page
    }
  }
}
</script>
<style>
.bg-header  {
    width: 100%;;
    height: 400px;
    background-position: right;
    background-repeat: no-repeat;
    background-size: 100%;
}
</style>
