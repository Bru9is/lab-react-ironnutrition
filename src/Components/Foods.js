import foodData from './../foods.json'
import React from 'react';
import FoodBox from './FoodBox';
import {useState} from 'react'
import FoodForm from './FoodForm';
import Search from '../Search';
import './Foods.css'


function Foods(){
    const [foods, setFoods] = useState(foodData)
    const [filtered, setFiltered] = useState(foodData)
    const [showForm, setShowForm] = useState(false)
    const [menu, setMenu] = useState([])
    
    const toggleForm = () => {
        setShowForm(!showForm)
    }

    const addFood = newFood => {
        const updatedFoods = [...foods, newFood]
        const updatedFilteredFoods = [...filtered, newFood]
        
        setFoods(updatedFoods)
        setFiltered(updatedFilteredFoods)
        toggleForm()
    }

    const filterFood = term => {
        const filteredFood = foods.filter(food => {
            return food.name.toLowerCase().includes(term.toLowerCase())
        })
        setFiltered(filteredFood)
    }

    const addToMenu = foodData => {
        const updatedMenu = [...menu]

        const found = menu.find(element => {
            return element.name === foodData.name
        })

        if(found) {
            found.quantity += foodData.quantity 
            found.calories += foodData.calories 
        } else {
            updatedMenu.push(foodData)
        }

        setMenu(updatedMenu)
    }

    const totalCalories = () => {
        return menu.reduce((acc, val) => {
            return acc + val.calories
        }, 0)
    }

    const removeItem = (food) => {
        const newMenu = [...menu]
        const index = newMenu.findIndex((e) => {
            return e.name === food.name
        })
        newMenu.splice(index, 1)
        setMenu(newMenu)
    }

    return(
        <div>
            <h1>IronNutrition</h1>

            <button onClick={toggleForm} className="button">Add Food</button>
            { showForm && <FoodForm addFood={addFood} /> }

            <Search filterFood={filterFood} />

            <div className="columns">
                <div className="column">
                {
                    filtered.map(food => {
                        return <FoodBox food={food} addToMenu={addToMenu} />
                    })
                }   
                </div>
                <div className="column">
                    <h2>Today's Food</h2>
                    <ul>
                        {
                            menu.map(food => {
                                return (
                                    <div className="todayFood">
                                    <li>{food.quantity} {food.name} = {food.calories}cal</li>
                                        <button className= 'button is-danger' onClick={() => removeItem(food)}>🗑️</button>
                                    </div>
                                )
                            })
                        }
                    </ul>
                    <p><b>Total {totalCalories()}cal </b></p>
                </div>
            </div>
        </div>
    )
}

export default Foods