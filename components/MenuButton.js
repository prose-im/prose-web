export default function MenuButton({ onClick, routeChanged }) {
  const css = `.nc-int-menu-to-close{--transition-duration:.25s}.nc-int-menu-to-close :nth-child(1),.nc-int-menu-to-close :nth-child(2){transition:opacity 0s calc(var(--transition-duration)/2),transform calc(var(--transition-duration)/2) calc(var(--transition-duration)/2) cubic-bezier(.86,0,.07,1)}.nc-int-menu-to-close :nth-child(1){transform-origin:16px 9px}.nc-int-menu-to-close :nth-child(2){transform-origin:16px 23px}.nc-int-menu-to-close :nth-child(3),.nc-int-menu-to-close :nth-child(4){opacity:0;transform-origin:50% 50%;transition:transform calc(var(--transition-duration)/2) cubic-bezier(.86,0,.07,1),opacity 0s calc(var(--transition-duration)/2)}.nc-int-menu-to-close.nc-int-icon-state-b :nth-child(1),.nc-int-menu-to-close.nc-int-icon-state-b :nth-child(2){transition:transform calc(var(--transition-duration)/2) cubic-bezier(.86,0,.07,1),opacity 0s calc(var(--transition-duration)/2);opacity:0}.nc-int-menu-to-close.nc-int-icon-state-b :nth-child(1){transform:translateY(7px)}.nc-int-menu-to-close.nc-int-icon-state-b :nth-child(2){transform:translateY(-7px)}.nc-int-menu-to-close.nc-int-icon-state-b :nth-child(3),.nc-int-menu-to-close.nc-int-icon-state-b :nth-child(4){opacity:1;transition:opacity 0s calc(var(--transition-duration)/2),transform calc(var(--transition-duration)/2) calc(var(--transition-duration)/2) cubic-bezier(.86,0,.07,1)}.nc-int-menu-to-close.nc-int-icon-state-b :nth-child(3){transform:rotate(45deg)}.nc-int-menu-to-close.nc-int-icon-state-b :nth-child(4){transform:rotate(-45deg)}`;

  return (
    <button className="nav-menu-toggle" onClick={onClick}>
      <svg id="menuIcon" height="24" width="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <g className="js-nc-int-icon nc-int-menu-to-close">
            <line fill="none" stroke="currentColor" x1="2" x2="30" y1="9" y2="9" />
            <line fill="none" x1="30" x2="2" y1="23" y2="23" />
            <line fill="none" stroke="currentColor" x1="30" x2="2" y1="16" y2="16" />
            <line fill="none" x1="30" x2="2" y1="16" y2="16" />
          </g>
          <style>{css}</style>
        </g>
      </svg>
    </button>
  );
}
