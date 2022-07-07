import React, { FC } from "react";

interface Props {
    title?: string;
}


const TextView: FC<Props> = ({
    title,

}) => {
    return (
        <h1>{title}</h1>
    )
}

export default TextView;