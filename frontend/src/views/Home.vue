<template>
  <search-card></search-card>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchCard from '@/components/SearchCard.vue'

export default Vue.extend({
  name: 'Home',
  components: { SearchCard }
})
</script>
