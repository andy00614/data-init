// function removeJsonComment(json) {
//     return json.replace(/\/\/.*/g,'')
// }

export default function genJsonWithInitValue(json) {
    // const jsonWithoutSmybol = removeJsonComment(json)
    // console.log(jsonWithoutSmybol);
    const jsonWithoutComment = JSON.parse(json)
    // const result = {}
    const setValue = (json) => {
        const result = {}
        for(const key in json) {
            const value = json[key]
            if(Array.isArray(value)) {
                result[key] = []
            } else if (value === null) {
                result[key] = null
            } else if(typeof value === 'object') {
                result[key] = setValue(value)
            } else if(typeof value === 'number') {
                result[key] = 0
            } else if(typeof value ==='boolean') {
                result[key] = false
            } else if(typeof value === 'string') {
                result[key] = ''
            } else {
                result[key] = null
            }
        }
        return result
    }
    return setValue(jsonWithoutComment)
}