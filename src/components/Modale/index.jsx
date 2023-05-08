import '../../style/components/Modale.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { toggle } from '../../features/modale'
import { useDispatch } from 'react-redux'
import { hideOverlay } from '../../utils/tools'

export default function Modale() {
    const dispatch = useDispatch()

    return(
        <div className="modale-create">
            <button className="icon-close" onClick={() =>  {
                dispatch(toggle())
                hideOverlay()
            }}>
                <FontAwesomeIcon icon={faCircleXmark}/>
                </button>
            Employée crée !
        </div>
    )
}