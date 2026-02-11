import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-[var(--background-color)] px-6">
                    <div className="text-center max-w-2xl">
                        <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-4">
                            Oops!
                        </h1>

                        <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
                            Something went wrong
                        </h2>

                        <p className="text-lg text-[var(--text-secondary)] mb-6">
                            We encountered an unexpected error. Don't worry, it's not your fault!
                        </p>

                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-4 mb-6 text-left">
                                <p className="text-sm font-mono text-red-400 break-all">
                                    {this.state.error.toString()}
                                </p>
                            </div>
                        )}

                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={() => window.location.reload()}
                                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl transition-all hover:scale-105"
                            >
                                Reload Page
                            </button>

                            <Link
                                to="/"
                                className="px-6 py-3 border border-[var(--card-border)] hover:border-emerald-500/50 text-[var(--text-primary)] font-bold rounded-xl transition-all hover:bg-emerald-500/5"
                            >
                                Go Home
                            </Link>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
