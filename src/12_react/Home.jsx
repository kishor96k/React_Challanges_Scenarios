import React, { useRef, useState } from 'react';

const Home = () => {
    const textToCopyRef = useRef(null);
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
        // Select the text inside the input field
        textToCopyRef.current.select();
        // Execute the copy command
        document.execCommand('copy');
        // Deselect the text
        window.getSelection().removeAllRanges();

        // Set a state to indicate that the text has been copied
        setIsCopied(true);

        // Reset the copied state after a brief delay (e.g., 2 seconds)
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

    return (
        <>
            <div className="mt-4 p-5">
                <strong><p>Copy Clipboard in React JS</p></strong>
            </div>
            <label>Text to Copy:</label>
            <input ref={textToCopyRef} type="text" defaultValue="Hello, world!" />
            <button type="button" onClick={handleCopyClick}>
                Copy to Clipboard
            </button>
            {isCopied && <p style={{ color: 'green' }}>Copied to Clipboard!</p>}
        </>
    );
};

export default Home;
