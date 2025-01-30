<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { auth, provider, signInWithPopup } from '@/firebase';
import axios from 'axios';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const name = ref("");
const email = ref(""); 
const password = ref("");
const showPassword = ref(false);
const router = useRouter();

const togglePassword = () => {
    showPassword.value = !showPassword.value;
};

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

const register = async () => {
    try {
        const response = await axios.post("http://localhost:3000/api/register", {
            name: name.value,
            email: email.value,
            password: password.value,
        });

        if (response.status === 201) {
            showToast("註冊成功！", "success");
            router.push("/login");
            name.value = "";
            email.value = "";
            password.value = "";
        }
    } catch (err) {
        if (err.response) {
            const responseError = err.response.data;

            if (responseError.error) {
                showToast(responseError.error, "error");
            }
            
            else if (Array.isArray(responseError.errors)) {
                const errorMessages = responseError.errors
                    .map((error) => error.message) 
                    .join("\n"); 

                    showToast(errorMessages, "error");
            } else {
                showToast("註冊失敗，請再試一次", "error");
            }
        } else {
            showToast("無法連接到伺服器，請稍後再試。", "error");
        }
    }
};

const loginWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        
        const user = result.user;

        const idToken = await user.getIdToken();

        const response = await axios.post("http://localhost:3000/api/google-login", { idToken });

        if (response.status === 200) {
            showToast("登入成功！", "success");
            router.push("/home");
        }
    } catch (error) {
        console.error("Google 登入失敗:", error);
        showToast("登入失敗，請稍後再試。", "error");
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
            <form 
                action="" 
                class="flex flex-col items-center gap-y-8 w-full" 
            >
                <h4 class="text-[#5f6057]">會員註冊</h4>
                <input 
                    placeholder="姓名" 
                    type="text" 
                    name="name" 
                    class="w-full p-[5px] border rounded"
                    v-model="name" required
                />
                <input 
                    placeholder="電子郵件地址" 
                    type="email" 
                    name="email" 
                    class="w-full p-[5px] border rounded"
                    v-model="email" required
                />
                <div class="relative w-full">
                    <input
                        placeholder="密碼 8~20個字元"
                        :type="showPassword ? 'text' : 'password'"
                        name="password"
                        class="w-full p-[5px] pr-[40px] border rounded"
                        v-model="password" required
                    />
                    <button
                        type="button"
                        @click="togglePassword"
                        class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            height="1.5em"
                            width="1.5em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                            ></path>
                        </svg>
                    </button>
                </div>                
            <button 
            class="bg-[#b7afa2] rounded-[50px] pl-5 pr-5 pt-2 pb-2 w-full text-[white]"
            @click.prevent="register">
                    註冊
            </button>
            <button  
            class="bg-[#b7afa2] rounded-[50px] pl-5 pr-5 pt-2 pb-2 w-full text-[white] flex items-center justify-center"
            @click.prevent="loginWithGoogle">
                <img src="@/components/icons/google.png" alt="" class="w-[20px] h-[20px] mr-2">
                使用 Google 登入
            </button>
            <p class="text-[#5f6057]">已經有帳號？
                <router-link to="/login" class="text-[#2e2eca]">會員登入</router-link>
            </p>
            </form>
        </div>
    </div>
</template>