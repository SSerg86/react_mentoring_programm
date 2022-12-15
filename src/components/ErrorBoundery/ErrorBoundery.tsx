import React, { Component, ErrorInfo, ReactNode } from 'react';
import classes from './ErrorBoundery.module.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div className={classes.error}>
          <h1>Sorry.. smth went wrong</h1>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
