
export function DialogContent({ children, className, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm rounded-lg shadow-xl">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full relative">
        {children}
      </div>
    </div>
  );
}