<template>
    <v-card class="white elevation-2">
      <v-toolbar dark flat dense class="cyan">
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <slot name="action"></slot>
      </v-toolbar>
      <!-- 如果父组件Songs的panel有content，则下面的内容将会被替换 -->
      <slot>No slot content defined.</slot>
    </v-card>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>

</style>
