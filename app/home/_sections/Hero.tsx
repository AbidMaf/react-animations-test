import * as motion from "motion/react-client"
import Image from 'next/image';
import { Text } from '@/app/_components';
// import React, { useEffect, useState } from "react";
import { RolesText } from '../_components';

const Hero = () => {
    // const [rolesIndex, setRolesIndex] = useState<number>(0);
    // const roles = ['Front-end Developer', 'Web Developer', 'Graphic Designer'];

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setRolesIndex((prev) => (prev + 1) % roles.length);
    //     }, 2000);

    //     return () => clearInterval(interval);
    // }, [roles.length]);

    return (
        <section className="bg-zinc-950 w-screen h-screen p-10 overflow-hidden">
            <div className="flex flex-col h-full justify-between">
                <div className="flex flex-col">
                    <div className="flex">
                        <motion.div initial={{ opacity: 0, y: -100 }} animate={{ y: 0, opacity: 1, transition: { duration: .5, delay: .5 } }}>
                            <Text size="text-9xl" weight='font-black' value="Abid" />
                        </motion.div>
                    </div>
                    <motion.div initial={{ opacity: 0, x: 100 }} animate={{ x: 0, opacity: 1, transition: { duration: .5, delay: .7 } }}>
                        <Text size="text-9xl" weight='font-black' value="Mafahim" />
                    </motion.div>
                </div>

                <RolesText roles={['Front-end Developer', 'Web Developer', 'Graphic Designer', 'Penetration Tester']} />
            </div>
            <div className="absolute bottom-0 right-0 w-3/4 h-full z-0 overflow-hidden translate-y-50 translate-x-30">
                <motion.div
                    className='absolute bottom-0 right-0 overflow-hidden'
                    initial={{ rotate: 360 }}
                    animate={{ rotate: 0 }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                >
                    <Image src="/icons/Star.svg" height={640} width={640} priority alt='' className='' style={{objectFit: "contain"}} />
                </motion.div>
            </div>
        </section>
    )
}

export default Hero;