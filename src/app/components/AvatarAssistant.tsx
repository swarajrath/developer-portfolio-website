import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function AvatarAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsOpen(false);
  };

  const handleAvatarClick = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleAvatarClick();
    }
  };

  const navigateToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (isDismissed) return null;

  return (
    <>
      {/* Avatar Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleAvatarClick}
          onKeyDown={handleKeyDown}
          className="avatar-container group"
          aria-label="Open assistant"
          aria-expanded={isOpen}
        >
          <div className={`avatar-wrapper ${isOpen ? 'avatar-active' : ''} ${prefersReducedMotion ? 'no-motion' : ''}`}>
            {/* Avatar SVG */}
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="avatar-svg"
            >
              {/* Background Circle */}
              <circle cx="32" cy="32" r="32" fill="#F5F6F7" />
              
              {/* Head */}
              <ellipse cx="32" cy="28" rx="12" ry="14" fill="#FDDBB7" />
              
              {/* Professional Short Hair - Side Part */}
              <path
                d="M20 24C20 18 23 14 32 14C41 14 44 18 44 24C44 25 43.5 26 43 27L42 26C42 24 40 16 32 16C24 16 22 24 22 26L21 27C20.5 26 20 25 20 24Z"
                fill="#1A1A1A"
              />
              {/* Hair Top Volume */}
              <ellipse cx="32" cy="16" rx="10" ry="4" fill="#1A1A1A" />
              {/* Side Part Detail */}
              <path
                d="M28 15C28 15 30 14.5 32 14.5C34 14.5 36 15 36 15"
                stroke="#0A0A0A"
                strokeWidth="0.5"
              />
              {/* Side Hair */}
              <path
                d="M22 22C22 22 21 24 21 26"
                stroke="#1A1A1A"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M42 22C42 22 43 24 43 26"
                stroke="#1A1A1A"
                strokeWidth="2"
                strokeLinecap="round"
              />
              
              {/* Eyes */}
              <circle cx="27" cy="27" r="1.5" fill="#32363A" className="eye-left" />
              <circle cx="37" cy="27" r="1.5" fill="#32363A" className="eye-right" />
              
              {/* Eyebrows */}
              <path
                d="M24 24C24 24 26 23 28 23"
                stroke="#32363A"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M40 24C40 24 38 23 36 23"
                stroke="#32363A"
                strokeWidth="1"
                strokeLinecap="round"
              />
              
              {/* Nose */}
              <path
                d="M32 30C32 30 31 32 31 33"
                stroke="#E5B89D"
                strokeWidth="0.8"
                strokeLinecap="round"
              />
              
              {/* Mouth - neutral expression */}
              <path
                d="M29 34C29 34 30 35 32 35C34 35 35 34 35 34"
                stroke="#32363A"
                strokeWidth="1"
                strokeLinecap="round"
              />
              
              {/* Neck */}
              <rect x="28" y="38" width="8" height="6" fill="#FDDBB7" />
              
              {/* Suit Jacket - Dark Navy */}
              <path
                d="M20 48C20 48 24 42 32 42C40 42 44 48 44 48L44 64L20 64Z"
                fill="#1A2332"
              />
              
              {/* Suit Lapels */}
              <path
                d="M24 44C24 44 26 42 28 42L32 48"
                fill="#0F1419"
              />
              <path
                d="M40 44C40 44 38 42 36 42L32 48"
                fill="#0F1419"
              />
              
              {/* White Dress Shirt */}
              <path
                d="M28 42L32 48L36 42L34 44L32 52L30 44Z"
                fill="#FFFFFF"
              />
              
              {/* Tie - SAP Blue */}
              <path
                d="M32 42L31 44L31 54L32 58L33 54L33 44L32 42Z"
                fill="#0A6ED1"
              />
              {/* Tie Knot */}
              <rect x="30.5" y="42" width="3" height="3" fill="#085BA8" />
              
              {/* Suit Jacket Buttons */}
              <circle cx="32" cy="52" r="0.8" fill="#2A3A4A" />
              <circle cx="32" cy="56" r="0.8" fill="#2A3A4A" />
              
              {/* Collar Details */}
              <path
                d="M28 44L30 44"
                stroke="#E8EAED"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M36 44L34 44"
                stroke="#E8EAED"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </button>

        {/* Popover Dialog */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 w-80 popover-enter">
            <Card className="border-border shadow-lg">
              <CardContent className="p-0">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border bg-muted/20">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 64 64" fill="none">
                        <circle cx="32" cy="28" r="10" fill="#0A6ED1" opacity="0.6" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-foreground">Assistant</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-muted rounded transition-colors"
                    aria-label="Close assistant"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4 space-y-4">
                  <p className="text-sm text-foreground">
                    Hi, want a quick overview of my experience at SAP?
                  </p>
                  
                  <div className="space-y-2">
                    <button
                      onClick={() => navigateToSection('projects')}
                      className="w-full text-left px-3 py-2 text-sm text-foreground hover:bg-muted rounded transition-colors"
                    >
                      View SAP Projects
                    </button>
                    <button
                      onClick={() => navigateToSection('skills')}
                      className="w-full text-left px-3 py-2 text-sm text-foreground hover:bg-muted rounded transition-colors"
                    >
                      Technical Skills
                    </button>
                    <button
                      onClick={() => navigateToSection('contact')}
                      className="w-full text-left px-3 py-2 text-sm text-foreground hover:bg-muted rounded transition-colors"
                    >
                      Contact Information
                    </button>
                  </div>

                  <div className="pt-3 border-t border-border">
                    <button
                      onClick={handleDismiss}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Dismiss permanently
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <style>{`
        .avatar-container {
          position: relative;
          cursor: pointer;
          background: transparent;
          border: none;
          padding: 0;
          outline: none;
        }

        .avatar-wrapper {
          position: relative;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #FFFFFF;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
          transition: all 0.2s ease;
        }

        .avatar-container:hover .avatar-wrapper {
          box-shadow: 0 2px 8px rgba(10, 110, 209, 0.15);
          outline: 2px solid rgba(10, 110, 209, 0.2);
          outline-offset: 2px;
        }

        .avatar-container:focus-visible .avatar-wrapper {
          outline: 2px solid #0A6ED1;
          outline-offset: 2px;
        }

        .avatar-wrapper.avatar-active .avatar-svg {
          animation: none;
        }

        /* Breathing animation - very subtle */
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.015); }
        }

        .avatar-wrapper:not(.avatar-active):not(.no-motion) .avatar-svg {
          animation: breathe 4s ease-in-out infinite;
        }

        /* Blinking animation - occasional */
        @keyframes blink {
          0%, 96%, 100% { opacity: 1; }
          98% { opacity: 0; }
        }

        .avatar-wrapper:not(.avatar-active):not(.no-motion) .eye-left,
        .avatar-wrapper:not(.avatar-active):not(.no-motion) .eye-right {
          animation: blink 10s ease-in-out infinite;
          animation-delay: 2s;
        }

        /* Micro head movement - very subtle */
        @keyframes micro-move {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(0.5px, -0.3px); }
          50% { transform: translate(-0.3px, 0.2px); }
          75% { transform: translate(0.2px, 0.5px); }
        }

        .avatar-wrapper:not(.avatar-active):not(.no-motion) .avatar-svg {
          animation: breathe 4s ease-in-out infinite, micro-move 25s ease-in-out infinite;
        }

        /* Tilt on open */
        @keyframes tilt-once {
          0% { transform: rotate(0deg); }
          30% { transform: rotate(-3deg); }
          60% { transform: rotate(2deg); }
          100% { transform: rotate(0deg); }
        }

        .avatar-wrapper.avatar-active .avatar-svg {
          animation: tilt-once 0.6s ease-in-out;
        }

        /* Popover enter animation */
        @keyframes popover-enter {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .popover-enter {
          animation: popover-enter 0.2s ease-out;
        }

        /* No motion for accessibility */
        .no-motion .avatar-svg {
          animation: none !important;
        }

        .no-motion .eye-left,
        .no-motion .eye-right {
          animation: none !important;
        }

        .no-motion .popover-enter {
          animation: none !important;
        }
      `}</style>
    </>
  );
}