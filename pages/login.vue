<script lang="ts" setup>
const { signIn } = useUser();
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-5 py-20">
    <UButton @click="signIn" label="Login" />
  </div>
</template>
