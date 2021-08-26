import Editor from '../../components/Editor/index'
import {useState, useRef} from 'react'
import styles from './edit.module.scss'
import {Button} from '@chentiyun/y-ui'

export default function TodoEdit({onSave= ()=>{}, onCancel=()=>{}, content='', elId}){
    const [data, setContent] = useState(content)
    const [preview, setPreview] = useState(false)
    const contentChange = (data) => {
        setContent(data)
    }

    const saveContent = () => {
        // setPreview(state=>!state)
        if(!data) return
        onSave(data)
    }

    console.log(111,Button)

    return <div>
        {
            preview ? <div dangerouslySetInnerHTML={{__html: data}} />
                :
                <Editor placeholder={'请输入标题'}
                        elId={elId || 'todo-editor'}
                        onchange={contentChange}
                        disable={preview}
                        content={data}
                />
        }
        <div className={`${styles.footer} mt-16`}>
            <div onClick={onCancel} className="btn-cancel mr-16">
                取消
            </div>
            <div className="btn-primary"
                 onClick={saveContent}
            >{preview ? '编辑' : '保存'}</div>
        </div>
    </div>
}
