

import React, { useState } from 'react';

const Dashboard = () => {
 
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = isDarkMode ? 'bg-black text-white' : 'bg-white text-black';
  const sidebarClasses = isDarkMode ? 'bg-zinc-900' : 'bg-gray-200';
  const headerClasses = `py-4 px-6 border-b ${isDarkMode ? 'bg-zinc-900 border-gray-700' : 'bg-gray-100 border-gray-300'}`;
  const iconColor = isDarkMode ? 'ffffff' : '000000';

  return (
    <div className={`flex h-screen ${themeClasses}`}>
   
      <aside className={`w-20 ${sidebarClasses} flex flex-col items-center py-4`}>
        <div className="flex flex-col items-center space-y-6 flex-grow">
       
          <a href="/onebox" className="text-white">
            <img src={`https://img.icons8.com/material-outlined/24/${iconColor}/mailbox-closed-flag-up.png`} alt="Inbox Icon" />
          </a>
          <a href="#" className="text-white">
            <img src={`https://img.icons8.com/material-outlined/24/${iconColor}/home.png`} alt="Home Icon" />
          </a>
          <a href="#" className="text-white">
            <img src={`https://img.icons8.com/material-outlined/24/${iconColor}/contacts.png`} alt="Contacts Icon" />
          </a>
          <a href="#" className="text-white">
            <img src={`https://img.icons8.com/material-outlined/24/${iconColor}/secured-letter.png`} alt="Messages Icon" />
          </a>
          <a href="#" className="text-white">
            <img src={`https://img.icons8.com/material-outlined/24/${iconColor}/rocket.png`} alt="Projects Icon" />
          </a>
          <a href="#" className="text-white">
            <img src={`https://img.icons8.com/material-outlined/24/${iconColor}/combo-chart.png`} alt="Analytics Icon" />
          </a>
        </div>

  
        <div className="mt-8 mb-4">
          <a href="#" className="text-white">
            <img
              src="https://via.placeholder.com/40" 
              alt="User Icon" 
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </a>
        </div>
      </aside>

    
      <div className={`flex-grow flex flex-col border-l ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
       
        <header className={`flex justify-between items-center ${headerClasses}`}>
          <h1 className="font-semibold">Onebox</h1>
          <div className="flex items-center space-x-4">
          
            <button 
              onClick={toggleTheme} 
              className="focus:outline-none transform transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95"
            >
              <img src={`https://img.icons8.com/ios-glyphs/24/${iconColor}/sun.png`} alt="Toggle Icon" />
            </button>
          
            <div>Tim’s Workspace</div>
          </div>
        </header>

       
        <main className="flex-grow flex items-center justify-center p-4">
      
          <div className="text-center">
            <img
              src={`https://cdn.iconscout.com/icon/premium/png-256-thumb/mail-letter-email-post-document-important-paper-office-32190.png`} 
              alt="Opened Mail Icon"
              className="mx-auto mb-6"
            />
            <h2 className="text-2xl font-semibold">It's the beginning of a legendary sales pipeline..</h2>
            <p className="mt-2 text-sm">
              When you have inbound E-mails <p>you will see them here</p>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
