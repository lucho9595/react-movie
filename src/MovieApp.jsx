import React from 'react'
import useSearchMovie from './hooks/SearchMovie';

export const MovieApp = () => {

    const {
        search,
        handleInputChange,
        handleSubmit,
        dataMovies
    } = useSearchMovie();

    return (
        <div className='container'>
            <h1 className='title'>MovieApp</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Search your movie...'
                    value={search}
                    onChange={handleInputChange}
                />
                <button type='submit' className='search-button'>Search</button>
            </form>
            <div className='movie-list'>
                {dataMovies?.map((m) => (
                    <div key={m.id} className='movie-card'>
                        <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} alt={m.title} />
                        <h2>{m.original_title}</h2>
                        <p>{m.overview}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
