var Movies = (props) => (
	<div className="movie-title">
	{props.movies.map((movie, i) => <Movie movie={movie} key={i}/>
	)}
	</div>
)

window.Movies = Movies;