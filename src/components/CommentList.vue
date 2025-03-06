<template>
  <div class="comment-list">
    <div v-for="comment in commentList" :key="comment.id" class="comment">
      <span>{{ comment.user }}</span>
      <div class="text-comment">
        <Markdown :source="comment.comment" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import Markdown from 'vue3-markdown-it';
import CommentListItemProps from '../interfaces/CommentListItemProps';

interface CommentButtonProps {
  comment: CommentListItemProps;
}

interface commentListItem {
  user: string;
  comment: string;
  id: string;
}

const props = defineProps<CommentButtonProps>();
const commentList = ref<commentListItem[]>([]);
const crypto = window.crypto;

watchEffect(() => {
  if (props.comment && props.comment.user && props.comment.comment) {
    commentList.value.push({
      user: props.comment.user,
      comment: props.comment.comment,
      id: crypto.randomUUID(),
    });
  }
});
</script>
