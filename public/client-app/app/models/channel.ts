import {Comment} from "./comment";
export class Channel{
    constructor(
        public id = "",
        public name: string,
        public url : string,
        public comments : Array<Comment>
    ){}
}