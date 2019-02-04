
export class Quote {
    public showDescription:boolean;
    constructor(public id:number, public quote:string, public submittedBy:string, public author:string ,public upvote:number ,public downvote:number){
        this.showDescription=false

    }

}