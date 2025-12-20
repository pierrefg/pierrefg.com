import { IoCloseSharp } from "react-icons/io5";

export default function Overlay({ children, onClose }) {
    return (
        <div 
            className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-between z-50 bg-opacity-90 cursor-pointer"
            onClick={onClose}
        >
            <IoCloseSharp 
                className='btn btn-secondary btn-large text-4xl z-50 absolute top-4 right-4 cursor-pointer'
                onClick={onClose}
            />
            <div 
                className="flex-grow flex items-center justify-center w-full h-full z-40"
            >
                {children}
            </div>
        </div>
    );
}
