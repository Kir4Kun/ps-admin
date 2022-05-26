<script setup lang="ts">
import { useUsersQuery } from '../../generates'
import TableHeadItem from './TableHeadItem.vue'
import TableRow from './TableRow.vue'
import TableItem from './TableItem.vue'

const { data } = await useUsersQuery()
</script>

<template>
  <Table name="Users">
    <template #header>
      <TableHeadItem>
        Serial
      </TableHeadItem>
      <TableHeadItem>
        Profile Picture
      </TableHeadItem>
      <TableHeadItem>
        Username
      </TableHeadItem>
      <TableHeadItem>
        First Name
      </TableHeadItem>
      <TableHeadItem>
        Last Name
      </TableHeadItem>
      <TableHeadItem>
        Phone
      </TableHeadItem>
      <TableHeadItem>
        Bio
      </TableHeadItem>
      <TableHeadItem>
        Country
      </TableHeadItem>
    </template>
    <template #items>
      <TableRow v-for="(user, index) in data?.users" :key="user.id">
        <TableItem>
          {{ index + 1 }}.
        </TableItem>
        <TableItem>
          <div class="w-10 h-10">
            <img :src="user.profileImage?.url" alt="" srcset="">
          </div>
        </TableItem>
        <TableItem>
          {{ user.username }}
        </TableItem>
        <TableItem>
          {{ user.firstName ?? '-' }}
        </TableItem>
        <TableItem>
          {{ user.lastName ?? '-' }}
        </TableItem>
        <TableItem>
          {{ user.phone ?? '-' }}
        </TableItem>
        <TableItem>
          {{ user.bio ?? '-' }}
        </TableItem>
        <TableItem>
          {{ user.country ?? '-' }}
        </TableItem>
      </TableRow>
    </template>
  </Table>
</template>
