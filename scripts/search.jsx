var Search = (props) => (
	<div className="search-field">
	<input className="search-value" placeholder="Search.." onChange={(event) => props.onChange(event.target.value)}/>
	<button className="go" onClick={() => props.click()}> GO! </button>
	</div>
);

window.Search = Search;