import { writable } from 'svelte/store';

const initData = {
    name: "Yungas",
    role: "Desenvolvimento",
    avatar: "https://yungas.com.br/wp-content/uploads/2021/08/Yungas-Ilustras-para-LP-09.svg",
}
export const user = writable(initData);