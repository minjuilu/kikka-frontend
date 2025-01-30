<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { auth, sendPasswordResetEmail } from "@/firebase";
import Toastify from "toastify-js";

const email = ref(""); 
const router = useRouter();

const showToast = (message, type = "success") => {
    Toastify({
        text: message,
        duration: 2000, 
        close: true, 
        gravity: "top", 
        position: "center", 
        style: {
            background: type === "success" 
                ? "linear-gradient(to right, #00b09b, #96c93d)" 
                : "linear-gradient(to right, #FF5F6D, #FFC371)"
        },    
    }).showToast();
};

const resetPassword = async () => {
    if (!email.value.trim()) {
        showToast("請輸入您的電子郵件", "error");
        return;
    }

    try {
        await sendPasswordResetEmail(auth, email.value.trim());
        showToast("重置密碼郵件已發送，請檢查您的信箱！", "success");
        router.push("/login");  
    } catch (error) {
        switch (error.code) {
            case "auth/user-not-found":
                showToast("電子郵件不存在，請確認輸入是否正確。", "error");
                break;
            case "auth/invalid-email":
                showToast("請輸入有效的電子郵件地址。", "error");
                break;
            case "auth/too-many-requests":
                showToast("請稍後再試。", "error");
                break;
            default:
                showToast("發送失敗，請稍後再試。", "error");
        }
    }
};
</script>

<template>
    <div class="w-full h-screen relative">
        <img src="https://kikka-hirado.com/wp/wp-content/uploads/2024/09/hero_desktop2-scaled-1.jpg" alt="" class="w-full h-full overflow-hidden">
    </div>
    <div class="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-[35%] bg-white/70 p-[64px]">
        <div class="flex flex-col items-center">
            <img src="@/components/icons/kikka-logo.png" alt="" class="w-[360px] h-[80px]">
            <form action="" class="flex flex-col items-center gap-y-8 w-full">
                <h4 class="text-[#5f6057]">密碼重設</h4>
                <p class="text-[#5f6057]"> 請輸入您的電子郵件地址</p>
                <input 
                    placeholder="電子郵件地址" 
                    type="email" 
                    name="email" 
                    class="w-full p-[5px] border rounded"
                    v-model="email"
                    required
                />
            <div class="flex items-center gap-y-4 w-full gap-x-10">
                <router-link to="/login" class="bg-[#b7afa2] rounded-[50px] pl-5 pr-5 pt-2 pb-2 w-full text-[white] flex items-center justify-center">
                    返回
                </router-link>
                <button 
                @click.prevent="resetPassword"
                class="bg-[#928572] rounded-[50px] pl-5 pr-5 pt-2 pb-2 w-full text-[white]">
                    修改
                </button>
            </div>
            </form>
        </div>
    </div>
</template>