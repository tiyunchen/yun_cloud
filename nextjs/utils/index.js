/**
 * 生成32位UUID
 */
export const uuid = (length=16) => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    const uuid = []
    for (let i = 0; i < length; i++) {
        const str = Math.floor(Math.random()*chars.length)
        uuid.push(chars[str])
    }
    return uuid.join('')

}

/**
 * 生成单色图标
 * @param icon
 * @returns {JSX.Element}
 */
export const generateIconfont = (icon) => {
    return <i className={`${icon} iconfont`} />
}


/**
 * 生成彩色图标
 * @param icon
 * @returns {JSX.Element}
 */
export const generateIconSvg = (icon) => {
    return <svg className="icon" aria-hidden="true">
        <use href={`#${icon}`} />
    </svg>
}