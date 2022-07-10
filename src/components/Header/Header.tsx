import React from 'react';

import { Logo } from '../Logo/Logo';
import Filter from '../../features/filter/Filter';
import ToggleDarkMode from '../../features/theme/ToggleTheme';

const Header: React.FC = () => {
  return (
    <header>
      <Logo />
      <div className="flex items-center justify-between">
        <Filter />
        <ToggleDarkMode />
      </div>
    </header>
  );
};

export default Header;
