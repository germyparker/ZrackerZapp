import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { body: 'default' };
    }
    handleClick(e) {
        this.setState({body: e});
    }
    createButtons = (text) => {
        let buttons = []
        for (let i = 0; i < text.length; i++) {
            let b = text[i].label
            buttons.push(<button key={b} onClick={() => this.handleClick(b)}>{b}</button>)
        }
        return buttons
    }
    render() {
        var database = 
            [
                {
                    name: ['Aakbar', 'Admiral'],
                    date: '2019-04-11',
                    place: 'BCH',
                    notes: 'none'
                },
                {
                    name: ['Berkinstock', 'Admiral'],
                    date: '2017-04-11',
                    place: 'Mass General',
                    notes: 'mmmm'
                },
                {
                    name: ['Colonel', 'Admiral'],
                    date: '2018-04-11',
                    place: 'Lurie',
                    notes: 'uh'
                },
            ]
        const buttonText = 
            [
                {
                    label: 'People',
                    header: 'Doctors, Nurses, Therapists; People'
                },
                {
                    label: 'Places',
                    header: 'Hospitals, Clinics, Locations'
                },
                {
                    label: 'Dates',
                    header: 'Appointments, Trips, Dates'
                }
            ]
        return (
            <div id="MainApp">
                <div className="Buttons">
                    {this.createButtons(buttonText)}
                </div>
                <Search />
                <Input />
                <Data content={database}/>
            </div>
        );
    }
}

export default App;

class Search extends React.Component {
    render() {
        return <input type="text"></input>
    }
}
class Input extends React.Component {
    render() {
        return <input type="text"></input>
    }
}
class Data extends React.Component {

    createTable = (content) => {
        let table = []
        for (let i = 0; i < content.length; i++) {
            let c = content[i],
                cid = content[i].name.join(''),
                children = []
            for (let j = 0; j < c.length; j++) {
                children.push(<td key={cid}>{c.name.join(', ')}</td>)
            }
            table.push(<tr key={cid}>{children}</tr>)
        }
    return table
    }
    render() {
        return <table>  
            <tbody>
                {this.createTable(this.props.content)}
            </tbody>
        </table>
    }
}