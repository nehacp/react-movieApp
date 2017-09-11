"use strict";

var Search = function Search(props) {
	return React.createElement(
		"div",
		{ className: "search-field" },
		React.createElement("input", { className: "search-value", placeholder: "Search..", onChange: function onChange(event) {
				return props.onChange(event.target.value);
			} }),
		React.createElement(
			"button",
			{ className: "go", onClick: function onClick() {
					return props.click();
				} },
			" GO! "
		)
	);
};

window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NjcmlwdHMvc2VhcmNoLmpzeCJdLCJuYW1lcyI6WyJTZWFyY2giLCJwcm9wcyIsImV2ZW50Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNsaWNrIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsUUFDWjtBQUFBO0FBQUEsSUFBSyxXQUFVLGNBQWY7QUFDQSxpQ0FBTyxXQUFVLGNBQWpCLEVBQWdDLGFBQVksVUFBNUMsRUFBdUQsVUFBVSxrQkFBQ0MsS0FBRDtBQUFBLFdBQVdELE1BQU1FLFFBQU4sQ0FBZUQsTUFBTUUsTUFBTixDQUFhQyxLQUE1QixDQUFYO0FBQUEsSUFBakUsR0FEQTtBQUVBO0FBQUE7QUFBQSxLQUFRLFdBQVUsSUFBbEIsRUFBdUIsU0FBUztBQUFBLFlBQU1KLE1BQU1LLEtBQU4sRUFBTjtBQUFBLEtBQWhDO0FBQUE7QUFBQTtBQUZBLEVBRFk7QUFBQSxDQUFiOztBQU9BQyxPQUFPUCxNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU2VhcmNoID0gKHByb3BzKSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWZpZWxkXCI+XG5cdDxpbnB1dCBjbGFzc05hbWU9XCJzZWFyY2gtdmFsdWVcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uXCIgb25DaGFuZ2U9eyhldmVudCkgPT4gcHJvcHMub25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX0vPlxuXHQ8YnV0dG9uIGNsYXNzTmFtZT1cImdvXCIgb25DbGljaz17KCkgPT4gcHJvcHMuY2xpY2soKX0+IEdPISA8L2J1dHRvbj5cblx0PC9kaXY+XG4pO1xuXG53aW5kb3cuU2VhcmNoID0gU2VhcmNoOyJdfQ==