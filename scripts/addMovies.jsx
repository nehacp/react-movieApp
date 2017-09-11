class AddMovies extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			input: ''
		};
	}	

	onChange(input) {
		this.setState({input: input});
	}

	render() {
		return (
			<div className="add-movie">
				<input className="movie-title" placeholder="Add movie title here.." onChange={(event) => this.onChange(event.target.value)}/>
				<button className="add-title" onClick={() => this.props.addMovie(this.state.input)}>Add</button>
			</div>
		)
	}
}

window.AddMovies = AddMovies;



// var AddMovies = (props) => (
// 	<div className="add-movie">
// 		<input className="movie-title" placeholder="Add movie title here.." onChange={(event) => this.onChange(event.target.value)}/>
// 		<button className="add-title" onClick={() => props.addMovie(this.state.input)}>Add</button>
// 	</div>
// );