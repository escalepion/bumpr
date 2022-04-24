import React from 'react';

const Input = (props) => {
  return (
    <div>
      {!!props.label && (
        <div className='mb-2'>
          {props.icon && <i class={`fa-solid fa-${props.icon}`} style={{ color: '#FF733C' }}></i>}
          <span className='font-bold ml-2'>{props.label}</span>
        </div>
      )}
      <input className="w-full border boder-active-bg-dark border-active-bg-dark rounded-full px-4 py-4" {...props} />
    </div>
  );
}

export default Input;
