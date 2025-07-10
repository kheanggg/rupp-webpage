'use client';

import { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import NavLinkContent from './NavLinkContent';

const navLinks = ["About Us", "Academics", "Admissions", "News & Events", "Contact Us"];

const positionMap = {
  "About Us": "pl-[41.5%]",
  "Academics": "pl-[46.4%]",
  "Admissions": "pl-[52%]",
  "News & Events": "pl-[57.6%]",
  "Contact Us": "pl-[64.5%]",
};

export default function Header() {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div className="bg-white w-full relative z-50">
      {/* Wrap everything in one hover area */}
      <div
        className="relative"
        onMouseLeave={() => setHoveredLink(null)}
      >
        {/* Top Header */}
        <div className="max-w-7xl mx-auto px-4 h-20 grid grid-cols-[25%_65%_10%] items-center">
          {/* Logo */}
          <div>
            <img src="RUPP_Header.png" className="h-16 cursor-pointer" />
          </div>

          {/* Nav Links */}
          <div className="flex space-x-8 justify-center">
            {navLinks.map((label) => (
              <div key={label} className="relative group">
                <a
                  href="#"
                  onMouseEnter={() => setHoveredLink(label)}
                  className="text-[#000000] hover:text-[#EF3737] font-semibold cursor-pointer text-sm"
                >
                  {label}
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#EF3737] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </div>
            ))}
          </div>

          {/* Icons */}
          <div className="grid grid-cols-3 h-16 place-items-center">
            <LanguageIcon style={{ fontSize: '28px' }} className="text-[#000000] hover:text-[#EF3737] cursor-pointer" />
            <SearchIcon style={{ fontSize: '28px' }} className="text-[#000000] hover:text-[#EF3737] cursor-pointer" />
            <SettingsIcon style={{ fontSize: '28px' }} className="text-[#000000] hover:text-[#EF3737] cursor-pointer" />
          </div>
        </div>

        {/* Dropdown */}
        {hoveredLink && (
          <div className="absolute top-full left-0 w-full">
            <div className={`transition-all duration-500 bg-white shadow-md rounded-md ${positionMap[hoveredLink]}`}>
              <NavLinkContent activeLabel={hoveredLink} />
            </div>
          </div>
        )}
      </div>
    </div>

  );
}