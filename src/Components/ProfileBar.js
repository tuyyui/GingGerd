import React from 'react'

export default function ProfileBar(props) {

    
    var name, profilepicture
    if(props.user != null){
        name = props.user.displayName
    }
    return (
        <div>
            <h3>{name}</h3>
        </div>
    )
}
