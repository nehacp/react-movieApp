"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddMovies = function (_React$Component) {
	_inherits(AddMovies, _React$Component);

	function AddMovies(props) {
		_classCallCheck(this, AddMovies);

		var _this = _possibleConstructorReturn(this, (AddMovies.__proto__ || Object.getPrototypeOf(AddMovies)).call(this, props));

		_this.state = {
			input: ''
		};
		return _this;
	}

	_createClass(AddMovies, [{
		key: "onChange",
		value: function onChange(input) {
			this.setState({ input: input });
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return React.createElement(
				"div",
				{ className: "add-movie" },
				React.createElement("input", { className: "movie-title", placeholder: "Add movie title here..", onChange: function onChange(event) {
						return _this2.onChange(event.target.value);
					} }),
				React.createElement(
					"button",
					{ className: "add-title", onClick: function onClick() {
							return _this2.props.addMovie(_this2.state.input);
						} },
					"Add"
				)
			);
		}
	}]);

	return AddMovies;
}(React.Component);

window.AddMovies = AddMovies;

// var AddMovies = (props) => (
// 	<div className="add-movie">
// 		<input className="movie-title" placeholder="Add movie title here.." onChange={(event) => this.onChange(event.target.value)}/>
// 		<button className="add-title" onClick={() => props.addMovie(this.state.input)}>Add</button>
// 	</div>
// );
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NjcmlwdHMvYWRkTW92aWVzLmpzeCJdLCJuYW1lcyI6WyJBZGRNb3ZpZXMiLCJwcm9wcyIsInN0YXRlIiwiaW5wdXQiLCJzZXRTdGF0ZSIsImV2ZW50Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFkZE1vdmllIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUzs7O0FBQ0wsb0JBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQSxvSEFDYkEsS0FEYTs7QUFFbkIsUUFBS0MsS0FBTCxHQUFhO0FBQ1pDLFVBQU87QUFESyxHQUFiO0FBRm1CO0FBS25COzs7OzJCQUVRQSxLLEVBQU87QUFDZixRQUFLQyxRQUFMLENBQWMsRUFBQ0QsT0FBT0EsS0FBUixFQUFkO0FBQ0E7OzsyQkFFUTtBQUFBOztBQUNSLFVBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSxXQUFmO0FBQ0MsbUNBQU8sV0FBVSxhQUFqQixFQUErQixhQUFZLHdCQUEzQyxFQUFvRSxVQUFVLGtCQUFDRSxLQUFEO0FBQUEsYUFBVyxPQUFLQyxRQUFMLENBQWNELE1BQU1FLE1BQU4sQ0FBYUMsS0FBM0IsQ0FBWDtBQUFBLE1BQTlFLEdBREQ7QUFFQztBQUFBO0FBQUEsT0FBUSxXQUFVLFdBQWxCLEVBQThCLFNBQVM7QUFBQSxjQUFNLE9BQUtQLEtBQUwsQ0FBV1EsUUFBWCxDQUFvQixPQUFLUCxLQUFMLENBQVdDLEtBQS9CLENBQU47QUFBQSxPQUF2QztBQUFBO0FBQUE7QUFGRCxJQUREO0FBTUE7Ozs7RUFuQnNCTyxNQUFNQyxTOztBQXNCOUJDLE9BQU9aLFNBQVAsR0FBbUJBLFNBQW5COztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhZGRNb3ZpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBZGRNb3ZpZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3RvciAocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlucHV0OiAnJ1xuXHRcdH07XG5cdH1cdFxuXG5cdG9uQ2hhbmdlKGlucHV0KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7aW5wdXQ6IGlucHV0fSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWRkLW1vdmllXCI+XG5cdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9XCJtb3ZpZS10aXRsZVwiIHBsYWNlaG9sZGVyPVwiQWRkIG1vdmllIHRpdGxlIGhlcmUuLlwiIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMub25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX0vPlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImFkZC10aXRsZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuYWRkTW92aWUodGhpcy5zdGF0ZS5pbnB1dCl9PkFkZDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbndpbmRvdy5BZGRNb3ZpZXMgPSBBZGRNb3ZpZXM7XG5cblxuXG4vLyB2YXIgQWRkTW92aWVzID0gKHByb3BzKSA9PiAoXG4vLyBcdDxkaXYgY2xhc3NOYW1lPVwiYWRkLW1vdmllXCI+XG4vLyBcdFx0PGlucHV0IGNsYXNzTmFtZT1cIm1vdmllLXRpdGxlXCIgcGxhY2Vob2xkZXI9XCJBZGQgbW92aWUgdGl0bGUgaGVyZS4uXCIgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5vbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpfS8+XG4vLyBcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJhZGQtdGl0bGVcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5hZGRNb3ZpZSh0aGlzLnN0YXRlLmlucHV0KX0+QWRkPC9idXR0b24+XG4vLyBcdDwvZGl2PlxuLy8gKTsiXX0=