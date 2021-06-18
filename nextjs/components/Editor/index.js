import React, {useMemo, useEffect,  useState} from 'react'

export default function Editor({elId, onchange, placeholder, disable, content}){
    const [editor, setEditor] = useState(null)
    const MEMO = useMemo(()=>{
        if(typeof window !== 'undefined'){
            return window
        }
    })
    useEffect(()=>{
        (async () => {
            if(editor){
                return
            }
            const WE = await import('wangeditor')
            const E = WE.default

            console.log(222, MEMO)
            const editor = new E(`#${elId}`)
            
            editor.create()
            editor.config.placeholder = placeholder
            editor.$textContainerElem.find('.placeholder').text(placeholder)
            console.log('placeholder', placeholder)
            editor.config.onchange = function (newHtml) {
                onchange && onchange(newHtml)
                // console.log('change 之后最新的 html', newHtml)
            }
            setEditor(editor)
            content && editor.txt.html(content)
        })()
        return () => {
            editor && editor.destroy()
            setEditor(null)
        }
    }, [MEMO])

    useEffect(()=>{
        if(!editor) return
        if(disable){
            editor.disable()
        } else {
            editor.enable()
        }
    }, [disable])
    return <div id={elId} />
}