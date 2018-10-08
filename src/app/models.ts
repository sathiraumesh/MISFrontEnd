export class UserCredentials {

    constructor(public username: string, public password: string, public role: String) {

    }

}

export class User {
    constructor(public username: string, public password: string, public firstName: string, public lastName: string, public email: string, public role: String, public gender: string, public dateOfBirth: string, public telePhoneNumber: number, public nic: string, public _id?: any) { }
}

export class Drug {
    constructor(public drugId: number, public drugName: string, public dosage: string) { }
}

export class Students {
    constructor(public studentId: string, public studentName: String, public studentDOB: string, public studentAge: String) { }
}