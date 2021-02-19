<template>
  <v-form ref="form" @submit.prevent="search">
    <basic-card title="Pesquise pelo CEP">
      <v-row>
        <v-col>
          <v-text-field
            v-model="cep"
            v-mask="'#####-###'"
            :rules="[validCep]"
            color="secondary"
            dense
            label="CEP"
            hint="Ex: 00000-000"
            outlined
            persistent-hint
          >
          </v-text-field>
        </v-col>
        <v-col cols="auto">
          <v-btn
            @click="search"
            class="pt-4"
            color="secondary"
          >
            <p class="button-text">Buscar</p>
          </v-btn>
        </v-col>
      </v-row>
    </basic-card>
  </v-form>
</template>

<script lang="ts">
import BasicCard from '@/components/BasicCard.vue'
import {
  Component, Vue
} from 'vue-property-decorator'
import Address from '@/models/Address'

@Component({
  components: {
    BasicCard
  }
})
export default class Result extends Vue {
  cep = ''

  get cleanCep () {
    return this.cep.replace('-', '')
  }

  async search () {
    const isFormValid = await this.$refs.form.validate()
    if (isFormValid) {
      this.$router.push({
        name: 'Result',
        params: {
          cep: this.cleanCep
        }
      })
    }
  }

  validCep (value: string) {
    const cep = value.replace('-', '')
    if (cep.length !== 8) return 'O CEP deve possuir 8 números'
    if (isNaN(Number(cep))) return 'O CEP deve possuir apenas números'
    return true
  }
}
</script>
