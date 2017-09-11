'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			movieList: _this.props.movies
		};

		return _this;
	}

	_createClass(App, [{
		key: 'addMovie',
		value: function addMovie() {
			var input = document.querySelector('.movie-title');
			if (input.value !== '') {
				var exists = this.props.movies.some(function (movie) {
					return movie.title.toLowerCase() === input.value.toLowerCase();
				});
				if (exists) {
					alert('This title is already in your collection');
				} else {
					this.props.movies.push({ title: input.value, seen: 'To Watch' });
					this.setState({ movieList: this.props.movies });
				}
			} else {
				alert('Please enter a valid title');
			}
			input.value = '';
		}
	}, {
		key: 'onChange',
		value: function onChange(input) {
			;var movies = this.props.movies.filter(function (movie) {
				return movie.title.toLowerCase().indexOf(input.toLowerCase()) !== -1;
			});
			if (!movies.length) {
				movies = [{ title: 'No movies found' }];
			}
			this.setState({ movieList: movies });
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ id: 'main' },
				React.createElement(
					'div',
					{ className: 'list' },
					'Movie List'
				),
				React.createElement(AddMovies, { className: 'add-movie', addMovie: this.addMovie.bind(this) }),
				React.createElement(
					'div',
					{ className: 'movie-list' },
					React.createElement(
						'button',
						{ className: 'watched-tab' },
						'Watched'
					),
					React.createElement(
						'button',
						{ className: 'to-watch-tab' },
						'To Watch'
					),
					React.createElement(Search, { onChange: this.onChange.bind(this) }),
					React.createElement(Movies, { movies: this.state.movieList }),
					' '
				)
			);
		}
	}]);

	return App;
}(React.Component);

window.App = App;

ReactDOM.render(React.createElement(App, { movies: movies }), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NjcmlwdHMvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwibW92aWVMaXN0IiwibW92aWVzIiwiaW5wdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImV4aXN0cyIsInNvbWUiLCJtb3ZpZSIsInRpdGxlIiwidG9Mb3dlckNhc2UiLCJhbGVydCIsInB1c2giLCJzZWVuIiwic2V0U3RhdGUiLCJmaWx0ZXIiLCJpbmRleE9mIiwibGVuZ3RoIiwiYWRkTW92aWUiLCJiaW5kIiwib25DaGFuZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0wsY0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdHQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsY0FBVSxNQUFLRixLQUFMLENBQVdHO0FBRFQsR0FBYjs7QUFGa0I7QUFNbEI7Ozs7NkJBQ1U7QUFDVixPQUFJQyxRQUFRQyxTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBQVo7QUFDQSxPQUFJRixNQUFNRyxLQUFOLEtBQWdCLEVBQXBCLEVBQXdCO0FBQ3hCLFFBQUlDLFNBQVMsS0FBS1IsS0FBTCxDQUFXRyxNQUFYLENBQWtCTSxJQUFsQixDQUF1QjtBQUFBLFlBQVNDLE1BQU1DLEtBQU4sQ0FBWUMsV0FBWixPQUE4QlIsTUFBTUcsS0FBTixDQUFZSyxXQUFaLEVBQXZDO0FBQUEsS0FBdkIsQ0FBYjtBQUNDLFFBQUlKLE1BQUosRUFBWTtBQUNYSyxXQUFNLDBDQUFOO0FBQ0EsS0FGRCxNQUVPO0FBQ04sVUFBS2IsS0FBTCxDQUFXRyxNQUFYLENBQWtCVyxJQUFsQixDQUF1QixFQUFDSCxPQUFPUCxNQUFNRyxLQUFkLEVBQXFCUSxNQUFLLFVBQTFCLEVBQXZCO0FBQ0EsVUFBS0MsUUFBTCxDQUFjLEVBQUNkLFdBQVcsS0FBS0YsS0FBTCxDQUFXRyxNQUF2QixFQUFkO0FBQ0E7QUFDRCxJQVJELE1BUU87QUFDTlUsVUFBTSw0QkFBTjtBQUNBO0FBQ0RULFNBQU1HLEtBQU4sR0FBYyxFQUFkO0FBQ0E7OzsyQkFFUUgsSyxFQUFPO0FBQ2pCLElBQUcsSUFBSUQsU0FBUyxLQUFLSCxLQUFMLENBQVdHLE1BQVgsQ0FBa0JjLE1BQWxCLENBQXlCO0FBQUEsV0FBU1AsTUFBTUMsS0FBTixDQUFZQyxXQUFaLEdBQTBCTSxPQUExQixDQUFrQ2QsTUFBTVEsV0FBTixFQUFsQyxNQUEyRCxDQUFDLENBQXJFO0FBQUEsSUFBekIsQ0FBYjtBQUNELE9BQUksQ0FBQ1QsT0FBT2dCLE1BQVosRUFBb0I7QUFDbkJoQixhQUFTLENBQUMsRUFBQ1EsT0FBTyxpQkFBUixFQUFELENBQVQ7QUFDQTtBQUNELFFBQUtLLFFBQUwsQ0FBYyxFQUFDZCxXQUFXQyxNQUFaLEVBQWQ7QUFDQTs7OzJCQUVRO0FBQ1IsVUFDQztBQUFBO0FBQUEsTUFBSyxJQUFHLE1BQVI7QUFDQztBQUFBO0FBQUEsT0FBSyxXQUFVLE1BQWY7QUFBQTtBQUFBLEtBREQ7QUFFQyx3QkFBQyxTQUFELElBQVcsV0FBVSxXQUFyQixFQUFpQyxVQUFVLEtBQUtpQixRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBM0MsR0FGRDtBQUdDO0FBQUE7QUFBQSxPQUFLLFdBQVUsWUFBZjtBQUNBO0FBQUE7QUFBQSxRQUFRLFdBQVUsYUFBbEI7QUFBQTtBQUFBLE1BREE7QUFFQTtBQUFBO0FBQUEsUUFBUSxXQUFVLGNBQWxCO0FBQUE7QUFBQSxNQUZBO0FBR0EseUJBQUMsTUFBRCxJQUFRLFVBQVUsS0FBS0MsUUFBTCxDQUFjRCxJQUFkLENBQW1CLElBQW5CLENBQWxCLEdBSEE7QUFJQSx5QkFBQyxNQUFELElBQVEsUUFBUSxLQUFLcEIsS0FBTCxDQUFXQyxTQUEzQixHQUpBO0FBQUE7QUFBQTtBQUhELElBREQ7QUFXQTs7OztFQTVDZ0JxQixNQUFNQyxTOztBQWdEeEJDLE9BQU8xQixHQUFQLEdBQWFBLEdBQWI7O0FBRUEyQixTQUFTQyxNQUFULENBQ0Msb0JBQUMsR0FBRCxJQUFLLFFBQVF4QixNQUFiLEdBREQsRUFFQ0UsU0FBU3VCLGNBQVQsQ0FBd0IsS0FBeEIsQ0FGRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bW92aWVMaXN0OnRoaXMucHJvcHMubW92aWVzXG5cdFx0fVxuXG5cdH1cblx0YWRkTW92aWUoKSB7XG5cdFx0bGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllLXRpdGxlJyk7XG5cdFx0aWYgKGlucHV0LnZhbHVlICE9PSAnJykge1xuXHRcdGxldCBleGlzdHMgPSB0aGlzLnByb3BzLm1vdmllcy5zb21lKG1vdmllID0+IG1vdmllLnRpdGxlLnRvTG93ZXJDYXNlKCkgPT09IGlucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCkpO1xuXHRcdFx0aWYgKGV4aXN0cykge1xuXHRcdFx0XHRhbGVydCgnVGhpcyB0aXRsZSBpcyBhbHJlYWR5IGluIHlvdXIgY29sbGVjdGlvbicpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5wcm9wcy5tb3ZpZXMucHVzaCh7dGl0bGU6IGlucHV0LnZhbHVlLCBzZWVuOidUbyBXYXRjaCd9KTtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7bW92aWVMaXN0OiB0aGlzLnByb3BzLm1vdmllc30pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRhbGVydCgnUGxlYXNlIGVudGVyIGEgdmFsaWQgdGl0bGUnKTtcblx0XHR9XG5cdFx0aW5wdXQudmFsdWUgPSAnJztcblx0fVxuXHRcblx0b25DaGFuZ2UoaW5wdXQpIHtcdFxuO1x0XHR2YXIgbW92aWVzID0gdGhpcy5wcm9wcy5tb3ZpZXMuZmlsdGVyKG1vdmllID0+IG1vdmllLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpbnB1dC50b0xvd2VyQ2FzZSgpKSAhPT0gLTEpXG5cdFx0aWYgKCFtb3ZpZXMubGVuZ3RoKSB7XG5cdFx0XHRtb3ZpZXMgPSBbe3RpdGxlOiAnTm8gbW92aWVzIGZvdW5kJ31dO1xuXHRcdH1cblx0XHR0aGlzLnNldFN0YXRlKHttb3ZpZUxpc3Q6IG1vdmllc30pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPVwibWFpblwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5Nb3ZpZSBMaXN0PC9kaXY+XG5cdFx0XHRcdDxBZGRNb3ZpZXMgY2xhc3NOYW1lPVwiYWRkLW1vdmllXCIgYWRkTW92aWU9e3RoaXMuYWRkTW92aWUuYmluZCh0aGlzKX0gLz5cdFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWxpc3RcIj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJ3YXRjaGVkLXRhYlwiPldhdGNoZWQ8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJ0by13YXRjaC10YWJcIj5UbyBXYXRjaDwvYnV0dG9uPlxuXHRcdFx0XHQ8U2VhcmNoIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyl9Lz5cblx0XHRcdFx0PE1vdmllcyBtb3ZpZXM9e3RoaXMuc3RhdGUubW92aWVMaXN0fSAvPiA8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxufVxuXG53aW5kb3cuQXBwID0gQXBwO1xuXG5SZWFjdERPTS5yZW5kZXIoXG5cdDxBcHAgbW92aWVzPXttb3ZpZXN9IC8+LFxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbik7Il19