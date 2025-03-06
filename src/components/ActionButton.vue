<template>
  <button
    :data-tooltip-id="tooltipId"
    :data-tooltip-content="tooltip"
    data-tooltip-place="top"
    @click="func"
  >
    <font-awesome-icon v-if="faIcon" :icon="faIcon" />
    <span>{{ title }}</span>
  </button>
  <Tooltip :id="tooltipId" />
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Tooltip } from 'vue-tooltip';

interface ActionButtonProps {
  title: string;
  tooltipId?: string;
  tooltip?: string;
  func?: () => void;
  faIcon?: IconProp;
}

defineProps<ActionButtonProps>();
</script>
