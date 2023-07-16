import genreData from "../data/genre-data"

export interface Genre{
    id : number;
    name : string;
    slug : string;
    games_count : number;
    image_background : string;
}


const useGanere = () => {
    return { data : genreData,
    loading : false};
}

export default useGanere;