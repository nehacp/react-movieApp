class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movieList:this.props.movies
		}

	}
	addMovie() {
		let input = document.querySelector('.movie-title');
		if (input.value !== '') {
		let exists = this.props.movies.some(movie => movie.title.toLowerCase() === input.value.toLowerCase());
			if (exists) {
				alert('This title is already in your collection');
			} else {
				this.props.movies.push({title: input.value, seen:'To Watch'});
				this.setState({movieList: this.props.movies});
			}
		} else {
			alert('Please enter a valid title');
		}
		input.value = '';
	}
	
	onChange(input) {	
;		var movies = this.props.movies.filter(movie => movie.title.toLowerCase().indexOf(input.toLowerCase()) !== -1)
		if (!movies.length) {
			movies = [{title: 'No movies found'}];
		}
		this.setState({movieList: movies});
	}

	render() {
		return (
			<div id="main">
				<div className="list">Movie List</div>
				<AddMovies className="add-movie" addMovie={this.addMovie.bind(this)} />	
				<div className="movie-list">
				<button className="watched-tab">Watched</button>
				<button className="to-watch-tab">To Watch</button>
				<Search onChange={this.onChange.bind(this)}/>
				<Movies movies={this.state.movieList} /> </div>
			</div>
		);
	}

}

window.App = App;

ReactDOM.render(
	<App movies={movies} />,
	document.getElementById('app')
);