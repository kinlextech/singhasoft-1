<template>
  <div class="center examplex">
    <vs-navbar
      v-model="active"
      target-scroll="#padding-scroll-content"
      fixed
      center-collapsed
    >
      <template #left>
        <img src="/logo2.png" alt="">
      </template>

      <template #right>
        <vs-navbar-item
          v-for="(nit, index) in $t('navbar')"
          :id="nit.pageid"
          :key="index"
          :to="`/${$i18n.locale}${nit.link}`"
          :active="active == nit.pageid"
        >
          {{ nit.title }}
        </vs-navbar-item>
      </template>
    </vs-navbar>
    <div id="padding-scroll-content" class="square">
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: 'guide'
  })
}
</script>
<style>
.child {
  height: 100vh;
  width: 100vw;
}
.vs-navbar {
  max-width: 81%;
}
</style>
