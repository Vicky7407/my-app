import React, { Component } from 'react';

class Country extends Component {
    constructor(props) {
        super(props);

        this.state = {
            CountryName:'India'
        }
    }
    ChangeCountry = () => {
        this.setState({
            CountryName:'us'
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.CountryName}</p>
                <button onClick = { () => this.ChangeCountry()}>change</button>
                
            </div>
        );
    }
}

export default Country;