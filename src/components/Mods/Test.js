import React, {useState} from "react";
import {useLocation} from "react-router-dom";

// const useQuery = () => new URLSearchParams(useLocation().search)
const obj = {
    title: "Titanic",
    time: 120,
    origin: "USA",
};
const Test = () => {
    // const query = useQuery();
    const [movie, setMovie] = useState(obj);
    const funk = () => {
        setMovie({...movie, rating: 5, wannaSee: false});
    }
    return (
        <div>
            {/* {query.get("search")} */}
            <button onClick={funk}>KILK ME</button>
        <p>{`${movie.title} ${movie.time} ${movie.rating}`}</p>
        </div>
    )
}

export default Test;