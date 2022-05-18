<script setup lang="ts">
defineProps<{id:number}>()
</script>

<template>
<p>这是分类{{ $route.params.id }}</p>
</template>

<style scoped></style>