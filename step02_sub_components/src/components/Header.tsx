import React from 'react';

type HeaderProps = {
    text: string,
    subtext?: string
}

export default ({text, subtext}: HeaderProps) => {
    return (
        <div>
            <h1>{text}</h1>
            <h3>{subtext}</h3>
        </div>
    );
}