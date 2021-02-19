<template>
  <basic-card
    @back="$router.push({name: 'Home'})"
    back-button
    title="Resultado da busca"
  >
    <v-row
      v-if="loading"
      justify="center"
    >
      <v-col cols="auto">
        <v-progress-circular
          color="secondary"
          indeterminate
          size="200"
        />
      </v-col>
    </v-row>
    <div v-if="address">
      <div v-for="key in Object.keys(address)" :key="key">
        <v-row>
          <v-col class="capitalize">{{ key }}</v-col>
          <v-col>{{ address[key] }}</v-col>
        </v-row>
        <v-divider></v-divider>
      </div>
    </div>

  </basic-card>
</template>

<script lang="ts">
import BasicCard from '@/components/BasicCard.vue'
import {
  Component, Vue
} from 'vue-property-decorator'
import Address from '@/models/Address'
import axios from 'axios'

@Component({
  components: {
    BasicCard
  }
})
export default class Result extends Vue {
  address: Address | null = null
  loading = true

  async mounted () {
    const cep = this.$route.params.cep

    try {
      const host = process.env.VUE_APP_API_HOST
      const port = process.env.VUE_APP_API_PORT
      const res = await axios.get(`${host}:${port}/address/${cep}`)
      if (res.status === 200) {
        this.address = res.data
      }
    } catch (e) {
      this.$swal(e.response.data.message)
      await this.$router.push({ name: 'Home' })
    }
    this.loading = false
  }
}
</script>

<style scoped>
.capitalize {
  text-transform: capitalize;
}
</style>
