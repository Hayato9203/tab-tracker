<template>
<panel title="Lyrics">
    <textarea readonly class="lyrics" v-model="lyrics"></textarea>
</panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  props: ['lyrics'],
  components: {
    Panel
  }
}
</script>

<style scoped>
textarea{
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
@font-face {
font-family: Sazanami;
src: url(../../../static/fonts/sazanami-gothic.ttf);
}
textarea.lyrics{
  font-family: Sazanami;
}
</style>
