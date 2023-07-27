import React, { useState } from "react";
import DataTable from 'react-data-table-component';
import './Home.css';


function Table() {
    const columns = [
        {
            name : "Name",
            selector: row => row.name
        },
        {
            name: "email",
            selector: row => row.email
        },
        {
            name:"Age",
            selector: row => row.age

        } 
    ];
    const data = [
        {
            id: 1,
            name:"adn",
            email: "vjk bkdj",
            age: "20"
        },
        {
            id: 2,
            name:"adnd",
            email: "vjkdbkdj",
            age: "209"
        },
        {
            id: 3,
            name:"adnd",
            email: "vjkdbkdj",
            age: "209"
        },
        {
            id: 4,
            name:"adnd",
            email: "vjkdbkdj",
            age: "209"
        },
        {
            id: 2,
            name:"adnd",
            email: "vjkdbkdj",
            age: "209"
        },
        {
            id: 2,
            name:"adnd",
            email: "vjkdbkdj",
            age: "209"
        },
        {
            id: 2,
            name:"adnd",
            email: "vjkdbkdj",
            age: "209"
        },
        {
            id: 2,
            name:"adnd",
            email: "vjkdbkdj",
            age: "209"
        },
        {
            id: 2,
            name:"adnd",
            email: "vjkdbkdj",
            age: "209"
        },
        {
            id: 2,
            name:"adnd",
            email: "vjkdbkdj",
            age: "209"
        },
        {
            id: 2,
            name:"adnd",
            email: "vjkdbkdj",
            age: "209"
        },
        {
            id: 2,
            name:"adnd",
            email: "vjkdbkdj",
            age: "209"
        },
        {
            id: 2,
            name:"adnd",
            email: "vjkdbkdj",
            age: "209"
        },
        {
            id: 2,
            name:"adnd",
            email: "vjkdbkdj",
            age: "209"
        },
        {
            id: 2,
            name:"adnd",
            email: "vjkdbkdj",
            age: "209"
        },
        {
            id: 2,
            name:"adnd",
            email: "vjkdbkdj",
            age: "209"
        },
        {
            id: 2,
            name:"adnd",
            email: "vjkdbkdj",
            age: "209"
        },
        {
            id: 2,
            name:"adnd",
            email: "vjkdbkdj",
            age: "209"
        }

    ]
    const [records, setRecords] = useState(data);
    function handleFilter(event){
        const newData = data.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())

        })
        setRecords(newData)
    }
    return(
        <div classNAme= 'container'>
            <div className='text-end'>
                <input type="text" onChange={handleFilter} placeholder="Search ..."/>
            </div>

            <DataTable
                columns={columns}
                data={records}
                selectableRows
                fixedHeader
                pagination>
            </DataTable>
        </div>
    );
}
export default Table; 