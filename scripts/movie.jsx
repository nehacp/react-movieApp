class Movie extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			watched: this.props.movie.seen
		}
	}

	toggleValue(value) {
		value = value === 'Watched' ? 'To Watch' : 'Watched';
		this.setState({watched: value});
		this.props.movie.seen = value;
	}

	render() {
		if (this.props.movie.title === 'No movies found') {
			return (
				<div className="movie">
					{this.props.movie.title}
				</div>
			)
		} else {
			return (
				<div className="movie">
					{this.props.movie.title}
					<div className="button-div">
						<button className="watched-button" onClick={(event) => this.toggleValue(event.target.innerText)}>{this.state.watched}</button>
					</div>
				</div>
			)
		}
	}
}




// var Movie = (props) => (
// 	<div className="movie">
// 		{props.movie.title}
// 		<button className="watched-button">Watched</button>
// 	</div>
// )

// window.Movie = Movie;