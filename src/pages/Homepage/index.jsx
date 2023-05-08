import '../../style/pages/Homepage.css'
import DatePicker from "react-datepicker"
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css"
import { useState } from 'react'
import { states, departments } from '../../utils/data'
import { useDispatch, useSelector } from 'react-redux'
import { create } from '../../features/employee'
import { toggle } from '../../features/modale'
import Modale from '../../components/Modale'
import { displayOverlay } from '../../utils/tools'
import { selectModaleIsDisplayed } from '../../utils/selector'

export default function Homepage() {
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [birthDate, setBirthDate] = useState(new Date())
    const [startedDate, setStartedDate] = useState(new Date())
    const [street, setStreet] = useState()
    const [city, setCity] = useState()
    const [zipCode, setZipCode] = useState()
    const [selectedDepartment, setSelectedDepartment] = useState(departments[0])
    const [selectedState, setSelectedState] = useState(states[0])

    const toggleInput = (setter, htmlId) => {
        const data = document.getElementById(htmlId).value;
        setter(data);
    }

    const modaleDisplayed = useSelector(selectModaleIsDisplayed)



    return(
      <div className="main-homepage">
        { modaleDisplayed ? <Modale /> : null}
        <div className="wrapper-title">
            <h2>Créer un nouvel employé</h2>
        </div>
        <div className="wrapper-form">
            <form>
                <div className="input-wrapper-column">
                    <label>Prénom</label><input type="text" id="firstname" onChange={() => toggleInput(setFirstName, 'firstname')}></input>
                </div>
                <div className="input-wrapper-column">
                <label>Nom</label><input type="text" id="lastname" onChange={() => toggleInput(setLastName, 'lastname')}></input>
                </div>
                <div className="input-wrapper-column">
                    <label>Date de naissance</label>
                    <DatePicker selected={birthDate} id="birthdate" onChange={(date) => setBirthDate(date)} />
                </div>
                <div className="input-wrapper-column">
                    <label>Date de démarrage</label>
                    <DatePicker selected={startedDate} id='started-date' onChange={(date) => setStartedDate(date)}/>
                </div>
                <div className="input-wrapper-column">
                    <fieldset>
                        <legend>Adresse</legend>
                        <div className='input-fieldset-wrapper'>
                            <div className='input-wrapper-inline'>
                                <label for="street">Rue</label>
                                <input id="street" type="text" onChange={() => toggleInput(setStreet, 'street')} />
                            </div>
                          
                            <div className='input-wrapper-inline'>
                                <label for="city">Ville</label>
                                <input id="city" type="text" onChange={() => toggleInput(setCity, 'city')}/>
                            </div>
                            <div className='input-wrapper-inline'>
                                <label for="zip-code">Code postal</label>
                                <input id="zip-code" type="number" onChange={() => toggleInput(setZipCode, 'zip-code')} />
                            </div>
                        </div>
                        <div className='input-wrapper-inline'>
                            <label for="state">Etat</label>
                            <Select className='dropdown' options={states} value={selectedState} onChange={setSelectedState} menuPlacement='top'
                             styles={{
                                control: (provided, state) => ({
                                    ...provided,
                                    border: "none",
                                    borderRadius: "10px"
                                }),
                                menu: (provided, state) => ({
                                    ...provided,
                                    border: "none"
                                })
                             }}
                             />
                        </div>
                    </fieldset>
                </div>
                <div className="input-wrapper-column">
                    <label>Département</label>
                    <Select className='dropdown' options={departments} value={selectedDepartment} onChange={setSelectedDepartment} menuPlacement="top"
                      styles={{
                        control: (provided, state) => ({
                            ...provided,
                            border: "none",
                            borderRadius: "10px"
                        })
                     }}
                     />
                </div>
                <button className='create-button' onClick={(e) => {
                    e.preventDefault()
                    const myData = {firstName, lastName, birthDate, startedDate, street, city, zipCode, selectedState, selectedDepartment}
                    myData.birthDate = birthDate.toJSON()
                    myData.startedDate = startedDate.toJSON()
                    dispatch(create(myData))
                    dispatch(toggle())
                    displayOverlay()
                }
                   
                }>
                    Créer employé
                </button>
            </form>
        </div>
      </div>
    )
}