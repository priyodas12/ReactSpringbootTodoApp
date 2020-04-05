import React from 'react'

const ShowInvalidCredentails=(props)=>{
    if(props.hasLoginFailed){

      return <div>Invalid Credentials</div>
    }
    return null;
}

export default ShowInvalidCredentails
