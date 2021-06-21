import Editor from '../../components/Editor/index'
import {useState, useRef} from 'react'
import styles from './edit.module.scss'

export default function TodoEdit({onSave= ()=>{}, onCancel=()=>{}}){
    const [data, setContent] = useState(data)
    const [preview, setPreview] = useState(false)
    const contentChange = (data) => {
        setContent(data)
    }

    const saveContent = () => {
        // setPreview(state=>!state)
        if(!data) return
        onSave(data)
    }

    return <div>
        {
            preview ? <div dangerouslySetInnerHTML={{__html: data}} />
                :
                <Editor placeholder={'请输入标题'}
                        elId={'todo-editor'}
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