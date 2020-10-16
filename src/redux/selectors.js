const allTypeSelector = state => (
    state.map(item => item)
)

const movieTypeSelector = state => (
    state.filter(item => {
        if(item.Type === "movie") return item
    })
)

const seriesTypeSelector = state => (
    state.filter(item => {
        if(item.Type === "series") return item
    })
)

const episodeTypeSelector = state => (
    state.filter(item => {
        if(item.Type === "episode") return item
    })
)

const sortByYearAsc = items => (
    items.sort((x, y) => Number(x.Year.substring(0,4)) - Number(y.Year.substring(0,4)))
)

const sortByYearDes = items => (
    items.sort((x, y) => Number(y.Year.substring(0,4)) - Number(x.Year.substring(0,4)))
)

const sortByRatingDes = items => (
    items.sort((x, y) => Number(y.rating) - Number(x.rating))
)

const sortByRatingAsc = items => (
    items.sort((x, y) => Number(x.rating) - Number(y.rating))
)

const sortByNameAZ = items => (
    items.sort((x, y) => {
        if (x.Title < y.Title) return -1;
        else if (x.Title > y.Title) return 1;
        else return 0;
    })
)

const sortByNameZA = items => (
    items.sort((x, y) => {
        if (x.Title < y.Title) return 1;
        else if (x.Title > y.Title) return -1;
        else return 0;
    })
)

const wannasee = items => (
    items.filter(item => {
        if(item.wannaSee) return item
    })
)

const watched = items => (
    items.filter(item => {
        if(item.rating) return item
    })
)


export {
    allTypeSelector, movieTypeSelector, seriesTypeSelector, episodeTypeSelector,
    wannasee, watched, sortByRatingAsc, sortByRatingDes, sortByYearAsc, sortByYearDes,
    sortByNameAZ, sortByNameZA
}