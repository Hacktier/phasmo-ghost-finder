import {name} from "ci-info";

export default class CursedPossesion {
    public name: string;
    public description: string;


    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}