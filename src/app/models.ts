export class UserCredentials {

    constructor(public username: string, public password: string,public role:number) {

    }

}

export class User{
    constructor(public username:string,public password:string,public firstName:string,public lastName:string,public email:string, public role:number,public gender:string, public dateOfBirth:string,public telePhoneNumber:number,public nic:string,public _id?:any){}
}