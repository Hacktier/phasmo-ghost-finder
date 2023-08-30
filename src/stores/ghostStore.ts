import { defineStore } from 'pinia';
import Ghosts from "~/src/model/Ghost";

export const useGhostStore = defineStore('possibleGhosts', () => {
    let possibleGhosts = ref(new Set<Ghosts>);
    let wrongGhosts = ref(new Set<Ghosts>);

    return {possibleGhosts, wrongGhosts};
});

