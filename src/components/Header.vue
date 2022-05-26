<script setup lang="ts">
defineEmits(['signOut'])
</script>

<template>
  <nav role="navigation" class="bg-white shadow xl:block hidden">
    <div class="mx-auto container px-6 py-2 xl:py-0">
      <div class="flex items-center justify-between">
        <button
          class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-md flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start"
        >
          <div class="flex items-center">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light-with-button-svg3.svg"
              alt="logo"
            >
            <h2 class="hidden sm:block text-base text-gray-700 font-bold leading-normal px-3">
              Poker Social
            </h2>
          </div>
        </button>
        <div class="flex">
          <div class="hidden xl:flex md:mr-6 xl:mr-16">
            <router-link
              to="/users"
              class="focus:text-indigo-700 border-b-2 border-transparent focus:border-indigo-700 flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
            >
              <span class="mr-2">
                <img
                  class="icon icon-tabler icon-tabler-grid"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light-with-button-svg4.svg"
                  alt="dashboard"
                >
              </span>
              Users
            </router-link>
            <router-link
              to="/posts"
              class="focus:text-indigo-700 border-b-2 border-transparent focus:border-indigo-700 flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
            >
              <span class="mr-2">
                <img
                  class="icon icon-tabler icon-tabler-puzzle"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light-with-button-svg5.svg"
                  alt="products"
                >
              </span>
              Posts
            </router-link>
          </div>
          <div class="hidden xl:flex items-center">
            <div class="relative md:mr-6 my-2">
              <button
                class="focus:ring-2 focus:ring-offset-2 focus:ring-red-700 focus:bg-red-500 focus:outline-none bg-gray-100 border-gray-300 border transition duration-150 ease-in-out hover:bg-red-500 hover:text-white focus:text-white rounded text-gray-600 px-5 py-2 text-xs"
                @click="$emit('signOut')"
              >
                Sign out
              </button>
            </div>
            <div class="ml-6 relative">
              <button
                aria-label="dropdown"
                class="focus:outline-none border-b-2 border-transparent focus:border-indigo-700 py-3  focus:text-indigo-700 text-gray-600 hover:text-indigo-700 flex items-center relative"
              >
                <div
                  class="cursor-pointer flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
                >
                  <img
                    class="rounded-full h-10 w-10 object-cover"
                    src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_2.png"
                    alt="logo"
                  >
                </div>
                <div class="ml-2 ">
                  <img
                    class="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light-with-button-svg8.svg"
                    alt="chevron down"
                  >
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <nav>
    <div class="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-white fixed top-0 z-40">
      <div aria-label="logo" role="img" tabindex="0" class="focus:outline-none w-24">
        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light-with-button-svg9.svg" alt="logo">
      </div>
      <div class="flex items-center">
        <div class="relative mr-6">
          <button
            class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none bg-gray-100 border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600 px-5 py-2 text-xs"
          >
            Manage
          </button>
        </div>
        <button
          id="menu" aria-label="open menu"
          class="focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-md text-gray-800"
          onclick="sidebarHandler(true)"
        >
          <img
            class="icon icon-tabler icon-tabler-menu-2"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light-with-button-svg10.svg" alt="menu"
          >
        </button>
      </div>
    </div>
    <!-- Mobile responsive sidebar -->
    <div id="mobile-nav" class="absolute w-full h-full transform -translate-x-full z-40 xl:hidden">
      <div class="bg-gray-800 opacity-50 w-full h-full" onclick="sidebarHandler(false)" />
      <div
        class="w-64 z-40 fixed overflow-y-auto z-40 top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out"
      >
        <div class="px-6 h-full">
          <div class="flex flex-col justify-between h-full w-full">
            <div>
              <div class="mt-6 flex w-full items-center justify-between">
                <div class="flex items-center justify-between w-full">
                  <div class="flex items-center">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light-with-button-svg9.svg"
                      alt="logo"
                    >
                    <p
                      tabindex="0"
                      class="focus:outline-none text-base md:text-2xl text-gray-800 ml-3"
                    >
                      The
                      North
                    </p>
                  </div>
                  <button
                    id="cross" aria-label="close menu"
                    class="focus:outline-none focus:ring-2 rounded-md text-gray-800"
                    onclick="sidebarHandler(false)"
                  >
                    <img
                      class="icon icon-tabler icon-tabler-x"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light-with-button-svg11.svg"
                      alt="cross"
                    >
                  </button>
                </div>
              </div>
              <ul class="f-m-m">
                <li>
                  <a class="cursor-pointer">
                    <div class="text-gray-800 pt-10">
                      <div class="flex items-center">
                        <div class="w-6 h-6 md:w-8 md:h-8 text-indigo-700">
                          <img
                            class="icon icon-tabler icon-tabler-grid"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light-with-button-svg12.svg"
                            alt="dashboard"
                          >
                        </div>
                        <p
                          tabindex="0"
                          class="focus:outline-none focus:text-indigo-600 text-indigo-700 xl:text-base text-base ml-3"
                        >
                          Dashboard</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a class="cursor-pointer">
                    <div class="text-gray-800 pt-8">
                      <div class="flex items-center justify-between">
                        <div class="flex items-center">
                          <div class="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                            <img
                              class="icon icon-tabler icon-tabler-puzzle"
                              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light-with-button-svg13.svg"
                              alt="products"
                            >
                          </div>
                          <p
                            tabindex="0"
                            class="focus:outline-none focus:text-indigo-600 text-gray-800 xl:text-base md:text-2xl text-base ml-3"
                          >
                            Products</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a class="cursor-pointer">
                    <div class="text-gray-800 pt-8">
                      <div class="flex items-center">
                        <div class="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                          <img
                            class="icon icon-tabler icon-tabler-compass"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light-with-button-svg14.svg"
                            alt="performance"
                          >
                        </div>
                        <p
                          tabindex="0"
                          class="focus:outline-none focus:text-indigo-600 text-gray-800 xl:text-base md:text-2xl text-base ml-3"
                        >
                          Performance</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="text-gray-800 pt-8 cursor-pointer">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <div class="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                        <img
                          class="icon icon-tabler icon-tabler-code"
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light-with-button-svg15.svg"
                          alt="deliverables"
                        >
                      </div>
                      <p
                        tabindex="0"
                        class="focus:outline-none focus:text-indigo-600 text-gray-800 xl:text-base md:text-2xl text-base ml-3"
                      >
                        Deliverables
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="w-full pt-4">
              <div class="flex justify-center mb-4 w-full">
                <div class="relative w-full">
                  <div class="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                    <img
                      class="icon icon-tabler icon-tabler-search"
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light-with-button-svg16.svg"
                      alt="search"
                    >
                  </div>
                  <input
                    class="focus:ring-2 focus:ring-gray-600 bg-gray-100 focus:outline-none rounded w-full text-sm text-gray-500 pl-10 py-2"
                    type="text" placeholder="Search"
                  >
                </div>
              </div>
              <div class="border-t border-gray-300">
                <div class="w-full flex items-center justify-between pt-1">
                  <div class="flex items-center">
                    <img
                      alt="profile-pic"
                      src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png"
                      tabindex="0" class="focus:outline-none  w-8 h-8 rounded-md"
                    >
                    <p
                      tabindex="0"
                      class="focus:outline-none text-gray-800 text-base leading-4 ml-2"
                    >
                      Jane Doe
                    </p>
                  </div>
                  <ul class="flex">
                    <li class="cursor-pointer text-gray-800 pt-5 pb-3">
                      <div
                        tabindex="0"
                        class="focus:outline-none focus:text-indigo-600 w-6 h-6 md:w-8 md:h-8"
                      >
                        <img
                          class="icon icon-tabler icon-tabler-messages"
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light-with-button-svg17.svg"
                          alt="chat"
                        >
                      </div>
                    </li>
                    <li class="cursor-pointer text-gray-800 pt-5 pb-3 pl-3">
                      <div
                        tabindex="0"
                        class="focus:outline-none focus:text-indigo-600 w-6 h-6 md:w-8 md:h-8"
                      >
                        <img
                          class="icon icon-tabler icon-tabler-bell"
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light-with-button-svg18.svg"
                          alt="bell"
                        >
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
