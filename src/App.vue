<template>
  <div id="comment-map">
    <div
      v-for="commentButton in commentButtons"
      :key="commentButton.path"
      class="comment-button-container"
      :style="{ top: getPos('y', commentButton.y, commentButton.path) + 'px', left: getPos('x', commentButton.x, commentButton.path) + 'px' }"
    >
      <CommentButton />
    </div>
  </div>
  <div class="toolbar">
    <AddCommentButton />
    <ViewListButton />
    <ActionButton title="Export" :faIcon="faFileExport" :func="exportComments" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import './App.css';
import ActionButton from './components/ActionButton.vue';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';
import AddCommentButton from './components/AddCommentButton.vue';
import ViewListButton from './components/ViewListButton.vue';
import { useStore } from 'vuex';
import CommentButton from './components/CommentButton.vue';
import CommentButtonProps from "./interfaces/CommentButtonProps.ts";

export default defineComponent({
  name: 'App',
  components: {
    ActionButton,
    AddCommentButton,
    ViewListButton,
    CommentButton
  },
  setup() {
    const store = useStore();
    const commentButtons = computed(() => store.state.comments);

    const getPos = (pos: 'x' | 'y', value: number, path: string) => {
      const elem = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue as HTMLElement;
      if (elem === null) {
        console.error("Element not found with xpath: " + path);
        return -1000;
      }

      switch (pos) {
        case 'x':
          return elem.getBoundingClientRect().x + value;
        case 'y':
          return elem.getBoundingClientRect().y + value;
      }
    };

    const exportComments = () => {
      // Implement export functionality here
    };

    return {
      commentButtons,
      getPos,
      exportComments,
      faFileExport
    };
  }
});
</script>

<style scoped>
@import './App.css';
</style>
