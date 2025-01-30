<script setup>
import {reactive} from 'vue';

const items = reactive([
    {id: 1, name: 'About', link:''},
    {id: 2, name: 'Room', link:''},
    {id: 3, name: 'Facility', link:''},
    {id: 4, name: 'Journal', link:''},
    {id: 5, name: 'News', link:''},
    {id: 6, name: 'Access', link:''},
])

const subitems = reactive([
    {id: 1, name: 'Company', link:''},
    {id: 2, name: 'FAQ', link:''},
    {id: 3, name: 'Recruit', link:''},
    {id: 4, name: 'Policy', link:''},
])

</script>

<template>
    <div class="bg-[#e2e1da] pt-[108px] pb-[106px] flex text-[#928572] justify-around">
        <div class="flex gap-[64px]">
            <a href="">
                <img src="https://kikka-hirado.com/img/common/footer/logo.svg" alt="Kikka Hiradoのロゴ" class="w-[60px] h-[120px]">
            </a>
            <div class="tracking-[0.1em] leading-[2]">
                <p>
                    〒859-5122 
                    <br> <a href="https://maps.app.goo.gl/7m8miLesZZX7YFwA6" target="_blank">長崎県平戸市明の川内町字梅屋敷323番2</a>
                </p>
                <p class="mt-[20px]">
                    <a href="tel:0950-22-7056">
                        <span class="pr-[10px]">Tel</span>
                        <span>0950-22-7056</span>
                    </a>
                </p>
                <p class="mt-[20px]">
                    <a href="mailto:info@kikka-hirado.com">
                        <span class="pr-[10px]">Mail info</span>
                        <span>@kikka-hirado.com</span>
                    </a>
                </p>
                <div class="mt-[20px]">
                    <a href="https://maps.app.goo.gl/7m8miLesZZX7YFwA6" target="_blank" class="flex">
                        <img src="https://kikka-hirado.com/img/common/footer/icon_map.svg" width="16" height="23" alt="マップアイコン" loading="lazy">
                        <span class="pl-[6px]">Google Map</span>
                    </a>
                </div>
            </div>
        </div>
        <div>
            <div class="flex items-center justify-end">
                <a href="https://www.facebook.com/people/KikkaHirado/61555692684741/" target="_blank">
                    <img src="https://kikka-hirado.com/img/common/icon_facebook.svg" alt="facebook" loading="lazy" class="w-[54px] h-[54px]">
                </a>
                <a href="https://www.instagram.com/kikka_hirado/" target="_blank">
                    <img src="https://kikka-hirado.com/img/common/icon_instagram.svg" alt="Instagram" loading="lazy" class="w-[54px] h-[54px]">
                </a>
                <div class="ml-[26px]">
                    <button class="bg-[#928572] rounded-[50px] pl-5 pr-5 pt-1 pb-1">
                        <a href="https://book.checkinn.jp/ab0db9d1bdeb45a86f69aa5d81d9bdb32be7c6044e95d726ebf658c3ff291a9b/pkg" target="_blank">
                            <span class="text-[white]">Reserve / 予約 </span>
                        </a>
                    </button>
                </div>
            </div>
            <div class="flex justify-end items-center gap-[14px] mt-[39px]">
                <ul v-for= "item in items" :key="item.id">
                    <li>
                        <a :href="item.link">{{ item.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="flex justify-end items-center gap-[14px] mt-[24px]">
                <ul v-for= "subitem in subitems" :key="subitem.id">
                    <li>
                        <a :href="subitem.link">{{ subitem.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="flex justify-end mt-[30px]">
                <small class="copyright">© 2025 Kikka Hirado</small>
            </div>
        </div>            
    </div>
</template>
