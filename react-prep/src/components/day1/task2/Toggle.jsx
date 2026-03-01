import React from 'react'
import { useState } from 'react'
const Toggle = () => {
    const [isClicked, setClick] = useState(false)
    return (
        <>
            <button className="bg-blue-500" onClick={() => setClick((prev) => !prev)}>{isClicked ? "Hide Details" : "Show Details"}</button>
            {isClicked && <p>Hi Anil anna</p>}
        </>
    )
}

export default Toggle