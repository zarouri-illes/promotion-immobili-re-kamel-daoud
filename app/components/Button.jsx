import Link from 'next/link';
import React from 'react'

const Button = (props) => {
    return (
        <Link href="/">
            <button className='text-xl font-semibold capitalize text-primary'>
            {props.title}
            </button>
        </Link>
    )
}

export default Button;
