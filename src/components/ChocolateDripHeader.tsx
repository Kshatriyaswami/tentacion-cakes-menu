import React from 'react';

const ChocolateDripHeader: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 overflow-hidden translate-y-full pointer-events-none">
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        {/* Main chocolate bar */}
        <rect fill="hsl(var(--chocolate))" x="0" y="0" width="1440" height="12" />
        
        {/* Dripping chocolate drops - varied sizes like visiting card */}
        {/* Large drops */}
        <ellipse fill="hsl(var(--chocolate))" cx="60" cy="12" rx="18" ry="35" />
        <ellipse fill="hsl(var(--chocolate))" cx="200" cy="12" rx="20" ry="42" />
        <ellipse fill="hsl(var(--chocolate))" cx="380" cy="12" rx="16" ry="32" />
        <ellipse fill="hsl(var(--chocolate))" cx="520" cy="12" rx="22" ry="48" />
        <ellipse fill="hsl(var(--chocolate))" cx="700" cy="12" rx="18" ry="38" />
        <ellipse fill="hsl(var(--chocolate))" cx="860" cy="12" rx="20" ry="45" />
        <ellipse fill="hsl(var(--chocolate))" cx="1020" cy="12" rx="17" ry="34" />
        <ellipse fill="hsl(var(--chocolate))" cx="1180" cy="12" rx="21" ry="50" />
        <ellipse fill="hsl(var(--chocolate))" cx="1340" cy="12" rx="19" ry="40" />
        
        {/* Medium drops */}
        <ellipse fill="hsl(var(--chocolate))" cx="130" cy="12" rx="12" ry="22" />
        <ellipse fill="hsl(var(--chocolate))" cx="280" cy="12" rx="14" ry="26" />
        <ellipse fill="hsl(var(--chocolate))" cx="450" cy="12" rx="13" ry="24" />
        <ellipse fill="hsl(var(--chocolate))" cx="610" cy="12" rx="15" ry="28" />
        <ellipse fill="hsl(var(--chocolate))" cx="780" cy="12" rx="12" ry="20" />
        <ellipse fill="hsl(var(--chocolate))" cx="940" cy="12" rx="14" ry="25" />
        <ellipse fill="hsl(var(--chocolate))" cx="1100" cy="12" rx="13" ry="23" />
        <ellipse fill="hsl(var(--chocolate))" cx="1260" cy="12" rx="15" ry="27" />
        <ellipse fill="hsl(var(--chocolate))" cx="1400" cy="12" rx="12" ry="21" />
        
        {/* Small drops for detail */}
        <ellipse fill="hsl(var(--chocolate))" cx="95" cy="12" rx="8" ry="14" />
        <ellipse fill="hsl(var(--chocolate))" cx="240" cy="12" rx="9" ry="16" />
        <ellipse fill="hsl(var(--chocolate))" cx="330" cy="12" rx="7" ry="12" />
        <ellipse fill="hsl(var(--chocolate))" cx="485" cy="12" rx="10" ry="18" />
        <ellipse fill="hsl(var(--chocolate))" cx="565" cy="12" rx="8" ry="13" />
        <ellipse fill="hsl(var(--chocolate))" cx="655" cy="12" rx="9" ry="15" />
        <ellipse fill="hsl(var(--chocolate))" cx="740" cy="12" rx="7" ry="11" />
        <ellipse fill="hsl(var(--chocolate))" cx="820" cy="12" rx="10" ry="17" />
        <ellipse fill="hsl(var(--chocolate))" cx="900" cy="12" rx="8" ry="14" />
        <ellipse fill="hsl(var(--chocolate))" cx="980" cy="12" rx="9" ry="16" />
        <ellipse fill="hsl(var(--chocolate))" cx="1060" cy="12" rx="7" ry="12" />
        <ellipse fill="hsl(var(--chocolate))" cx="1140" cy="12" rx="10" ry="18" />
        <ellipse fill="hsl(var(--chocolate))" cx="1220" cy="12" rx="8" ry="13" />
        <ellipse fill="hsl(var(--chocolate))" cx="1300" cy="12" rx="9" ry="15" />
        <ellipse fill="hsl(var(--chocolate))" cx="1380" cy="12" rx="7" ry="11" />
        
        {/* Highlight/shine effect on drops */}
        <ellipse fill="hsl(var(--chocolate-light))" opacity="0.3" cx="200" cy="18" rx="6" ry="10" />
        <ellipse fill="hsl(var(--chocolate-light))" opacity="0.3" cx="520" cy="20" rx="7" ry="12" />
        <ellipse fill="hsl(var(--chocolate-light))" opacity="0.3" cx="860" cy="18" rx="6" ry="11" />
        <ellipse fill="hsl(var(--chocolate-light))" opacity="0.3" cx="1180" cy="22" rx="7" ry="13" />
      </svg>
    </div>
  );
};

export default ChocolateDripHeader;
