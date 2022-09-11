import React from 'react'
import {Name} from './Person.types'

type PersonsListProps = {
    names: Name[]
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