<template>
  <label class="text-reader">
    <input type="file" @change="loadTextFromFile">
    <!--<input type="file">-->
    filereader
  </label>
</template>

<script>
export default {
  name: 'fileReader',
  methods: {
    loadTextFromFile (ev) {
      const file = ev.target.files[0]
      const reader = new FileReader()

      reader.onload = e => this.$emit('load', e.target.result)
      reader.readAsText(file)
    }
  }
}
</script>

<style>
  .text-reader {
    position: relative;
    overflow: hidden;
    display: inline-block;

    /* Fancy button style 😎 */
    border: 2px solid black;
    border-radius: 5px;
    padding: 8px 12px;
    cursor: pointer;
  }
  .text-reader input {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
  }
</style>
