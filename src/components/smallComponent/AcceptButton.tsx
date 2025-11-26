import React from 'react'

type AcceptButtonPropTypes = {
    label: string,
}
 
const AcceptButton = ({label}:AcceptButtonPropTypes) => {
  return (
    <button>
      {label}
    </button>
  )
}

export default AcceptButton
