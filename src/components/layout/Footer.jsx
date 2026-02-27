import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer({ personal }) {
  const year = new Date().getFullYear();
  const socials = [
    { icon: Github, href: personal.github, label: 'GitHub' },
    { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: personal.twitter, label: 'Twitter' },
    { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800/60 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            © {year} {personal.name}. Built with React &amp; Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-400 dark:text-gray-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
