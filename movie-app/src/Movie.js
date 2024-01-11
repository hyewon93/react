import PropTypes from PropTypes;

function Movie({coverImg, title, summary, genres}) {
    return (
    <div>
        <img src={coverImg} alt={title}/>
        <h2>{title}</h2>
        <p>{summary}</p>
        <ul>
        {genres.map(genre => <li key={genre}>{genre}</li>)}
        </ul>
    </div>
    );
}

Movie.propTypes = {
    coverImg: PropTypes.string.required,
    title: PropTypes.string.required,
    summary: PropTypes.string.required,
    genres: PropTypes.arrayOf(PropTypes.string).required
}

export default Movie;