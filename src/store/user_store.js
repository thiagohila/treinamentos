import { writable } from 'svelte/store';

const initData = {
    name: "Yungas",
    role: "Desenvolvimento",
    avatar: "/images/default_profile.png",
}
export const user = writable(initData);