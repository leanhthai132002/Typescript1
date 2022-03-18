import { type } from "@testing-library/user-event/dist/type";
import React from "react";

const a :number[] = [1,2,3];

type row = {
    name: string,
    age: number,
    address: string
}

type TableProps = {
    rows: row[]
}

function Table ({rows} : TableProps) {
    return (
        <table>
            <thead>
                <th>Ten</th>
                <th>Tuoi</th>
                <th>Dia chi</th>
            </thead>
            <tbody>
                {
                    rows.map(row => (
                        <tr>
                            <td>{row.name}</td>
                            <td>{row.age}</td>
                            <td>{row.address}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default Table;