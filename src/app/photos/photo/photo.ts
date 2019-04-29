export interface Photo{

    id:number,
    description:string,
    url:string,
    postDate:Date,
    allowComments:boolean,
    likes:number,
    comments:number,
    userId:number
}