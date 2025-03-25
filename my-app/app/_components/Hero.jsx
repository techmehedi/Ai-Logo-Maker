"use client"
import React, { useState } from 'react';
import Lookup from '../_data/Lookup';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
const Hero = () => {

    const [logoTitle,setLogoTitle] = useState()

    return (
        <div className='flex items-center mt-32 flex-col gap-5'>
            <h2 className='text-indigo-500 text-5xl text-center font-bold'>{Lookup.HeroHeading}</h2>
            <h2 className='text-5xl text-center font-bold'>{Lookup.HeroSubheading}</h2>
            <h2 className='text-lg text-gray-500 text-center'>{Lookup.HeroDesc}</h2>

            <div className='flex gap-6 w-full max-w-2xl mt-10'>
                <input placeholder={Lookup.InputTitlePlaceholder} className='p-3 border rounded-md w-full shadow-md ' 
                    onChange={(event) => setLogoTitle(event?.target.value)}                
                />
                <Link href={'/create?title='+logoTitle}>
                    <Button className="bg-indigo-500 w-half p-6">Get Started</Button>
                </Link>
            </div>
        </div>
    );
}

export default Hero;
