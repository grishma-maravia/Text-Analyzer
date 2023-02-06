import React from 'react';

export default function Alert(props) {
    const capitalize = (type) => {
        const newWord = type.charAt(0).toUpperCase() + type.slice(1);
        return newWord;
    }
    
  return (
    <>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>}
    </>
  )
}