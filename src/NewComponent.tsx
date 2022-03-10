type NewComponentType = {
    students?: Array<StudentType>
    cars?: Array<CarsType>
}

type CarsType = {
    manufacturer: string
    model: string
}

type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentType) => {

    return (
        <table>
            <tr>
                <th>manufacturer</th>
                <th>model</th>
            </tr>
            {props.cars?.map(el => {
                return (
                    <tr>
                        <td>{el.manufacturer}</td>
                        <td>{el.model}</td>
                    </tr>
                )
            })}

        </table>
    )

    // return (
    //     <ul>
    //         {props.students.map(el => {
    //             return (
    //                 <li key={el.id}>{el.name} age: {el.age}</li>
    //             )
    //         })}
    //     </ul>
    // )
}