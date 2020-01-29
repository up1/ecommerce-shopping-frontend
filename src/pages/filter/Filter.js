import React, { useState } from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

function Filter(props) {

    const genderOptions = [
        { value: 'M', label: 'Male' },
        { value: 'F', label: 'Female' },
        { value: 'N', label: 'Neutral' },
    ]

    const ageOptions = [
        { value: 1, label: 'Baby' },
        { value: 2, label: 'Todler' },
        { value: 3, label: '3-5' },
        { value: 4, label: '6-8' },
        { value: 5, label: 'Over 8' }
    ]

    

    return (
        <div id='filter'>
            <div id='ddl-gender'>
                <Dropdown options={genderOptions}
                    onChange={props.callOnChangeGender} value={props.gender}
                    placeholder="Select Gender" />
            </div>
            <div id='ddl-age'>
                <Dropdown options={ageOptions}
                    onChange={props.callOnChangeAge} value={props.age}
                    placeholder="Select Age" />
            </div>
        </div>
    )
}

export default Filter