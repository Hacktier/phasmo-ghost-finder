import { defineStore } from 'pinia'
import Ghosts from "~/src/components/ghosts.vue";

export const useGhostStore = defineStore('possibleGhosts', () => {
    let possibleGhosts = new Set<typeof Ghosts>;
    let wrongGhosts = new Set<typeof Ghosts>

    function setPossibleGhosts(ghosts: Set<typeof Ghosts>) {
        possibleGhosts = ghosts;
    }

    function setWrongGhosts(ghosts: Set<typeof Ghosts>) {
        wrongGhosts = ghosts;
    }

    return {possibleGhosts, setPossibleGhosts, wrongGhosts, setWrongGhosts};
});

