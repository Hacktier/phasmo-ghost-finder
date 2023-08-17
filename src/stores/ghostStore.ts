import { defineStore } from 'pinia'
import Ghosts from "~/src/components/ghosts.vue";

export const useGhostStore = defineStore('possibleGhosts', () => {
    let possibleGhosts = new Set<Ghosts>;

    function setPossibleGhosts(ghosts: Set<Ghosts>) {
        possibleGhosts = ghosts;
    }

    return {possibleGhosts, setPossibleGhosts};
});

