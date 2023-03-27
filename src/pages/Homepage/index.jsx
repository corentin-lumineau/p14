import '../../style/pages/Homepage.css'
import DatePicker from "react-datepicker"
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css"
import { useState } from 'react'
import { states, departments } from '../../utils/data'
import { useDispatch } from 'react-redux'
import {  } from '../../features/employee'

export default function Homepage() {
    const dispatch = useDispatch()
    const [firstname, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [birthDate, setBirthDate] = useState(new Date())
    const [startedDate, setStartedDate] = useState(new Date())
    const [adresse, setAdresse] = useState()
    const [selectedDepartment, setSelectedDepartment] = useState(departments[0])
    const [selectedState, setSelectedState] = useState(states[0])


    return(
      <div className="main-homepage">
        <div className="wrapper-title">
            <h2>Créer un nouvel employé</h2>
        </div>
        <div className="wrapper-form">
            <form>
                <div className="input-wrapper-column">
                    <label>Prénom</label><input type="text" id="firstname"></input>
                </div>
                <div className="input-wrapper-column">
                <label>Nom</label><input type="text" id="lastname"></input>
                </div>
                <div className="input-wrapper-column">
                    <label>Date de naissance</label>
                    <DatePicker selected={birthDate} onChange={(date) => setBirthDate(date)}/>
                </div>
                <div className="input-wrapper-column">
                    <label>Date de démarrage</label>
                    <DatePicker selected={startedDate} onChange={(date) => setStartedDate(date)}/>
                </div>
                <div className="input-wrapper-column">
                    <fieldset>
                        <legend>Adresse</legend>
                        <div className='input-fieldset-wrapper'>
                            <div className='input-wrapper-inline'>
                                <label for="street">Rue</label>
                                <input id="street" type="text" />
                            </div>
                          
                            <div className='input-wrapper-inline'>
                                <label for="city">Ville</label>
                                <input id="city" type="text" />
                            </div>
                            <div className='input-wrapper-inline'>
                                <label for="zip-code">Code postal</label>
                                <input id="zip-code" type="number" />
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
                <button className='create-button'>Créer employé</button>
            </form>
        </div>
      </div>
    )
}