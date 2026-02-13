import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--background-color)] px-6">
            <div className="text-center">
                {/* 404 Number */}
                <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4">
                    404
                </h1>

                {/* Message */}
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                    Page Not Found
                </h2>

                <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
                    Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                </p>

                {/* Back to Home Button */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl transition-all hover:scale-105 active:scale-95"
                >
                    <FaHome size={20} />
                    Back to Home
                </Link>

                {/* Decorative Elements */}
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob -z-10" />
                <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 -z-10" />
            </div>
        </div>
    );
}

export default NotFound;
