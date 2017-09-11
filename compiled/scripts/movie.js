'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_React$Component) {
	_inherits(Movie, _React$Component);

	function Movie(props) {
		_classCallCheck(this, Movie);

		var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this, props));

		_this.state = {
			watched: _this.props.movie.seen
		};
		return _this;
	}

	_createClass(Movie, [{
		key: 'toggleValue',
		value: function toggleValue(value) {
			value = value === 'Watched' ? 'To Watch' : 'Watched';
			this.setState({ watched: value });
			this.props.movie.seen = value;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			if (this.props.movie.title === 'No movies found') {
				return React.createElement(
					'div',
					{ className: 'movie' },
					this.props.movie.title
				);
			} else {
				return React.createElement(
					'div',
					{ className: 'movie' },
					this.props.movie.title,
					React.createElement(
						'div',
						{ className: 'button-div' },
						React.createElement(
							'button',
							{ className: 'watched-button', onClick: function onClick(event) {
									return _this2.toggleValue(event.target.innerText);
								} },
							this.state.watched
						)
					)
				);
			}
		}
	}]);

	return Movie;
}(React.Component);

// var Movie = (props) => (
// 	<div className="movie">
// 		{props.movie.title}
// 		<button className="watched-button">Watched</button>
// 	</div>
// )

// window.Movie = Movie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NjcmlwdHMvbW92aWUuanN4Il0sIm5hbWVzIjpbIk1vdmllIiwicHJvcHMiLCJzdGF0ZSIsIndhdGNoZWQiLCJtb3ZpZSIsInNlZW4iLCJ2YWx1ZSIsInNldFN0YXRlIiwidGl0bGUiLCJldmVudCIsInRvZ2dsZVZhbHVlIiwidGFyZ2V0IiwiaW5uZXJUZXh0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsSzs7O0FBQ0wsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0R0FDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhO0FBQ1pDLFlBQVMsTUFBS0YsS0FBTCxDQUFXRyxLQUFYLENBQWlCQztBQURkLEdBQWI7QUFGa0I7QUFLbEI7Ozs7OEJBRVdDLEssRUFBTztBQUNsQkEsV0FBUUEsVUFBVSxTQUFWLEdBQXNCLFVBQXRCLEdBQW1DLFNBQTNDO0FBQ0EsUUFBS0MsUUFBTCxDQUFjLEVBQUNKLFNBQVNHLEtBQVYsRUFBZDtBQUNBLFFBQUtMLEtBQUwsQ0FBV0csS0FBWCxDQUFpQkMsSUFBakIsR0FBd0JDLEtBQXhCO0FBQ0E7OzsyQkFFUTtBQUFBOztBQUNSLE9BQUksS0FBS0wsS0FBTCxDQUFXRyxLQUFYLENBQWlCSSxLQUFqQixLQUEyQixpQkFBL0IsRUFBa0Q7QUFDakQsV0FDQztBQUFBO0FBQUEsT0FBSyxXQUFVLE9BQWY7QUFDRSxVQUFLUCxLQUFMLENBQVdHLEtBQVgsQ0FBaUJJO0FBRG5CLEtBREQ7QUFLQSxJQU5ELE1BTU87QUFDTixXQUNDO0FBQUE7QUFBQSxPQUFLLFdBQVUsT0FBZjtBQUNFLFVBQUtQLEtBQUwsQ0FBV0csS0FBWCxDQUFpQkksS0FEbkI7QUFFQztBQUFBO0FBQUEsUUFBSyxXQUFVLFlBQWY7QUFDQztBQUFBO0FBQUEsU0FBUSxXQUFVLGdCQUFsQixFQUFtQyxTQUFTLGlCQUFDQyxLQUFEO0FBQUEsZ0JBQVcsT0FBS0MsV0FBTCxDQUFpQkQsTUFBTUUsTUFBTixDQUFhQyxTQUE5QixDQUFYO0FBQUEsU0FBNUM7QUFBa0csWUFBS1YsS0FBTCxDQUFXQztBQUE3RztBQUREO0FBRkQsS0FERDtBQVFBO0FBQ0Q7Ozs7RUEvQmtCVSxNQUFNQyxTOztBQXFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Im1vdmllLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW92aWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR3YXRjaGVkOiB0aGlzLnByb3BzLm1vdmllLnNlZW5cblx0XHR9XG5cdH1cblxuXHR0b2dnbGVWYWx1ZSh2YWx1ZSkge1xuXHRcdHZhbHVlID0gdmFsdWUgPT09ICdXYXRjaGVkJyA/ICdUbyBXYXRjaCcgOiAnV2F0Y2hlZCc7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7d2F0Y2hlZDogdmFsdWV9KTtcblx0XHR0aGlzLnByb3BzLm1vdmllLnNlZW4gPSB2YWx1ZTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRpZiAodGhpcy5wcm9wcy5tb3ZpZS50aXRsZSA9PT0gJ05vIG1vdmllcyBmb3VuZCcpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW92aWVcIj5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5tb3ZpZS50aXRsZX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW92aWVcIj5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5tb3ZpZS50aXRsZX1cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1kaXZcIj5cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwid2F0Y2hlZC1idXR0b25cIiBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMudG9nZ2xlVmFsdWUoZXZlbnQudGFyZ2V0LmlubmVyVGV4dCl9Pnt0aGlzLnN0YXRlLndhdGNoZWR9PC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KVxuXHRcdH1cblx0fVxufVxuXG5cblxuXG4vLyB2YXIgTW92aWUgPSAocHJvcHMpID0+IChcbi8vIFx0PGRpdiBjbGFzc05hbWU9XCJtb3ZpZVwiPlxuLy8gXHRcdHtwcm9wcy5tb3ZpZS50aXRsZX1cbi8vIFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cIndhdGNoZWQtYnV0dG9uXCI+V2F0Y2hlZDwvYnV0dG9uPlxuLy8gXHQ8L2Rpdj5cbi8vIClcblxuLy8gd2luZG93Lk1vdmllID0gTW92aWU7Il19