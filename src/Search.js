import React, {useState} from 'react';


function Search(props){
    const{ filterFood } = props
    const [term, setTerm] = useState('')

    const handleSearch = e => {
        filterFood(e.target.value)
        setTerm(e.target.value)
    }
    return(
        <div className="field">
            <div className="control">
                <input 
                    type="text" 
                    className="input"
                    placeholder="Search..."
                    value={term}
                    onChange={handleSearch}
                />
            </div>    
        </div>
    )
}

export default Search