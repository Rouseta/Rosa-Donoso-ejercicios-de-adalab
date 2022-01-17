// Fichero src/services/api.js
const callToApi = (searchName) => {

    return fetch(`https://api.tvmaze.com/search/shows?q=${searchName}`)
        .then(response => response.json())
        .then(response => {

            const result = response.show.map(character => {
                return {
                    name: character.show.name
                };
            });

            return result;
        });
};
;

export default callToApi;