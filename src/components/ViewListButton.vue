<template>
  <ActionButton
    title="View list"
    tooltipId="view-list"
    tooltip="View the list with all of the comments"
    :faIcon="faList"
  />
</template>

<script setup lang="ts">
import { faList } from "@fortawesome/free-solid-svg-icons";
import ActionButton from "./ActionButton.vue";
</script>
