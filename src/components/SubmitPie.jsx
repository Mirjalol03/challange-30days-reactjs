import React from 'react'

const SubmitPie = () => {
  return (
    <>
        <div className="pie--form">
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="value">Value</label>
                <input type="number" name="value" id="value" />
                <label htmlFor="color">Color</label>
                <select name="color" id="color">
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="purple">Purple</option>
                    <option value="orange">Orange</option>  
                </select>
                <button type="submit">Submit</button>
                </form>
        </div>
    </>
  )
}

export default SubmitPie
