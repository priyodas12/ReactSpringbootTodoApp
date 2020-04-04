
import React from 'react'

function ShowSuccessMessageDetails(props){
    if(props.showSuccessMessage){
      return <div>Login Successful</div>
    }
    return null;
}

export default ShowSuccessMessageDetails;
