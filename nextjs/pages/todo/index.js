import { useState, useEffect, useMemo} from 'react'
import TodoEdit from "../../components/TodoEdit";
import {uuid} from '../../utils/index'
import styles from './todo.module.scss'

export default function Todo(){
    const [isCreate, toggleCreate] = useState(false)
    const [content, setContent] = useState('')
    const [todoList, setList] = useState([])
    useEffect(()=>{
        getTodoList()
    }, [])

    /**
     * 获取todo 清单
     */
    const getTodoList = () =>{
        const stringList = localStorage.getItem('todoList')
        const todoList  = stringList ? JSON.parse(stringList) : []
        setList(todoList)

    }

    /**
     * 保存数据
     */
    const saveData = (data) => {

        const temp = {
            create_time: (new Date()).toString(),
            _id: uuid(),
            content: data,
            finish: false,
            children: []
        }

        const stringList = localStorage.getItem('todoList')
        const todoList  = stringList ? JSON.parse(stringList) : []
        todoList.push(temp)
        toggleCreate(false)
        setContent(todoList)
        localStorage.setItem('todoList', JSON.stringify(todoList))
        getTodoList()
    }
     // memo缓存，修改其他状态时，不会重新渲染

    console.log('todoList', todoList)
    return <div className={styles.todo}>
        <h1>欢迎来到 todo 功能，请更新你的todo list</h1>
        <div className="btn-primary mb-8" onClick={()=>toggleCreate(!isCreate)}>
            {isCreate ? '收起' : '新建todo'}
        </div>
        {
            isCreate ? <TodoEdit onSave={saveData} onCancel={()=>toggleCreate(false)} /> : null
        }

        <div className="todo-list">
            {todoList.map(e=>(<div key={e._id}  className={styles.todoListItem}>
                <div dangerouslySetInnerHTML={{__html: e.content}}/>
            </div>))}
        </div>
        
    </div>
}