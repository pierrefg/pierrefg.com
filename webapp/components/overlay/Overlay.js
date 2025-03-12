import { IoCloseSharp } from "react-icons/io5";

export default function Overlay({ children, onClose }) {
    return (
        <div 
            className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-between z-50 bg-opacity-90 cursor-pointer"
            onClick={onClose}
        >
            <div className="w-full flex justify-end">
                <IoCloseSharp 
                    className='btn btn-secondary btn-large text-4xl'
                    onClick={onClose}
                />
            </div>
            <div className="flex-grow flex items-center justify-center w-full h-full">
                <div onClick={(e) => e.stopPropagation()} >
                    {children}
                </div>
            </div>
        </div>
    );
}
