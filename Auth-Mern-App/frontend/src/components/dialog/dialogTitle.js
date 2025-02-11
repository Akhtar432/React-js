export function DialogTitle({ children, className }) {
    return (
      <h3 className={`text-lg font-semibold ${className}`}>
        {children}
      </h3>
    );
  }
  