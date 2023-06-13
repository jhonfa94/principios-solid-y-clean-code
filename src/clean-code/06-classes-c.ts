(() => {

    // Aplicando el principoio de responsabilidad única.
    // Priorizar la composición frente a la herencia. 

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
        email: string;
        role: string;
    }

    class User {
        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor(
            { email, role }: UserProps
        ) {
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        workingDirectory: string;
        lasOpenFolder: string;
    }

    class Settings {
        public workingDirectory: string;
        public lasOpenFolder: string;
        constructor({ workingDirectory, lasOpenFolder }: SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lasOpenFolder = lasOpenFolder;
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

    //Clase de composición
    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor(
            { workingDirectory, lasOpenFolder, email, role, name, gender, birthdate }: UserSettingsProps
        ) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ workingDirectory, lasOpenFolder });
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

    userSettings.user.checkCredentials();

    console.log({ userSettings })

})()