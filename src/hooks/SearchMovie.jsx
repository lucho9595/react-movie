import axios from 'axios';
import { useState } from 'react'
import { API_KEY, URL } from '../api/apiMovie';

const useSearchMovie = () => {

    const [search, setSearch] = useState('');
    const [dataMovies, setDataMovies] = useState([]);

    const fetchMovie = async () => {
        try {
            const response = await axios.get(`${URL}?query=${search}&api_key=${API_KEY}`);
            const info = await response.data.results;
            setDataMovies(info)
        } catch (error) {
            console.log(error)
        }
    }

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchMovie()
    }

    return {
        search,
        handleInputChange,
        handleSubmit,
        dataMovies
    };
}

export default useSearchMovie;
