import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clientLogger from '@common/utils/clientLogger';

class ErrorBoundary extends Component {
    static propTypes = {
        children: PropTypes.node,
        displayError: PropTypes.node,
        onError: PropTypes.func,
    };

    static defaultProps = {
        onError: () => {},
    };

	state = { hasError: false };

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		let extra = {};
		if ('componentStack' in errorInfo) {
			extra = { componentStack: errorInfo.componentStack };
		}
		// You can also log the error to an error reporting service
		clientLogger.error(error, extra);

		this.setState({ hasError: true });
		this.props.onError(error);
	}

	render() {
		const { displayError, children } = this.props;

		if (this.state.hasError) {
			if (displayError) return displayError;
			// You can render any custom fallback UI
			return null;
		}

		return children;
	}
}

export default ErrorBoundary;
