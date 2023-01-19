import React from 'react'

function Alert (props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {props.alert.msg}:{props.alert.type}
            
    </div>
  )
}

export default Alert 