import { ReactElement } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";
import { X } from "lucide-react";

interface ModalProps {
    isOpen?: boolean;
    onClose?: () => void,
    body?: ReactElement;
    footer?: ReactElement;
    isStep?: boolean;
}


export default function Modal({
    isOpen,
    onClose,
    body,
    footer,
}: ModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className='bg-black'>
                <button className='p-1 border-0 text-white hover:opacity-70 transition w-fit'>
                    <X size={28} onClick={onClose}/>
                </button>
                <div className="mt-4">{body}</div>
                {footer && <div className="mt-4">{footer}</div>}
            </DialogContent>
        </Dialog>
    )
}
