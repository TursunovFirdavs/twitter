import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface buttonType {
    label: ReactNode | string;
    disabled?: boolean;
    fullWidth?: boolean;
    large?: boolean;
    outline?: boolean;
    secondary?: boolean;
    type?: 'button' | 'submit';
    onclick?: () => void
}

export default function Button({label, disabled, fullWidth, large, outline, secondary, type, onclick} : buttonType) {
  return (
    <button
        disabled={disabled}
        onClick={onclick}
        type={type}
        className={cn('rounded-full font-semibold border transition hover:opacity-80 disabled:opacity-70 disabled:cursor-not-allowed',
        fullWidth ? 'w-full' : 'w-fit',
        secondary ? 'bg-white text-black' : 'bg-sky-500 text-white',
        large? 'text-xl px-5 py-3' : 'text-md px-4 py-3',
        outline ? 'bg-transparent border-slate-600 text-sky-500 hover:bg-slate-800/40' : ''
        )}
    >
        {label}
    </button>
  )
}
