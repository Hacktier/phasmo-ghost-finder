import {Evidence} from "~/src/model/Evidence";
import GhostRepository from "~/src/repository/GhostRepository";

export default class PossibleGhosts {
    private realEvidence = new Set<Evidence>();
    private wrongEvidence = new Set<Evidence>();
    private ghostRepo = new GhostRepository()
    private ghosts = this.ghostRepo.ghosts;


    public constructor() {

    }

     private calculate(): void {
         // this.ghosts = this.ghostRepo.ghosts;
         console.log("new");
         console.log(this.ghostRepo.ghosts);
         console.log(this.realEvidence);

         if (this.realEvidence.size === 0 && this.wrongEvidence.size === 0) {
            // this.updateRealEvidence(this.ghosts);
        }

        for (let ghost of this.ghosts) {
            for (let real of this.realEvidence) {
                if (!ghost.evidence.has(real))
                    this.ghosts.delete(ghost)
            }

            for (let wrong of this.wrongEvidence) {
                if (ghost.evidence.has(wrong))
                    this.ghosts.delete(ghost)
            }
        }

        // this.updateRealEvidence(this.ghosts);
    }

    public addRealEvidence(evidence: Evidence) {
         if (this.realEvidence.has(evidence)) {
             this.realEvidence.delete(evidence)
         } else {
             this.realEvidence.add(evidence);
         }

        this.calculate();
    }

    public removeRealEvidence(evidence: Evidence) {
        this.realEvidence.delete(evidence);
        this.calculate();
    }

    public addWrongEvidence(evidence: Evidence) {
        this.wrongEvidence.add(evidence);
        this.calculate();
    }

    public removeWrongEvidence(evidence: Evidence) {
        this.wrongEvidence.delete(evidence);
        this.calculate();
    }
}