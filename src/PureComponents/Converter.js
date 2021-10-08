import React, { useState} from 'react'

function Converter() {
    const [km, setKm] = useState(0);

    function handleChange(e){
        setKm(e.target.value);
    }

    function convert(km) {
        return (km/1.609).toFixed(2);
    }
    return (
        <div>
            <input type="text" value={km} onChange={handleChange} />
            <p>{km} km is {convert(km)} miles</p>
            <AddForm />
            {/* {el} */}
            <ContactManager data={contacts} />
        </div>
    )
}

function AddForm() {
    const [sum, setSum] = useState(0);
    const [num, setNum] = useState(0);

    function handleChange(e) {
        setNum(e.target.value)
    }

    function handleSubmit(e) {
        setSum(sum + Number(num));
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={num} onChange={handleChange}/>
            <input type="submit" value="Add" />
            <p>Sum is {sum} </p>
        </form>
    )
}

function AddPersonForm(props) {
    const [ person, setPerson ] = useState('');

    function handleChange(e) {
        setPerson(e.target.value);
    }

    function handleSubmit(e){
        props.handleSubmit(person)
        setPerson('');
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add new contact"
            onChange={handleChange}
            value={person} />
            <button type="submit">Add</button>
        </form>
    )
}

function PeopleList(props) {
    const arr = props.data;
    const listItems = arr.map((val, index) => <li key={index}>{val}</li>)

    return <ul>{listItems}</ul>
}

const contacts = []

// const el = (
//     <div>
//         <AddPersonForm />
//         <PeopleList data={contacts} />
//     </div>
// )

function ContactManager(props) {
    const [ contacts, setContacts ] = useState(props.data)

    function addPerson(name) {
        setContacts([...contacts, name])
    }

    return (
        <div>
        <AddPersonForm handleSubmit={addPerson}/>
        <PeopleList data={contacts} />
    </div>
    )
}

export default Converter
