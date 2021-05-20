export interface User{
    id:number;
    email:string;
    name:string;
    profilePicUrl:string;
    address:{
        street:string;
        area:string;
        city:string;
    };
    profession:string;
    mobileNo:string;
}