import { useState, useEffect} from 'react'
export default function Todo(){
    const [isEdit, setEdit] = useState(false)
    return <div>todo 功能 
        <button onClick={()=>setEdit(!isEdit)}>
        {isEdit ? '编辑中' : '编辑'}    
        </button>
    </div>
}