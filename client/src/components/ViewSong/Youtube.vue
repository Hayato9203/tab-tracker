<template>
    <panel title="Youtube Video">
        <!-- 直接给属性赋值 -->
        <youtube class="ma-2"
            :video-id="youtubeId"
            :player-width="600"
            :player-height="330">
        </youtube>
    </panel>
</template>

<script>
export default {
  props: ['youtubeId']
}
</script>

<style scoped>

</style>
