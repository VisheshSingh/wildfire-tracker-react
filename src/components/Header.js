import React from 'react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const Header = () => {
  return (
    <header>
      <h1>
        <Icon icon={locationIcon} /> Wildfire tracker (Powered by NASA)
      </h1>
    </header>
  );
};

export default Header;
