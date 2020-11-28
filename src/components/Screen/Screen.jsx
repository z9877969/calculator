import React from 'react';

const Screen = ({handlerValue, value}) => (
    <form>
        <input type="number" value={value} onChange={handlerValue}/>
    </form>
)

export default Screen;