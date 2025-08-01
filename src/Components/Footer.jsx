import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-indigo-700 border-b border-indigo-500 sticky bottom-0">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center">
            <div className="text-white text-md text-center font-bold">
              &copy; React 2025{' '}
              <p>
                {new Date().toLocaleDateString('en-NG', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'

                 })}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
