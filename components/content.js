import { data } from "autoprefixer"
import { useState } from "react"

import OtherResult from "./otherResult"
import Result from "./result"

export default function Content() {
    const [searchContent, setSearchContent] = useState("")
    const [ifData, dataChecker] = useState(false)
    const [data, addData] = useState("")
    const handleChange = (e) => {
        setSearchContent(e.target.value)
    }
    const handleClick = async (e) => {
        let reqBody = JSON.stringify({
            url: searchContent
        })
        const response = await fetch('http://localhost:4000/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: reqBody
        })
        const data = await response.json()
        console.log(data)
        if (data) {
            addData(data.data)
            dataChecker(true)
        }
    }
    return (
        <div className="h-32 bg-zinc-300">
            <div className="">
                <input type="text" name="search-field" onChange={handleChange} placeholder="https://www.sample.com" />
                <button onClick={handleClick}>Submit</button>
            </div>

            {searchContent == "ifconfig.pro" && ifData && <Result Data={data} />}
            {ifData && <OtherResult Data={data} />}

        </div>
    )
}