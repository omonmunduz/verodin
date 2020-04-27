import React,{useContext, useState, useEffect} from 'react';
import {PeopleContext} from '../contexts/PeopleContextProvider';
import {Link} from 'react-router-dom';
import '../index.css';
import {Table,SearchInput} from 'evergreen-ui'


const TableComponent = () => {
    //This component renders a list of all users 
    const {data} = useContext(PeopleContext); // get json data from PeopleContext provider
    const [searchTerm, setSearchTerm] = useState(""); // initialize search term state and its method
    const [searchResults, setSearchResults] = useState([]); // what data to display based on search
    
    const handleChange = event => {setSearchTerm(event.target.value)}; // use setSearchTerm to set searchTerm based on user's input

    useEffect(() => {
        const results = data.filter(person => person.first_name.toLowerCase().includes(searchTerm));
        setSearchResults(results);
    }, [data, searchTerm]);// this runs before first mounting and rerenders the component only if content in {data} or {searchTerm} get changed

        return(
            <div className="table-component">
                <div className="table-wrapper">
                    <Table elevation={2} border='muted'> {/*adds shadows around table*/}
                        <SearchInput placeholder="filter name ..."
                            onChange={handleChange}
                            value={searchTerm}  
                            width="100%"
                            height={40}
                            marginY={10}
                        />
                        <Table.Head>
                            <Table.TextHeaderCell>
                                First Name
                            </Table.TextHeaderCell>
                            <Table.TextHeaderCell>
                                Email
                            </Table.TextHeaderCell>
                            <Table.TextHeaderCell>
                                City
                            </Table.TextHeaderCell>
                            <Table.TextHeaderCell>
                                State
                            </Table.TextHeaderCell>
                        </Table.Head>

                        <Table.Body height={700}>
                            {searchResults.map(person => {
                                const city = person.city !== null ? person.city : ' N/A'; // some users have missing information
                                const state = person.state !== null ? person.state : ' N/A'; // set missing city and state info to be N/A
                            return(
                                <Link to={'/' + person.id} key={person.id}>{/*passing person.id as {:_id} in App.js.Implementation for url para comment in App.js*/}
                                <Table.Row isSelectable >
                                    <Table.TextCell>{`${person.first_name} ${person.last_name}`}</Table.TextCell>
                                    <Table.TextCell>{person.email}</Table.TextCell>
                                    <Table.TextCell>{city}</Table.TextCell>
                                    <Table.TextCell>{state}</Table.TextCell>
                                </Table.Row>
                            </Link>
                            )
                            })}
                        </Table.Body>
                    </Table>
                </div>
        </div>
        )
}
export default TableComponent;