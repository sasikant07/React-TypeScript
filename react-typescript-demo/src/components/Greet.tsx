import React from 'react'

type GreetProps = {
    name: string,
    countNumber: number
    isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
  return (
    <div>
        <h2>
            {props.isLoggedIn ? 'Welcome {props.name}! You have {props.countNumber} unread messages.': 'Welcome Guest.'}
        </h2>
    </div>
  )
}

export default Greet