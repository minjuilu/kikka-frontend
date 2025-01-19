<script setup>
import { reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const items = reactive([
  {id: 'about', name: 'About', link:'https://kikka-hirado.com/about/'},
  {id: 'room', name: 'Room', link:'https://kikka-hirado.com/room/'},
  {id: 'facility', name: 'Facility', link:'https://kikka-hirado.com/facility/'},
  {id: 'journal', name: 'Journal', link:'https://kikka-hirado.com/journal/'},
  {id: 'news', name: 'News', link:'https://kikka-hirado.com/news/'},
  {id: 'access', name: 'Access', link:'https://kikka-hirado.com/access/'},
])

const rooms = reactive([
  { id: 1, name: 'Superior Suite', link:'https://kikka-hirado.com/img/home/room/type5.webp' },
  { id: 2, name: 'Deluxe Room', link:'https://kikka-hirado.com/img/home/room/type3.webp' },
  { id: 3, name: 'Standard Room', link: 'https://kikka-hirado.com/img/home/room/type2.webp' },
  { id: 4, name: 'Deluxe Room', link:'https://kikka-hirado.com/img/home/room/type4.webp' },
  { id: 5, name: 'Standard Room', link: 'https://kikka-hirado.com/img/home/room/type1.webp' },
]);

const images = reactive([
  { id: 1, link: 'https://kikka-hirado.com/img/home/facility/restaurant/2.webp' },
  { id: 2, link: 'https://kikka-hirado.com/img/home/facility/restaurant/3.webp' },
  { id: 3, link: 'https://kikka-hirado.com/img/home/facility/restaurant/1.webp' }
]);

const journals = reactive([
  { id: 1, name: 'YAMABE KAJUEN / junero', text: 'Junero by Yamabe Kajuen', link:'https://kikka-hirado.com/wp/wp-content/uploads/2024/09/jounal_thumb-2.jpg' },
  { id: 2, name: '三川内焼、平戸松山窯', text: 'Hiradoshozan Kiln', link:'https://kikka-hirado.com/wp/wp-content/uploads/2024/09/jounal_thumb-1.jpg' },
  { id: 3, name: '福田酒造', text: 'Fukuda Brewery', link: 'https://kikka-hirado.com/wp/wp-content/uploads/2024/09/jounal_thumb-7.jpg' },
  { id: 4, name: '長崎慈眼堂', text: 'Nagasaki Jigendo', link:'https://kikka-hirado.com/wp/wp-content/uploads/2024/09/jounal_thumb-8.jpg' },
  { id: 5, name: '三川内焼、平戸松山窯', text: 'Hiradoshozan Kiln', link: 'https://kikka-hirado.com/wp/wp-content/uploads/2024/09/jounal_thumb-5.jpg' },
  { id: 6, name: 'YAMABE KAJUEN / junero', text: 'Junero by Yamabe Kajuen', link:'https://kikka-hirado.com/wp/wp-content/uploads/2024/09/jounal_thumb-6.jpg' },
  { id: 7, name: '福田酒造', text: 'Fukuda Brewery', link: 'https://kikka-hirado.com/wp/wp-content/uploads/2024/09/jounal_thumb-3.jpg' },
  { id: 8, name: '長崎慈眼堂', text: 'Nagasaki Jigendo', link: 'https://kikka-hirado.com/wp/wp-content/uploads/2024/09/jounal_thumb-4.jpg' },
]);

const newses = reactive([
  { id: 1, date: '2025.1.9', title: '🎹ピアノとヴァイオリンの生演奏をお楽しみいただけます🎹', text: '🎹You can enjoy live piano and violin performances.🎹', link: '' },
  { id: 2, date: '2024.12.17', title: '「坐禅体験」で心を整える朝を', text: 'New Service Announcement: Start Your Morning with Zen Meditation', link: '' },
  { id: 3, date: '2024.11.22', title: 'おひとり様プランを開始しました。', text: 'We have started a one-person plan.', link: '' },
]);

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
      <section>
        <div class="relative h-screen">
          <img src="https://kikka-hirado.com/wp/wp-content/uploads/2024/09/hero_desktop5-scaled-1.jpg" alt="" class="w-full h-full object-cover">
          <img src="https://kikka-hirado.com/img/home/hero/lead_desktop.svg" alt="" class="absolute top-1/2 left-1/4 transform -translate-x-1/4 -translate-y-1/2 w-110">
          <img src="https://kikka-hirado.com/img/home/hero/logo.svg" alt="" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-82">
        </div>
      </section>
      <section class="relative">
        <img src="https://kikka-hirado.com/img/home/about/bg_about_pc.jpg" alt="" class="w-full h-full">
        <div class="writing-mode-vertical-rl text-upright text-white text-[1.5rem] tracking-[0.8rem]">
          <h3 class="absolute top-[25%] right-[16.7%] before-content">
            熙霞
          </h3>
          <h3 class="absolute top-[25%] right-[25%]">
            西洋を迎えた海が
          </h3>
          <h3 class="absolute top-[36%] right-[32%]">
            広げてくれる余暇
          </h3>
        </div>
        <div class="text-white text-[0.4rem]">
          <p class="absolute top-[25%] left-[15%] leading-[1.7rem] font-thin"> 
            古くから日本と異国が交差し、文化を紡いできた長崎県平戸の地。<br>
            Kikka Hirado（熙霞） は、平戸の歴史や文化、自然、食にふれて、<br>
            ゆっくりと心と感性をひらき、余暇の楽しみを広げてもらいたいという <br>
            思いからつくられた5部屋だけの小さなリトリートホテルです。
          </p>
          <p class="absolute top-[50%] left-[15%] leading-[1.7rem] font-thin">
            Kikka Hirado is an independently run retreat hotel <br>
            featuring just five rooms, each creating an atmosphere <br>
            that invites you to relax and indulge your senses. <br>
            Experience the blend of Western and Japanese history <br>
            and culture, along with the rich natural beauty of Hirado.
          </p>
          <a href="" class="absolute top-[75%] left-[15%] font-thin more-before flex items-center gap-20">
            <p>More</p>
            <i class="fa-solid fa-angle-right"></i>
          </a>
        </div>
      </section>
      <section class="bg-[#f1f0ed] pt-[200px] pb-[100px] flex flex-col items-center relative">
        <h3 class="text-[#928572] mb-[60px] room relative flex flex-col items-center">Room</h3>
        <p class="text-[#b1a899] mb-[10px] mt-[30px]">余暇の楽しみを広げてくれる5部屋の客室には全て海を見渡せる大きな窓があります。</p>
        <p class="text-[#b1a899] mt-[10px]">Each of our five comfortable suite rooms boasts large windows offering expansive ocean views.</p>
        <a href="" class="absolute top-[40%] left-[50%] transform -translate-x-[50%] more-2 flex items-center gap-20">
          <p class="text-[#928572]">More</p>
          <i class="fa-solid fa-angle-right text-[#928572]"></i> 
        </a>
        <swiper 
          :slidesPerView="3"
          :spaceBetween="30"
          :loop="true"
          :autoplay="{ delay: 2000, disableOnInteraction: false }"
          :modules="[Autoplay]"
          class="mySwiper mt-[200px]"
        >
          <swiper-slide v-for="room in rooms" :key="room.id" class="slide">
            <a href="">
              <img :src="room.link" :alt="room.name">
            </a>
          </swiper-slide>
        </swiper>
      </section>
      <section class="bg-[#f1f0ed] pt-[100px] pb-[100px] flex flex-col items-center relative">
        <h3 class="text-[#928572] mb-[60px] room relative flex flex-col items-center">Facility</h3>
        <ul>
          <li>
            <swiper
            :spaceBetween="30"
            :pagination="{
              clickable: true,
            }"
            :modules="[Pagination]"
            class="mySwiper"            
            >
              <swiper-wrapper>
                <swiper-slide v-for="img in images" :key="img.id">
                    <img :src="img.link" :alt="img.name" width="390" height="264" loading="lazy">
                </swiper-slide>
              </swiper-wrapper>

              <div class="swiper-pagination"></div>
            </swiper>
          </li>
        </ul>
      </section>
      <section class="bg-[#f1f0ed] pt-[200px] pb-[100px] flex flex-col items-center relative">
        <h3 class="text-[#928572] mb-[60px] room relative flex flex-col items-center">Journal</h3>
        <p class="text-[#b1a899] mb-[10px] mt-[30px]">平戸の歴史や文化、自然、食にふれて、ゆっくり心と感性をひらき、余暇の楽しみを広げる</p>
        <p class="text-[#b1a899] mt-[10px]">Experience Hirado's history, culture, nature, and food, and enjoy <br>
          a leisurely time where you can expand your mind and senses.</p>
        <a href="" class="absolute top-[40%] left-[50%] transform -translate-x-[50%] more-2 flex items-center gap-20">
          <p class="text-[#928572]">More</p>
          <i class="fa-solid fa-angle-right text-[#928572]"></i> 
        </a>
        <swiper 
          :slidesPerView="4"
          :spaceBetween="30"
          :loop="true"
          :autoplay="{ delay: 2000, disableOnInteraction: false }"
          :modules="[Autoplay]"
          class="mySwiper mt-[150px]"
        >
          <swiper-slide v-for="journal in journals" :key="journal.id" class="slide">
            <a href="" class="flex flex-col items-center text-[#a69b8b]">
              <img :src="journal.link" :alt="journal.name">
              <p class="mt-[20px]">{{ journal.name }}</p>
              <p class="mt-[5px]">{{ journal.text }}</p>
            </a>
          </swiper-slide>
        </swiper>
      </section>
      <section class="bg-[#f1f0ed] pt-[200px] pb-[100px] flex flex-col items-center relative">
        <h3 class="text-[#928572] mb-[60px] room relative flex flex-col items-center">News</h3>
        <ul>
          <li>
            <a 
            :href="news.link" 
            v-for="(news, index) in newses" 
            :key="news.id" 
            class="flex items-center text-[#bcb5a9] pb-[50px] pt-[50px] relative news"
            :class="{ 'news-last': index === newses.length - 1 }">
              <time datetime="" class="ml-[30px]">{{ news.date }}</time>
              <div class="flex flex-col ml-[75px] mr-[30px]">
                <p>{{ news.title }}</p>
                <p>{{ news.text }}</p>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </main>
    <footer>

    </footer>
  </div>
</template>

<style scoped>
.before-content::before {
  content: "";
  position: absolute;
  top: 0;
  left: -10px;
  width: 100%;
  height: 90%;
  border-left: 1px solid #fff;
}

.before-content::after {
  content: "きっか";
  position: absolute;
  top: 0;
  height: 100%;
  right: -20px;
  font-size: 4px;
  white-space: nowrap;
  letter-spacing: 5.5px;
}

.more-before::before{
  content: "";
  position: absolute;
  width: 100%;
  height: 120%;
  border-bottom: 0.5px solid #fff;
}

.room::after {
  content: "";
  position: absolute;
  top: 60px;
  width: 40%;
  border-bottom: 1px solid #928572;
}

.more-2::before{
  content: "";
  position: absolute;
  width: 100%;
  height: 120%;
  border-bottom: 0.5px solid #928572;
}

.mySwiper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.slide {
  background: #f1f0ed;
  display: flex;
  width: 360px;
}

.slide img {
  display: block;
  width: 100%;  
  height: 100%;
  object-fit: cover;
}

.news::before{
  content: "";
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  border-top: 1px solid #d8d6cf;
}

.news-last::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #d8d6cf;
}
</style>

