<template>
  <!-- <el-calendar v-model="value" /> -->
  <el-button @click="value = new Date()">Reset</el-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(new Date());
</script>
