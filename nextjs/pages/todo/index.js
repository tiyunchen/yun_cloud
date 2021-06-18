import { useState, useEffect, useMemo} from 'react'
import TodoEdit from "../../components/TodoEdit";
import style from './todo.module.scss'
export default function Todo(){
    const [isCreate, toggleCreate] = useState(false)
    const [content, setContent] = useState('')
     // memo缓存，修改其他状态时，不会重新渲染
    return <div className={style.todo}>
        <h1>欢迎来到 todo 功能，请更新你的todo list</h1>
        <div className="btn-primary mb-8" onClick={()=>toggleCreate(!isCreate)}>新建todo</div>
        {
            isCreate ? <TodoEdit /> : <div dangerouslySetInnerHTML={{__html: content}}></div>
        }
        
    </div>
}