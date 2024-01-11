<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
    <div>
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
    <img src="~/assets/images/tiger-1.jpg" alt="Tiger">
  </section>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";

definePageMeta({
  layout: "orange"
})
</script>