import React from 'react';
function Service(props){
  return (
    <div className="mi-service">
      <span className="mi-service-icon">
        
      </span>
      <h5>{props.content.title}</h5>
      <p>{props.content.details}</p>
    </div>
  )
}

export default Service;
