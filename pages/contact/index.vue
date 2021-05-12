<template>
  <article>
    <div
      class="wrapper-fill"
      style="background-image:url('https://image.freepik.com/free-vector/healthcare-background-with-medical-symbols-hexagonal-frame_1017-26363.jpg')"
    >
      <div class="container">
        <h1>About Us</h1>
      </div>
    </div>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  layout: 'client',
  async asyncData ({ $content }) {
    const page = await $content('lo/contact').fetch()

    return {
      page
    }
  },
  head () {
    return {
      title: this.page.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>
<style>
.wrapper-fill {
  width: 100vw;
  height: 100vh;
}
</style>
