import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

interface TextProps {
    value: string;
    size?: "text-xs" | "text-sm" | "text-base" | "text-lg" | "text-xl" | "text-2xl" | "text-3xl" | "text-4xl" | "text-5xl" | "text-6xl" | "text-7xl" | "text-8xl" | "text-9xl";
    color?: string;
    weight?: "font-thin" | "font-extralight" | "font-light" | "font-normal" | "font-medium" | "font-semibold" | "font-bold" | "font-extrabold" | "font-black";
    className?: string;
    fontFamily?: string;
    style?: React.CSSProperties;
    // children?: React.ReactNode | string;
}


const Text = ({ 
    value, 
    size = "text-base", 
    color = "text-white",
    weight = "font-normal",
    className, 
    fontFamily = spaceGrotesk.className, 
    style }: TextProps
) => {
    return (
        <span className={`${className} ${size} ${fontFamily} ${weight} ${color}`} style={ style }>{ value }</span>
    )
}

export default Text;