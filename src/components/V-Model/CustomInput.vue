<template>
  <input v-model="localValue"/>
  <div>
    Value: {{ localValue }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  modelValue: String
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>();

const localValue = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value!),
});
</script>
