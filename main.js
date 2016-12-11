class Item extends React.Component {
	render() {
		return (
			<div className="item">test</div>
		);
	}
}

class List extends React.Component {
	render() {
		return (
			<div className="List">
				<Item />
			</div>
		);
	}
}

ReactDOM.render(
	<List />,
	document.getElementById("container")
);