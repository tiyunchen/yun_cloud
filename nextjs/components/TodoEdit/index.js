import Editor from '../../components/Editor/index'
import {useState, useRef} from 'react'

export default function TodoEdit(){
    const [data, setContent] = useState(data)
    const [preview, setPreview] = useState(false)
    const editorRef = useRef(null)
    const contentChange = (data) => {
        console.log('dadada', data)
        setContent(data)
    }

    const saveContent = () => {
        console.log('保存内容', editorRef)
        setPreview(state=>!state)
    }

    return <div>
        {
            preview ? <div dangerouslySetInnerHTML={{__html: data}} /> : <Editor placeholder={'请输入标题'}
                                                                                 elId={'todo-editor'}
                                                                                 onchange={contentChange}
                                                                                 disable={preview}
                                                                                 content={data}
            />
        }

        <div className="btn-primary mt-8"
             onClick={saveContent}
        >{preview ? '编辑' : '保存'}</div>
    </div>
}