import Link from "next/link";

export default function SimpleLink({content, key=null, primary=false, large=false, onClick=null, active=false}) {
    return (
        <Link 
            key={key}
            className={`btn py-1 ${primary ? 'btn-primary' : 'btn-secondary'} ${large && 'btn-large'} ${active && 'active'}`}
            href={ content.link + (content.anchor ? `#${content.anchor}`: '') }
            onClick={onClick}
            target={ content.extern && '_blank' }
        >
            {content.icon && content.icon} { content.title && content.title }
        </Link>
    )
}