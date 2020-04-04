
import React from 'react'

const ShowSuccessMessageDetails=(props)=>{
    if(props.showSuccessMessage){
      return <div>Login Successful</div>
    }
    return null;
}

export default ShowSuccessMessageDetails;
