import "./style.css";

export default function LoaderElement({size}) {
    return (
        <div 
            className="square-loader" 
            style={{
                width: `${size}px`,
                height: `${size}px`,
            }}
        />
    )
}