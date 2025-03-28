import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Header = () => {
    return (
        <div className='px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex justify-between items-center show-small '>
            <Image src={"./logo.svg"} alt='logo' width={180} height={100} />
            <Button className="bg-indigo-500">Get Started</Button>
        </div>
    );
}

export default Header;
