import React, { useState } from 'react';

const Onebox = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = isDarkMode ? 'bg-black text-white' : 'bg-white text-black';
  const sidebarClasses = isDarkMode ? 'bg-zinc-900' : 'bg-gray-200';
  const headerClasses = `py-4 px-6 border-b ${isDarkMode ? 'bg-zinc-900 border-gray-700' : 'bg-gray-100 border-gray-300'}`;
  const iconColor = isDarkMode ? 'ffffff' : '000000';
  const contentBackgroundColor = isDarkMode ? 'bg-gray-800' : 'bg-gray-200';

  return (
    <div className={`flex h-screen ${themeClasses}`}>
   
      <aside className={`w-20 ${sidebarClasses} flex flex-col items-center py-4`}>
        <div className="flex flex-col items-center space-y-6 flex-grow">
        
          <a href="#" className="text-white">
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

        <main className="flex-grow flex ">
       
          <aside className={`w-1/4 p-4 ${sidebarClasses}`}>
            <div className="flex justify-between items-center ">
              <h4 className="font-semibold ">All Inbox(es)</h4>
              <button className="focus:outline-none">
                <img src={`https://img.icons8.com/ios-glyphs/24/${iconColor}/refresh.png`} alt="Refresh Icon" />
              </button>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Search"
                className={`w-full p-2 rounded ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}
              />
              <div className="mt-4 flex justify-between">
                <p>26 New Replies</p>
                <p>Newest</p>
              </div>
            </div>
            <div className="inbox-list mt-4">
           
              <div className="email-item">
                <p><strong>Beata@gmail.com</strong></p>
                <p>I've tried a lot and.</p>
                <p>Interested</p>
              </div>
              
            </div>
          </aside>

        
          <div className="flex-grow p-4">
          
            <div className={`email-content mt-4 p-4 rounded-md ${contentBackgroundColor}`}>
              <p><strong>New Product Launch</strong></p>
              <p><strong>From:</strong> jeanne@icloud.com</p>
              <p><strong>To:</strong> lennon.j@mail.com</p>
              <p>Hi {`{FIRST_NAME}`},</p>
              <p>I would like to introduce you to SaaSgrow, a productized design service specifically tailored for SaaS startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.</p>
               
            </div>
            <div className="mt-9 flex justify-end">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                  Reply
                </button>
              </div>
          </div>
        

          <aside className={`w-1/4 p-4 ${sidebarClasses}`}>
          
            <div className={`lead-details mb-8 p-4 rounded-md ${contentBackgroundColor}`}>
              <h6 className="font-semibold">Lead Details</h6>
            
            </div>

            <div className={`activities p-4 rounded-md ${contentBackgroundColor}`}>
              <h6 className="font-semibold">Activities</h6>
              
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default Onebox;
