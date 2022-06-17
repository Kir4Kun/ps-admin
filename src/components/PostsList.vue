<script setup lang="ts">
import { useTimeAgo } from '@vueuse/core'

import { usePostsQuery, useRemovePostMutation } from '../../generates'
import TableHeadItem from './TableHeadItem.vue'
import TableRow from './TableRow.vue'
import TableItem from './TableItem.vue'
import Modal from './Modal.vue'

const open = ref(false)
const selectedPost = ref('')

const { data } = await usePostsQuery()
const { executeMutation: removePost } = useRemovePostMutation()

const openModal = (id: string) => {
  selectedPost.value = id
  open.value = true
}

const closeModal = () => {
  selectedPost.value = ''
  open.value = false
}

const deletePost = async () => {
  const postId = selectedPost.value
  const { error } = await removePost({ id: postId })

  if (error)
    return

  closeModal()
}
</script>

<template>
  <Modal
    :open="open" title="Delete Post" message="Are you sure you want to delete this post?" confirm-text="Delete"
    :on-close="closeModal" :on-confirm="deletePost"
  />
  <Table name="Posts">
    <template #header>
      <TableHeadItem>
        Serial
      </TableHeadItem>
      <TableHeadItem>
        Username
      </TableHeadItem>
      <TableHeadItem>
        Name
      </TableHeadItem>
      <TableHeadItem>
        Content
      </TableHeadItem>
      <TableHeadItem>
        Media
      </TableHeadItem>
      <TableHeadItem>
        Created
      </TableHeadItem>
    </template>
    <template #items>
      <TableRow v-for="(post, index) in data?.posts" :key="post.id">
        <TableItem>
          {{ index + 1 }}.
        </TableItem>
        <TableItem>
          {{ post.user.username }}
        </TableItem>
        <TableItem>
          {{ post.user.name ?? '-' }}
        </TableItem>
        <TableItem>
          {{ post.content ?? '-' }}
        </TableItem>
        <TableItem>
          <div v-if="post.media.length" class="w-25 h-25 p-1 ">
            <img :src="post.media[0]" alt="" srcset="">
          </div>
          <p v-else>
            -
          </p>
        </TableItem>
        <TableItem>
          {{ useTimeAgo(post.createdAt).value }}
        </TableItem>
        <TableItem>
          <button class="bg-red py-2 px-4 text-white border border-rounded" @click="openModal(post.id)">
            Delete
          </button>
        </TableItem>
      </TableRow>
    </template>
  </Table>
</template>
