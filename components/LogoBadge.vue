<template>
  <span class="relative px-1 py-0.5 rounded border border-primary text-xs font-medium text-primary self-center overflow-hidden">
    <slot />

    <div class="absolute w-full h-full inset-0 gradient" />
  </span>
</template>

<style scoped>
.gradient {
  background: radial-gradient(58.74% 58.73% at 53.5% 5.79%, rgba(0, 220, 130, 0.51) 0%, rgba(0, 220, 130, 0.00) 100%), linear-gradient(247deg, rgba(0, 220, 130, 0.10) 5.82%, rgba(0, 220, 130, 0.00) 98.31%);
}
</style>
