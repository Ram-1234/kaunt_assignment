import React from 'react'

function Card() {
    return (
        <div>
             <h1>Select Item from drop down or search by input!</h1>
            <select  onChange={(e)=>{}}>
                <option selected>select key</option> 
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <input type="text" onChange={(e)=>{}} placeholder="Search key.." onKeyPress={()=>{}}/>
        </div>
    )
}

export default Card;
