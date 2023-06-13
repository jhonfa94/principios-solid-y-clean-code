(() => {

    function getMovieById(id: string) {
        console.log({ id });
    }

    function getMovieCastById(id: string) {
        console.log({ id });
    }

    function getActorBioById(id: string) {
        console.log({ id });
    }

    interface Movie {
        cast: string[]
        description: string,
        rating: number,
        title: string,
    }
    function movie({ cast, description, rating, title }: Movie) {
        console.log({ title, description, rating, cast });
    }

    function createActor(fullName: string, birthdate: Date): boolean {

        if (fullName === 'fernando') return false;

        console.log('Crear actor', birthdate);
        return true;

    }


    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

        if (isDead) return 1500;

        if (isSeparated) return 2500;

        return isRetired ? 3000 : 4000;

    }



})();
