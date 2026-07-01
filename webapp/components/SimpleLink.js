import Link from "next/link";
import Image from "next/image";

export default function SimpleLink({content, linkKey=null, primary=false, large=false, onClick=null, active=false}) {
    return (
        <Link 
            key={linkKey}
            className={`btn py-1 ${primary ? 'btn-primary' : 'btn-secondary'} ${large && 'btn-large'} ${active && 'active'}`}
            href={ content.link + (content.anchor ? `#${content.anchor}`: '') }
            onClick={onClick}
            target={ content.extern && '_blank' }
        >
            {
                content.img && 
                <Image 
                    src={content.img} 
                    alt='cover'
                    width={25} height={25} 
                    className="inline" 
                />
            }
            {content.icon && content.icon} { content.title && content.title }
        </Link>
    )
}