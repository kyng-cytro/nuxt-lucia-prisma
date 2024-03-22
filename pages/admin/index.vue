<script lang="ts" setup>
definePageMeta({
  middleware: ["admin"],
});
const { user, logOut } = useUser();
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-5 py-20">
    <p>Logged In as {{ user }}</p>
    <UButton @click="logOut" label="Log Out" />
  </div>
</template>
