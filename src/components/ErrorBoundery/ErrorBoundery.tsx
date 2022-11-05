/* eslint-disable */
// disabled eslint here because didn't find a solution for fixing conflicts for a current component
// TODO: resolve issue and remove disable line
import React, { Component, ErrorInfo, ReactNode } from 'react';
import classes from './ErrorBoundery.module.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className={classes.error}>
          <h1>Sorry.. smth went wrong</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
