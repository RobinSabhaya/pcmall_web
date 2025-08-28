import type { CSSProperties } from "react";

export interface TitleProps { 
    className?: string;
    containerClassName?: string;
    title: string;
    style?:CSSProperties,
    containerStyle?: CSSProperties;
}