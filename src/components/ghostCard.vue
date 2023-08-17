<script>
export default {
  name: "GhostCard",
  props: {
    ghostName: String,
    evidence: String,
    ability: String,
    strength: String,
    weakness: String,
    test: String,
  }
};
</script>


<template>
  <div class="card" v-bind:id="ghostName" v-bind:class="evidence">
    <div class="card-header fw-bold fs-4">{{ghostName}}</div>
    <div class="card-body">
      <table class="table table-bordered table-striped card-text">
        <tr>
          <th class="pe-5">Ability</th>
          <td>{{ability}}</td>
        </tr>
        <tr>
          <th>St&auml;rke</th>
          <td>{{strength}}</td>
        </tr>
        <tr>
          <th>Schw&auml;che</th>
          <td>{{weakness}}</td>
        </tr>
        <tr>
          <th>Test</th>
          <td>{{test}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>

</style>
