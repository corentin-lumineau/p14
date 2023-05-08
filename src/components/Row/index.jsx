import '../../style/components/Table.css'

export default function Row({data}) {
    return(
        data.map((el) => (
            <p className="row-element">{el}</p>
        ))
    )
}