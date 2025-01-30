<script setup>
import { reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Footer from '@/components/Footer.vue'


const items = reactive([
  {id: 'about', name: 'About', link:'https://kikka-hirado.com/about/'},
  {id: 'room', name: 'Room', link:'https://kikka-hirado.com/room/'},
  {id: 'facility', name: 'Facility', link:'https://kikka-hirado.com/facility/'},
  {id: 'journal', name: 'Journal', link:'https://kikka-hirado.com/journal/'},
  {id: 'news', name: 'News', link:'https://kikka-hirado.com/news/'},
  {id: 'access', name: 'Access', link:'https://kikka-hirado.com/access/'},
])

const mains = reactive([
  { id: 1, name: 'sea', img:'https://kikka-hirado.com/wp/wp-content/uploads/2024/09/hero_desktop5-scaled-1.jpg' },
  { id: 2, name: 'room', img:'https://kikka-hirado.com/wp/wp-content/uploads/2024/09/hero_desktop1-scaled-1.jpg' },
  { id: 3, name: 'spa', img:'https://kikka-hirado.com/wp/wp-content/uploads/2024/09/hero_desktop3-scaled-1.jpg' },
  { id: 4, name: 'hotel', img:'https://kikka-hirado.com/wp/wp-content/uploads/2024/09/hero_desktop2-scaled-1.jpg' },
  { id: 5, name: 'bath', img:'https://kikka-hirado.com/wp/wp-content/uploads/2024/09/hero_desktop4-scaled-1.jpg' },
])

const rooms = reactive([
  { id: 1, name: 'Superior Suite', link:'https://kikka-hirado.com/img/home/room/type5.webp' },
  { id: 2, name: 'Deluxe Room', link:'https://kikka-hirado.com/img/home/room/type3.webp' },
  { id: 3, name: 'Standard Room', link: 'https://kikka-hirado.com/img/home/room/type2.webp' },
  { id: 4, name: 'Deluxe Room', link:'https://kikka-hirado.com/img/home/room/type4.webp' },
  { id: 5, name: 'Standard Room', link: 'https://kikka-hirado.com/img/home/room/type1.webp' },
]);

const facilities = reactive([
  { id: 1, link: 'https://kikka-hirado.com/img/home/facility/restaurant/2.webp', name: 'Restaurant', text: '新鮮な魚介類や山の恵み、棚田米や潮風育ちの平戸牛など、自然とともに暮らしてきた平戸の恵みをふんだんに使ったお料理をお愉しみいただけます。', egtext: 'The restaurant presents a diverse menu with local Hirado specialties, including fresh seafood, mountain vegetables, and the distinctive sea breeze-raised Hirado beef.'  },
  { id: 2, link: 'https://kikka-hirado.com/img/home/facility/restaurant/3.webp', name: 'Sauna', text: 'プライベートサウナからは海景を眺めることができます。野外に水風呂とウッドデッキテラスを設え、広がる海と一体となるような開放感があるスペースです。', egtext: 'Enjoy a breathtaking view of the sea from our private sauna. The outdoor cold-water bath and wooden deck terrace provide a sense of openness that makes you feel at one with the expansive ocean.' },
  { id: 3, link: 'https://kikka-hirado.com/img/home/facility/restaurant/1.webp', name: 'Gallery Lounge', text: '宿泊者以外もご来館いただけるギャラリーラウンジでは、企画展、イベントなどの催しを予定しています。', egtext:'Our Gallery Lounge, which is open to both hotel guests and other visitors, serves as a venue for special exhibitions, events, and other activities.'}
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
    <header class="grid grid-cols-[1fr_165px_123px] pt-8">
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
        <button class="bg-white/30 opacity-80 rounded-[50px] pl-5 pr-5 pt-1 pb-1 w-[100%]">
          <a href="https://book.checkinn.jp/ab0db9d1bdeb45a86f69aa5d81d9bdb32be7c6044e95d726ebf658c3ff291a9b/pkg" target="_blank">
            <span class="text-[white]">Reserve / 予約 </span>
          </a>
        </button>
      </div>
      <button class="w-28 h-28 relative cursor-pointer">
        <span class="absolute top-[10px] left-0 w-6 h-[0.9px] bg-white"></span>
        <span class="absolute top-[20px] left-0 w-6 h-[0.9px] bg-white"></span>
      </button>
    </header>
    <main class="absolute -z-1 top-0 w-full">
      <section>
        <div class="relative h-screen w-full">
          <swiper 
            :slidesPerView="1"
            :spaceBetween="30"
            effect="fade"
            :loop="true"
            :autoplay="{ delay: 2500, disableOnInteraction: false }"
            :modules="[Autoplay, EffectFade]"
            class="mySwiper absolute top-0 left-0 w-screen h-full -z-10 overflow-hidden">            
            <swiper-slide v-for="main in mains" :key="main.id">
              <img :src="main.img" class="w-full h-full object-cover"/>
            </swiper-slide>
          </swiper>
          <img src="https://kikka-hirado.com/img/home/hero/lead_desktop.svg" alt="" class="absolute top-1/2 left-1/4 transform -translate-x-1/4 -translate-y-1/2 w-110 z-10">
          <img src="https://kikka-hirado.com/img/home/hero/logo.svg" alt="" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-82 z-10">
        </div>
      </section>
      <section class="relative">
        <img src="https://kikka-hirado.com/img/home/about/bg_about_pc.jpg" alt="" class="w-full h-full">
        <div class="writing-mode-vertical-rl text-upright text-white text-[1.5rem] tracking-[0.8rem]">
          <h3 class="absolute top-[25%] right-[16.7%] before-content hidden lg:block">
            熙霞
          </h3>
          <h3 class="absolute top-[25%] right-[25%] hidden lg:block">
            西洋を迎えた海が
          </h3>
          <h3 class="absolute top-[36%] right-[32%] hidden lg:block">
            広げてくれる余暇
          </h3>
        </div>
        <div class="text-white text-[0.4rem] flex flex-col items-center">
          <p class="absolute top-[25%] left-[50%] -translate-x-1/2 leading-[1.7rem] font-thin lg:left-[15%] lg:translate-x-0"> 
            古くから日本と異国が交差し、文化を紡いできた長崎県平戸の地。<br>
            Kikka Hirado（熙霞） は、平戸の歴史や文化、自然、食にふれて、<br>
            ゆっくりと心と感性をひらき、余暇の楽しみを広げてもらいたいという <br>
            思いからつくられた5部屋だけの小さなリトリートホテルです。
          </p>
          <p class="absolute top-[50%] left-[50%] -translate-x-1/2 leading-[1.7rem] font-thin lg:left-[15%] lg:translate-x-0">
            Kikka Hirado is an independently run retreat hotel <br>
            featuring just five rooms, each creating an atmosphere <br>
            that invites you to relax and indulge your senses. <br>
            Experience the blend of Western and Japanese history <br>
            and culture, along with the rich natural beauty of Hirado.
          </p>
          <a href="" class="absolute top-[75%] left-[15%] font-thin more flex items-center gap-20">
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
        <ul class="grid grid-cols-1 gap-y-[79px]">
          <li v-for="facility in facilities" :key="facility.id" class="mx-auto pb-0 w-[82.0833333333%] grid grid-cols-[42.4703891709%_1fr] gap-[7.5296108291%] items-start">
            <img :src="facility.link" alt="" class="w-[390px] h-[264px]">
            <div class="pt-[20px]">
              <h4 class="facility-text pb-[21px] text-[18px] tracking-[0.03em] leading-[1.5] font-medium font-sans font-inter [font-feature-settings:'palt'] relative text-[#928572]">{{ facility.name }}</h4>
              <p class="tracking-[0.16em] text-left pt-[40px] pb-[22px] text-[16px] text-[#928572]">{{ facility.text }}</p>
              <p class="text-[16px] tracking-[0.05em] leading-[2] font-sans font-inter text-[#928572] [font-variation-settings:'wght'_453]">{{ facility.egtext }}</p>
              <div class="ml-[auto] mt-[46px] w-[130px] h-[32px]">
                <a href="" class="pb-[4px] relative flex w-[100%] h-[100%] items-center justify-between overflow-hidden more-2">
                  <p class="text-[14px] tracking-[0.48px] leading-[1.2] text-[#928572]">More</p>
                  <i class="fa-solid fa-angle-right text-[#928572]"></i>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section class="bg-[#f1f0ed] pt-[126px] pb-[100px] flex flex-col items-center relative">
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
          class="mySwiper mt-[200px]"
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
      <section class="bg-[#f1f0ed] pt-[160px] pb-[205px] flex flex-col items-center relative">
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
      <Footer/>
    </main>
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

.more::before{
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
  height: 100%;
  border-bottom: 0.5px solid #a09483;
}

.facility-text::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #ceccc3;
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

.autoplay-progress {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: center;
}

.autoplay-progress circle {
  stroke: #fff;
  stroke-dasharray: 125.6;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  transition: stroke-dashoffset 0.25s linear;
}
</style>

