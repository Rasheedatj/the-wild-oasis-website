import Link from 'next/link';
import SideNavigation from '../_components/SideNavigation';

function layout({ children }) {
  return (
    <div className='grid h-full gap-12 grid-cols-[16rem_1fr]'>
      <SideNavigation />
      <main>{children}</main>
    </div>
  );
}

export default layout;
