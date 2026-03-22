import { useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText } from 'lucide-react';
import resumePdf from '../../data/Sanket_Sunil_Deshmukh_Resume.pdf';

export default function ResumeModal({ isOpen, onClose }) {
  const closeButtonRef = useRef(null);

  /* ── Lock body scroll & focus close button when modal opens ── */
  useEffect(() => {
    if (!isOpen) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Move focus to close button for accessibility
    const frame = requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = previous;
      cancelAnimationFrame(frame);
    };
  }, [isOpen]);

  /* ── Close on Escape ── */
  const handleKeyDown = useCallback(
    (e) => { if (e.key === 'Escape') onClose(); },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  /* ── Stop backdrop clicks from bubbling through the panel ── */
  const handlePanelClick = (e) => e.stopPropagation();

  return (
    <AnimatePresence>
      {isOpen && (
        /* ── Backdrop ── */
        <motion.div
          key="resume-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-5 lg:p-8"
          aria-modal="true"
          role="dialog"
          aria-label="Resume viewer"
        >
          {/* ── Modal panel ── */}
          <motion.div
            key="resume-modal-panel"
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 24 }}
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={handlePanelClick}
            className="
              relative flex flex-col
              w-full h-full
              sm:w-full sm:h-[92vh]
              md:max-w-3xl md:h-[90vh]
              lg:max-w-4xl lg:h-[92vh]
              xl:max-w-5xl
              bg-gray-900 rounded-xl shadow-2xl overflow-hidden
              border border-gray-700/60
            "
          >
            {/* ── Header bar ── */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800/90 border-b border-gray-700/70 shrink-0 gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <FileText size={15} className="text-cyan-400 shrink-0" />
                <span className="text-sm font-semibold text-gray-200 tracking-wide truncate">
                  Sanket Sunil Deshmukh — Resume
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {/* Download button */}
                <a
                  href={resumePdf}
                  download="Sanket_Deshmukh_Resume.pdf"
                  className="
                    flex items-center gap-1.5 px-3 py-1.5
                    bg-cyan-600 hover:bg-cyan-500
                    text-white text-xs font-semibold
                    rounded-lg transition-colors duration-200
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400
                  "
                  aria-label="Download resume"
                >
                  <Download size={13} />
                  <span className="hidden xs:inline sm:inline">Download</span>
                </a>

                {/* Close button */}
                <button
                  ref={closeButtonRef}
                  onClick={onClose}
                  className="
                    p-1.5 rounded-lg
                    text-gray-400 hover:text-white hover:bg-gray-700
                    transition-colors duration-200
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400
                  "
                  aria-label="Close resume viewer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* ── PDF viewer ── */}
            <div className="flex-1 overflow-hidden bg-gray-950">
              <iframe
                src={`${resumePdf}#toolbar=0&navpanes=0&view=FitH`}
                title="Sanket Sunil Deshmukh Resume"
                className="w-full h-full border-0"
                loading="lazy"
              >
                {/* Fallback for browsers that can't render PDFs inline */}
                <div className="flex flex-col items-center justify-center h-full gap-4 p-8 text-center">
                  <FileText size={48} className="text-gray-500" />
                  <p className="text-gray-400 text-sm max-w-xs">
                    Your browser can&apos;t display PDFs inline. Please use the download button above to view the resume.
                  </p>
                  <a
                    href={resumePdf}
                    download="Sanket_Deshmukh_Resume.pdf"
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold rounded-lg transition-colors duration-200"
                  >
                    <Download size={15} />
                    Download Resume
                  </a>
                </div>
              </iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
