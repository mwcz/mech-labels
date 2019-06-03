<template>
  <div class="kb-labels">
    <div v-for="label in labels" v-bind:key="label.timestamp">
      <KBLabel v-bind:label="label" />
    </div>
  </div>
</template>

<script>
import { getLabels } from "../labels.js";
import KBLabel from "./KBLabel.vue";

export default {
  name: "KBLabels",
  data: function() {
    return {
      labels: getLabels()
    };
  },
  created: function() {
  },
  props: {
  },
  components: {
    KBLabel
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.kb-labels {


}
</style>
