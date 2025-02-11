export function DialogTrigger({ asChild, children }) {
    if (asChild) {
      return children; // Allows passing the Button directly
    }
    
    return (
      <button className="btn-dialog-trigger">
        {children}
      </button>
    );
  }
  