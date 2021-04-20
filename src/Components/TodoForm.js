import React,{Fragment, useState} from 'react'

function TodoForm({filtere}) {
    const [filtername,serfiltername]=useState('')
    const Filter=(e)=>{
const name=e.target.value;
serfiltername(name)
filtere(name)
    }
    return (
        <Fragment>
            <input value={filtername}
            onChange={Filter}
            />
        </Fragment>
    )
}

export default TodoForm
