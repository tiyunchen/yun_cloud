import {useState} from 'react'
import {generateIconSvg} from "../../utils";
import styles from './todoItem.module.scss'


export default function TodoItem (
    {
        item={},
        onDelete=()=>{},
        onFinish=()=>{},
    }) {
    const [isEdit, toggleEdit] = useState(false)

    /**
     * 删除todo
     * @param item
     */
    const deleteTodo = (item)=>{
        onDelete(item)
    }


    /**
     * 编辑 todo
     * @param item
     */
    const onEdit = (item) => {
        toggleEdit(true)
    }


    return <div key={item._id}  className={styles.todoListItem}>
                <span className={styles.edit}>
                    <span className="mr-8" onClick={()=>deleteTodo(item)}>
                        {generateIconSvg('icon-shanchu')}
                    </span>
                    <span onClick={()=>onEdit(item)}>{generateIconSvg('icon-A')}</span>
                </span>
        <div dangerouslySetInnerHTML={{__html: item.content}}/>
    </div>
}