import { useState, useEffect, useMemo} from 'react'
import TodoEdit from "../../components/TodoEdit";
import TodoItem from "../../components/TodoItem";
import {uuid} from '../../utils/index'
import styles from './todo.module.scss'
import { generateIconfont, generateIconSvg } from '../../utils/index'

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
        todoList.unshift(temp)
        toggleCreate(false)
        setContent(todoList)
        localStorage.setItem('todoList', JSON.stringify(todoList))
        getTodoList()
    }

    /**
     * 删除todo
     * @param e
     */
    const deleteTodo = (e)=>{
        const stringList = JSON.parse(localStorage.getItem('todoList'))
        const newData = stringList.filter(item=>item._id !== e._id)
        setList(newData)
        localStorage.setItem('todoList', JSON.stringify(newData))
    }
     // memo缓存，修改其他状态时，不会重新渲染

    console.log('todoList', todoList)
    return <div className={styles.todo}>
        <h1>{generateIconSvg('icon-daiban')}<span className="ml-8">欢迎使用 todo 功能</span></h1>
        <div className="btn-primary mb-8" onClick={()=>toggleCreate(!isCreate)}>
            {isCreate ? '收起' : '新建todo'}
        </div>
        {
            isCreate ? <TodoEdit onSave={saveData} onCancel={()=>toggleCreate(false)} /> : null
        }

        <div className="todo-list">
            {todoList.map(e=>(<TodoItem item={e} onDelete={deleteTodo} />))}
        </div>
        
    </div>
}