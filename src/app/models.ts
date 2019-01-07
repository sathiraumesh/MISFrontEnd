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
    constructor(public studentRegistrationNumber: string, public studentName: String, public studentDOB: string, public studentAge: String, public gender: string, public studentFaculty: string, public marritalStatus: string, public studentNationality: string, public studentPositionOfFamily: number, public studentAddress: string, public studentTermAddress: string, public studentParentGuardian: string, public studentBoardingRelative: string, public studentAmountPaid: number, public studentOccupationFather: string, public studentOccupationMother: string, public studentBursary: string, public studentSchool: string, public gamesPlayed: string ) { }
}