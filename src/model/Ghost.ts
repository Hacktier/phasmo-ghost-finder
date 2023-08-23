import {Evidence} from "~/src/model/Evidence";

export default class Ghost {
    public name: string;
    public evidence: Set<Evidence>
    public huntSanity: string[];
    public ability: string;
    public strength: string;
    public weakness: string
    public test: string;

    constructor(name: string, evidence: Set<Evidence>, huntSanity: string[], ability: string, strength: string, weakness: string, test: string) {
        this.name = name;
        this.evidence = evidence;
        this.huntSanity = huntSanity;
        this.ability = ability;
        this.strength = strength;
        this.weakness = weakness;
        this.test = test;
    }
}
