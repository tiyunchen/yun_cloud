import { useState, useEffect, useMemo} from 'react'
import Editor from '../../components/Editor/index'
import style from './todo.module.scss'
let editor = null; // 缓存，后面卸载
let test = false
export default function Todo(){
    const [isCreate, toggleCreate] = useState(false)
    const [content, setContent] = useState('')
     // memo缓存，修改其他状态时，不会重新渲染
     
    useEffect(()=>{
        console.log('test变了', test)
    }, [test])
    
    return <div className={style.todo}>
        <h1>欢迎来到 todo 功能，请更新你的todo list</h1>
        <div className="btn-primary" onClick={()=>{
            toggleCreate(!isCreate)
            test = !test
        }}>新建todo</div>
        {
            isCreate ? <div>

                <Editor elId={'create-new'} 
                    onchange={(html)=>{

                        setContent(html)
                        window.a = html
                        console.log('new html', html)
                    }}
            placeholder='请输入 TODO 标题'

            />
            <div className="btn-primary" onClick={()=>toggleCreate(false)}>保存</div>
            </div> : <div dangerouslySetInnerHTML={{__html: content}}></div>
        }
        
    </div>
}