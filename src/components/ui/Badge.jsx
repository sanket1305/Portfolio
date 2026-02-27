export default function Badge({ children }) {
  return (
    <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200 dark:bg-cyan-400/10 dark:text-cyan-300 dark:border-cyan-400/20">
      {children}
    </span>
  );
}
