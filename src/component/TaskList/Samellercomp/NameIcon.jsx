import React from 'react'

const NameIcon = ({firstName, lastName}) => {
    const firstLetter = firstName.charAt(0).toUpperCase();
  
    // Get the second letter of the last name
    const secondLetter = lastName.length > 1 ? lastName.charAt(0).toUpperCase() : '';
  
    // Combine the first and second letters
    const iconText = firstLetter + secondLetter;
  
    // Inline styling for the icon
    const iconStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '30px',
      height: '30px',
      backgroundColor: '#3498db',
      color: 'white',
      borderRadius: '50%',
      fontSize: '14px',
      fontWeight: '',
      textTransform: 'uppercase',
    };
  
  return (
    <>
    <div style={iconStyle}>
      {iconText}
    </div>
    </>
  )
}

export default NameIcon