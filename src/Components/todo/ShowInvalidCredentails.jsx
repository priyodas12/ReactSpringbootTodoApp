import React from 'react'

function ShowInvalidCredentails(props){
    if(props.hasLoginFailed){

      return <div>Invalid Credentials</div>
    }
    return null;
}

export default ShowInvalidCredentails
