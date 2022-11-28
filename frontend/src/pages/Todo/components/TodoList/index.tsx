import React, {useEffect, useImperativeHandle, useState} from 'react';
import todoApi from '@/pages/Todo/service'

export interface TodoListProps {

}

export type TodoListRef =  {
    refresh: ()=>void
}

const TodoList = React.forwardRef<TodoListRef, TodoListProps>((props, ref)=>{
    const [page, setPage] = useState()
    useEffect(()=>{
        getDta()
    }, [])

    useImperativeHandle(ref, () =>{
        return ({
                refresh: () =>{
                    getDta()
                    console.log('刷新')
                }
            })
    })

    const getDta = () =>{
        todoApi.getTodoList({
            page: 1,
        }).then(res=>{
            console.log('rrrrrrr', res)
        })
    }



    console.log('props', props)
    return (
        <div>
            待办列表
        </div>
    )
})

export default TodoList;
