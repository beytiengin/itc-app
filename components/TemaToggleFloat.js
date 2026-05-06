'use client';

import TemaSecici from './TemaSecici';

export default function TemaToggleFloat() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.2rem',
        right: '1.2rem',
        zIndex: 90,
        opacity: 0.65,
        transition: 'opacity 0.25s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
      onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.65'; }}
    >
      <TemaSecici />
    </div>
  );
}
