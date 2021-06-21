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
