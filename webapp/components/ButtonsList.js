export default function ButtonsList({ links }) {
    return (
        <>
            {
                links &&
                <div className="mt-1">
                    {
                        links.map((link, index) => (
                            <span key={link.url}> 
                                { index>0 && <span> • </span> }
                                <a
                                    href={link.url} 
                                    className="btn btn-secondary" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    {link.text}
                                </a>
                            </span>
                        ))
                    }
                </div>
            }
        </>
    );
}