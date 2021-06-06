import React, {useMemo, useEffect} from 'react'
let editor = null
export default function Editor({elId, onchange, placeholder}){
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
        })()
        return () => {
            editor && editor.destroy()
            editor = null
        }
    }, [MEMO])
    return <div id={elId}></div>
}