<template>
  <div class="kb-label">
    <h1>{{ label["build description"] || label.model }}</h1>
    <table>
        <tr v-if="label.switches">
          <th>Switches</th>
          <th>{{ label["switches"] }}</th>
        </tr>
        <tr v-if="label.keycaps">
          <th>Keycaps</th>
          <th>{{ label["keycaps"] }}</th>
        </tr>
        <tr>
          <th>Custom build</th>
          <th>{{ label["build description"] ? "Yes" : "No" }}</th>
        </tr>
        <tr>
          <th>For sale</th>
          <th>{{ label["for sale"] ? "Yes" : "No" }}</th>
        </tr>
        <tr v-if="label.link">
          <th>Sale/drop link</th>
          <th><a class="full-link" v-bind:href="label.link" v-bind:alt="label.link">{{ label.link }}</a></th>
        </tr>
        <tr>
          <th>Owner</th>
          <th>{{ label["email"] }}</th>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "KBLabel",
  props: {
    label: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
td, th {
  padding-left: 0;
}
.kb-label {
  margin-bottom: 60px;
}
.full-link {
  font-size: 0.8em;
}
div {
  page-break-inside: avoid;
}
</style>
