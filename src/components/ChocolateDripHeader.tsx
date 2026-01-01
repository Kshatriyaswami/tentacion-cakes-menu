import React from 'react';

const ChocolateDripHeader: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden translate-y-full">
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{ minWidth: '1200px' }}
      >
        <path
          fill="hsl(var(--chocolate))"
          d="M0,0 L0,15 Q15,15 15,25 Q15,40 35,40 Q55,40 55,20 Q55,15 85,15 L85,0 Z 
             M85,0 L85,15 Q115,15 115,30 Q115,45 145,45 Q175,45 175,22 Q175,15 205,15 L205,0 Z 
             M205,0 L205,15 Q235,15 235,35 Q235,55 270,55 Q305,55 305,28 Q305,15 335,15 L335,0 Z 
             M335,0 L335,15 Q365,15 365,22 Q365,38 395,38 Q425,38 425,18 Q425,15 455,15 L455,0 Z 
             M455,0 L455,15 Q485,15 485,42 Q485,58 520,58 Q555,58 555,25 Q555,15 585,15 L585,0 Z 
             M585,0 L585,15 Q615,15 615,32 Q615,48 650,48 Q685,48 685,22 Q685,15 715,15 L715,0 Z 
             M715,0 L715,15 Q745,15 745,28 Q745,42 780,42 Q815,42 815,18 Q815,15 845,15 L845,0 Z 
             M845,0 L845,15 Q875,15 875,38 Q875,55 910,55 Q945,55 945,30 Q945,15 975,15 L975,0 Z 
             M975,0 L975,15 Q1005,15 1005,24 Q1005,42 1040,42 Q1075,42 1075,26 Q1075,15 1105,15 L1105,0 Z 
             M1105,0 L1105,15 Q1135,15 1135,32 Q1135,48 1165,48 Q1195,48 1195,22 Q1195,15 1200,15 L1200,0 Z"
        />
      </svg>
    </div>
  );
};

export default ChocolateDripHeader;
