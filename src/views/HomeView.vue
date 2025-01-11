<script setup>
import { reactive } from 'vue'
const items = reactive([
  {id: 'about', name: 'About', link:'https://kikka-hirado.com/about/'},
  {id: 'room', name: 'Room', link:'https://kikka-hirado.com/room/'},
  {id: 'facility', name: 'Facility', link:'https://kikka-hirado.com/facility/'},
  {id: 'journal', name: 'Journal', link:'https://kikka-hirado.com/journal/'},
  {id: 'news', name: 'News', link:'https://kikka-hirado.com/news/'},
  {id: 'access', name: 'Access', link:'https://kikka-hirado.com/access/'},
])

</script>

<template>
  <div class="relative">
    <header class="grid grid-cols-[1fr_165px_123px_28px] pt-8">
      <div class="pr-40 pl-37 gap-26">
        <nav>
          <ul class="grid grid-cols-[repeat(6,min-content)] gap-18 h-20 text-white">
            <li v-for=" item in items" :key="item.id">
              <a :href="item.link"> {{ item.name }} </a> 
            </li>
          </ul>
        </nav>
      </div>
      <div class="min-w-[165px] grid items-start justify-center overflow-hidden">
        <a href="https://kikka-hirado.com/news/%e3%81%8a%e3%81%b2%e3%81%a8%e3%82%8a%e6%a7%98%e3%83%97%e3%83%a9%e3%83%b3%e3%82%92%e9%96%8b%e5%a7%8b%e3%81%97%e3%81%be%e3%81%97%e3%81%9f%e3%80%82/" 
        class="grid grid-cols-[17px_1fr] gap-10 items-start justify-center no-underline text-inherit bg-transparent">
          <img src="https://kikka-hirado.com/img/common/header/icon_info.svg" alt="" class="w-17">
          <div>
            <p></p>
          </div>
        </a>
      </div>
      <div>
        <a href=""></a>
        <span></span>
        <span></span>
      </div>
      <button>
        <span></span>
        <span></span>
      </button>
    </header>
    <main class="absolute -z-1 top-0 w-full">
      <div>
        <div class="relative h-screen">
          <img src="https://kikka-hirado.com/wp/wp-content/uploads/2024/09/hero_desktop5-scaled-1.jpg" alt="" class="w-full h-full object-cover">
          <img src="https://kikka-hirado.com/img/home/hero/lead_desktop.svg" alt="" class="absolute top-1/2 left-1/4 transform -translate-x-1/4 -translate-y-1/2 w-110">
          <img src="https://kikka-hirado.com/img/home/hero/logo.svg" alt="" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-82">
        </div>
      </div>
      <div class="h-screen">
        <img src="https://kikka-hirado.com/img/home/about/bg_about_pc.jpg" alt="" class="w-full h-full object-cover">
      </div>
    </main>
    <footer>

    </footer>
  </div>
</template>

<style scoped>
.swiper {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
    display: block;
    height: 100%;
}

.swiper-horizontal {
    touch-action: pan-y;
}
</style>

