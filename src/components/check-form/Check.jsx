import React from 'react';
import './check.css'

const Check = () => {
    return (
        <div>
            <form className='check'>
                <input className='check-input' type="text" placeholder='check in date'/>
                <input className='check-input' type="text" placeholder='check out date'/>
                <input className='check-input' type="text" placeholder='rooms'/>
                <input className='submit-info' type="submit"/>
            </form>
        </div>
    )
}

export default Check;
