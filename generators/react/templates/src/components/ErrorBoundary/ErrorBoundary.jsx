import React from 'react';

export default class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		};
	}
	/** react@16 added */
	componentDidCatch(err, info) {
		console.log('componentDidCatch', err);
		this.setState({ hasError: true });
	}
	render() {
		return this.state.hasError ? (
			<div>Something went wrong!</div>
		) : (
				this.props.children
			);
	}
}
