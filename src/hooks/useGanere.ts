import useData from "./useData";

export interface Genres{
    id : number;
    name : string;
    slug : string;
    games_count : string;
    image_background : string;
}


const useGanere = () => {
    return useData<Genres>('/genres');
}

export default useGanere;