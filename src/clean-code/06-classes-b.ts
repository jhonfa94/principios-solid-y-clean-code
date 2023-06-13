(() => {

    // No apliando el principio de responsabilidad unica
    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;
        }
    }

    interface UserProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        lastAccess: Date;
        name: string;
        role: string;
    }

    class User extends Person {
        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor(
            { email, role, lastAccess, name, gender, birthdate }: UserProps
        ) {
            super({ name, gender, birthdate });
            this.birthdate = new Date();
            this.email = email;
            this.role = role;
            this.lastAccess = lastAccess;
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string;
        lasOpenFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
        lastAccess: Date;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lasOpenFolder: string;
        constructor({ workingDirectory, lasOpenFolder, email, role, name, gender, birthdate, lastAccess }: UserSettingsProps) {
            super({ email, role, birthdate, name, gender, lastAccess });
            this.workingDirectory = workingDirectory;
            this.lasOpenFolder = lasOpenFolder;
        }
    }

    const userSettings = new UserSettings(
        {
            birthdate: new Date('1985-10-21'),
            email: 'jhonfa@google.com',
            gender: 'M',
            lastAccess: new Date('2023-04-06'),
            lasOpenFolder: 'downloads',
            name: 'Jhon Fabio',
            role: 'Developer',
            workingDirectory: '/user/jhonfa'
        }
    );

    userSettings.checkCredentials()
    console.log(userSettings)


})()