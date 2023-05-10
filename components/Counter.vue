<script lang="ts" setup>
import { inject, ref } from 'vue';
const item = inject('slidev');
const props = defineProps({
  count: {
    default: 0,
  },
});

const counter = ref(props.count);

function handleClick(num: number) {
  counter.value += num;
}
</script>

<template>
  <div flex="~" w="min" border="~ main rounded-md">
    <button
      border="r main"
      p="2"
      font="mono"
      outline="!none"
      hover:bg="gray-400 opacity-20"
      @click="handleClick(-1)"
    >
      -
    </button>
    <span m="auto" p="2">{{ counter }}</span>
    <button
      border="l main"
      p="2"
      font="mono"
      outline="!none"
      hover:bg="gray-400 opacity-20"
      @click="handleClick(1)"
    >
      +
    </button>
  </div>
</template>
