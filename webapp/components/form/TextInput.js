export default function TextInput({ type = 'text', label, name, placeholder, rows = "1", disabled = false }) {
    const commonProps = {
        name,
        className: "text-input",
        required: true,
    };

    return (
        <div>
            <label className="block text-small mb-2" htmlFor={name}>
                {label}
            </label>
            {type === 'textarea' ? (
                <textarea
                    {...commonProps}
                    rows={rows}
                    disabled={disabled}
                    placeholder={placeholder}
                />
            ) : (
                <input
                    type={type}
                    {...commonProps}
                    disabled={disabled}
                    placeholder={placeholder}
                />
            )}
        </div>
    );
}