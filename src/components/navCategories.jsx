import React from 'react'


const OrderedList = ({ items, listStyle, listItemStyle }) => {
  const orderedListStyle =  {
    color: '#FFFFFF',
    listStyleType: 'none',
    display: 'flex',
    fontSize: '14px',
    cursor: 'pointer',  
    ...listStyle
  }

  const listItemStyleDefault  = {
    margin: '10px',
    ...listItemStyle
  }

  return (
    <ul style={orderedListStyle}>
        {items.map((item, index) => (
            <li key={index} style={listItemStyleDefault}>{item}</li>
        ))}
    </ul>
  )
}

export default OrderedList







    
