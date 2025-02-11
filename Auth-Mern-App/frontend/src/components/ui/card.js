export function Card({ children, className }) {
    return (
        <div className={`bg-white rounded-lg shadow-lg ${className}`}>
            {children}
        </div>
    );
}

export function CardContent({ children }) {
    return <div className="p-4">{children}</div>;
}
