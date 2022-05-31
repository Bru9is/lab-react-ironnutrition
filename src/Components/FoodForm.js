import React, {useState} from 'react'

function FoodForm(props){
    const { addFood } = props

    const [name, setName] = useState('')
    const [calories, setCalories] = useState('200')
    const [image, setImage] = useState('')

    const handleFoodName = e => setName(e.target.value)
    const handleFoodCalories = e => setCalories(e.target.value)
    const handleFoodImage = e => setImage(e.target.value)

    const handleSubmit = e => {
        e.preventDefault();
        const newFood = {name, calories, image}
        
        addFood(newFood)

        setName()
        setCalories()
        setImage()
    }

    return(
        <div className="box">
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input 
                            type="text" 
                            className="input" 
                            value={name}
                            onChange = {handleFoodName}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input 
                            type="text" 
                            className="input" 
                            value={calories}
                            onChange = {handleFoodCalories}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input 
                            type="text" 
                            className="input" 
                            value={image}
                            onChange = {handleFoodImage}
                        />
                    </div>
                </div>
                <button className="button" type='submit'>Add</button>
            </form>
        </div>
    )

}

export default FoodForm