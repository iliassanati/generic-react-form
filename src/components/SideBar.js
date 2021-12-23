import React from 'react';
import { ProSidebar, SidebarHeader, SidebarContent } from 'react-pro-sidebar';

const SideBar = ({ children }) => {
  return (
    <>
      <ProSidebar
        breakPoint='md'
        style={{ height: '100vh', backgroundColor: '#424242', color: 'red' }}
      >
        <SidebarHeader>
          <div className='center-align'>
            <h4 style={{ color: 'wheat' }}>
              <i className='fas fa-exclamation-triangle'></i> Errors
            </h4>
            <br />
            <br />
          </div>
        </SidebarHeader>
        <SidebarContent>{children}</SidebarContent>
      </ProSidebar>
    </>
  );
};

export default SideBar;
