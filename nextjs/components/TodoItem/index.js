import {useState} from 'react'
import {generateIconSvg} from "../../utils";
import styles from './todoItem.module.scss'
import Editor from "../TodoEdit";


export default function TodoItem(
    {
        item = {},
        onDelete = () => {
        },
        onFinish = () => {
        },
        onUpdate = () => {},
    }) {
    const [isEdit, toggleEdit] = useState(false)

    /**
     * 删除todo
     * @param item
     */
    const deleteTodo = (item) => {
        onDelete(item)
    }


    /**
     * 编辑 todo
     * @param item
     */
    const onEdit = (item) => {
        toggleEdit(true)
    }

    const onSave = (data) => {
        console.log('保存', data)
        toggleEdit(false)
        onUpdate({...item, content: data})


    }


    return <div key={item._id} className={styles.todoListItem}>
        {isEdit ? <div className="mb-16">
            <Editor elId={item._id}
                    content={item.content}
                    onSave={onSave}
                    onCancel={()=>toggleEdit(false)}
            />
        </div> : <div>
            <span className={styles.edit}>
                    <span className="mr-8" onClick={() => deleteTodo(item)}>
                        {generateIconSvg('icon-shanchu')}
                    </span>
                    <span onClick={() => onEdit(item)}>{generateIconSvg('icon-A')}</span>
                </span>
            <div dangerouslySetInnerHTML={{__html: item.content}}/>
        </div>}

    </div>
}