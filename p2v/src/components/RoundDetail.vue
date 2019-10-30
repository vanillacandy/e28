<template>
  <div>
    <ul>
      <li>Round #: {{ number }}</li>
      <li>Winner : {{ winner }}</li>
      <li>Stat : {{ stat }}</li>
    </ul>
    <button @click="$emit('delete-round', number)">Delete round</button>
  </div>
</template>

<script>
module.exports = {
  // Note how the data property receives a function in a Component
  data: function() {
    return {};
  },
  props: {
    // `number` has an expected data type of Number, and it defaults to 0
    number: {
      type: Number,
      default: 0
    },
    // `winner` has an expected data type of String, with no default set
    winner: String,
    stat: {
      type: Number
    },
    players: {
      type: Array
    }
  },
  template: "#round-detail"
};
</script>
<style>
.probability {
  font-family: consolas;
  font-size: 25px;
  color: orange;
}

[v-cloak] {
  display: none;
}

.feedback {
  display: inline-block;
  padding: 5px;
  margin: 10px 0;
  color: blueviolet;
  font-weight: bold;
}

ul#players li {
  display: inline;
}

.error {
  color: red;
}

.winner {
  color: green;
}
</style>
