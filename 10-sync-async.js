const fs= require('fs')

const first = fs.readFileSync('./content/first.txt','utf-8')

const second = fs.readFileSync('./content/second.txt','utf-8')

// console.log(first, second)

fs.writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`)

fs.writeFileSync('./content/result-sync.txt',`\nHere is the result: ${first}, ${second}`, {flag: 'a'})

fs.readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err) {
        console.log(err)
        return
    }
    const first = result
    fs.readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err) {
            console.log(err)
            return
        }
        const second = result
        fs.writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err, result) => {
                if(err) {
                    console.log(err)
                    return
                }
                console.log(result)
            }
        )
    })
})