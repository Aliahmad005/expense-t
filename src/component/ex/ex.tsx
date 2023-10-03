import React, { ReactNode } from 'react';

interface BottomDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const BottomDrawer: React.FC<BottomDrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <div className={`fixed inset-x-0 bottom-0 pt-5 pb-8 z-50 bg-gray-800 transition-transform duration-300 transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
     <h1 className='text-white text-2xl antialiased font-semibold ml-5'>Transection</h1>
      <div className="p-4">{children}</div>
      
    </div>
  );
};

export default BottomDrawer;
