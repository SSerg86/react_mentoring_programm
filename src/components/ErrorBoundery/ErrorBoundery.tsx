import React, { Component, ErrorInfo, ReactNode } from 'react';
import classes from './ErrorBoundery.module.css';

interface Props {
  children: ReactNode;
  handleDeleteMovieModal: () => void;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
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
          <input
            className={classes.delete_btn}
            type='button'
            value='Delete Movie'
            onClick={this.props.handleDeleteMovieModal}
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
