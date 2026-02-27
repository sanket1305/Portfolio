export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-10 md:mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 tracking-tight">
        {title}
        <span className="text-cyan-500 dark:text-cyan-400">.</span>
      </h2>
      {subtitle && (
        <p className="mt-2 text-gray-500 dark:text-gray-400 text-base md:text-lg">{subtitle}</p>
      )}
      <div className="mt-3 h-px w-16 bg-gradient-to-r from-cyan-500 dark:from-cyan-400 to-transparent" />
    </div>
  );
}
