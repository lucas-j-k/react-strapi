import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true, error: error };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log('ERROR - ', error);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
      return <h1>Something went wrong.  {this.state.error}</h1>;
      }
  
      return this.props.children; 
    }
  }

export default ErrorBoundary;