export function Dialog({ children }) {
  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      {children}
    </div>
  );
}
