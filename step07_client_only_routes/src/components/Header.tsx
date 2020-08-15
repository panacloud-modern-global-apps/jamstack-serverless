import React from 'react';

type HeaderProps = {
    text: string,
    subtext?: string
}

export default ({text, subtext}: HeaderProps) => {
    return (
        <div>
            <h3>{text}</h3>
            <h4>{subtext}</h4>
        </div>
    );
}