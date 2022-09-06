import React from 'react'
type PersonsListProps = {
    names: {
        first: string,
        last: string
    }[]
}

const PersonList = (props: PersonsListProps) => {
  return (
    <div>
        {props.names.map((name, index) => {
            return (
                <div key={index}>
                    <h2>{name.first} {name.last}</h2>
                </div>
            )
        })}
    </div>
  )
}

export default PersonList