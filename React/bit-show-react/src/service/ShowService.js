import Show from "./../ent/Show";


class ShowService {
    showFetch() {
        return fetch("https://api.tvmaze.com/shows")
            .then(response => {
                return response.json()
            })
            .then(shows => {
                return shows.map((show) => {
                  return new Show(show.id, show.name, show.image);
               })
            })
    }

    fetchSingle(id){
        return fetch(`https://api.tvmaze.com/shows/${id}`)
        .then(response => {
            return response.json()
        })
        .then(show => {
              return new Show(show.id, show.name, show.image.medium, show.summary);
        })
    }

}

export const showService = new ShowService();
