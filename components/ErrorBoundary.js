import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * Error boundary component which catches errors below itself in the component tree
 */
class ErrorBoundary extends Component {
  static propTypes = {
	  // Children nodes to be rendered
    children: PropTypes.node,
	// UI to be displayed in case of error
    displayError: PropTypes.node,
	// Error handling function
    onError: PropTypes.func,
	// Optional logger
    logger: PropTypes.object,
  };

  static defaultProps = {
    onError: () => {},
  };

  state = {
    hasError: false,
  };

  /**
   * Render a fallback UI after an error has been thrown
   * @param {*} error
   * @returns
   */
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  /**
   * Log error information
   * @param {*} error
   * @param {*} errorInfo
   */
  componentDidCatch(error, errorInfo) {
    const { logger } = this.props;
    let extra = {};
    if ("componentStack" in errorInfo) {
      extra = { componentStack: errorInfo.componentStack };
    }
    // You can also log the error to an error reporting service
    if (logger) logger.error(error, extra);

    this.setState({ hasError: true });
    this.props.onError(error);
  }

  /**
   * Render function which displays an error if present or returns children
   * @returns
   */
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
