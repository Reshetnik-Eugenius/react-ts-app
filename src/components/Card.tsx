import React, { FunctionComponent, ReactNode, useState } from 'react'

export enum CardfVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string,
    height?: string,
    variant: CardfVariant,
    children?: ReactNode,
    onClick: (num: number) => void
}

// const Card = ({width, height, children}: CardProps) => {
const Card: FunctionComponent<CardProps> = ({width, height,variant, children, onClick}) => {
    const [state, setState] = useState(0);

    return (
        <div 
            style={{
                width, 
                height, 
                // background:'gray'
                // border: '1px solid lightgray'
                border: variant === CardfVariant.outlined ? '1px solid lightgray' : 'none',
                background: variant === CardfVariant.primary ? 'lightgray' : ''
            }}
            // onClick = {onClick}
            onClick = {() => onClick(state)}
        >
            {children}
        </div>
    )
}

export default Card