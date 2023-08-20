import { defineStore } from 'pinia'
import Ghosts from "~/src/components/ghosts.vue";

export const useGhostStore = defineStore('possibleGhosts', () => {
    let possibleGhosts = new Set<Ghosts>;
    let wrongGhosts = new Set<Ghosts>

    function setPossibleGhosts(ghosts: Set<Ghosts>) {
        possibleGhosts = ghosts;
    }

    function setWrongGhosts(ghosts: Set<Ghosts>) {
        wrongGhosts = ghosts;
    }

    return {possibleGhosts, setPossibleGhosts, wrongGhosts, setWrongGhosts};
});

