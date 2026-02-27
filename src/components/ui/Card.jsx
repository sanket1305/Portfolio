export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 ${
        hover ? 'hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
