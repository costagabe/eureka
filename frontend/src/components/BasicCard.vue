<template>
  <v-card rounded>
    <v-app-bar color="secondary" dense>
      <v-btn
        v-if="backButton"
        @click="$emit('back')"
        class="ml-1 mr-2"
        color="white"
        icon
        small
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <p class="white--text title mt-4">{{ title }}</p>
    </v-app-bar>
    <v-card-text>
      <slot></slot>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import {
  Component, Vue, Prop
} from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class Result extends Vue {
  @Prop({ required: true, type: String })
  title!: string;

  @Prop({ default: false, type: Boolean })
  backButton!: boolean;
}
</script>
<style>
.title, button-text {
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 20px;
}

.button-text {
  font-size: 16px;
}
</style>
