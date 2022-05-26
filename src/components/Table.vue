<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <body class="flex py-2 justify-center px-2">
    <div class="w-full sm:px-6">
      <div
        class="
          px-4
          md:px-10
          py-4
          bg-gray-100
          rounded-tl-lg rounded-tr-lg
        "
      >
        <div class="sm:flex items-center justify-between">
          <p
            tabindex="0"
            class="
              focus:outline-none
              text-base
              sm:text-lg
              md:text-xl
              lg:text-2xl
              font-bold
              leading-normal
              text-gray-800
            "
          >
            {{ name }}
          </p>
        </div>
      </div>
      <div
        class="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto"
      >
        <table class="w-full whitespace-nowrap">
          <thead>
            <tr
              tabindex="0"
              class="
                focus:outline-none
                h-10
                w-full
                text-sm
                leading-none
                text-gray-800
              "
            >
              <slot name="header" />
            </tr>
          </thead>
          <tbody class="w-full">
            <slot name="items" />
          </tbody>
        </table>
      </div>
    </div>
  </body>
</template>

<style>
</style>
