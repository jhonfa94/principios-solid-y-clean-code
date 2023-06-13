(() => {

    // No apliando el principio de responsabilidad unica

    type Gender = 'M' | 'F';
    class Person {

        constructor(
            public name: string,
            public genger: Gender,
            public birthdate: Date) {
        }
    }
    // const newPerson = new Person('Fernando', 'M', new Date('19985-10-21'))
    // console.log(newPerson);
    class User extends Person {
        constructor(
            public email: string,
            public role: string,
            public lastAccess: Date,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(name, gender, birthdate);
            this.birthdate = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lasOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date

        ) {
            super(email, role, birthdate, name, gender, birthdate)
        }
    }

    const userSettings = new UserSettings(
        '/user/jhonfa',
        'downloads',
        'jhonfa@google.com',
        'Developer',
        'Jhon Fabio',
        'M',
        new Date('19985-10-21')
    );

    console.log(userSettings)


})()