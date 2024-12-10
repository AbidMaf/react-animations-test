'use client';

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Text } from '@/app/_components';

const RolesText = ({ roles }: { roles: string[] }) => {
    const [rolesIndex, setRolesIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRolesIndex((prev) => (prev + 1) % roles.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [roles.length]);

    return (
        <motion.div 
            initial={{ opacity: 0, y: -100 }} 
            animate={{ y: 0, opacity: 1, transition: { duration: .5, delay: .5 } }} 
            className="flex"
        >
            <Text value="Your " size="text-3xl" weight="font-light" /> 
            <AnimatePresence>
                <motion.div
                    key={roles[rolesIndex]}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: .5, delay: 1 }}
                    className="flex flex-col relative"
                >
                    <Text className="ml-2 absolute text-nowrap" size="text-3xl" weight='font-semibold' value={`${ roles[rolesIndex] }`} />
                </motion.div>
            </AnimatePresence>
        </motion.div>
    )
};

export default RolesText;