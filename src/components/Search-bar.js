import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props)


        this.state = {
            countries: [],
            _input: '',
            input: ''

        }
        this.handleSearch = this.handleSearch.bind(this)
        this.handleRegion = this.handleRegion.bind(this)
        this.handleClick = this.handleClick.bind(this)


    }

    componentWillReceiveProps(props) {
        this.setState({ countries: props.countries })
        const resetSearch = (event) => {
            event.preventDefault()
            return this.setState({ countries: props.countries })
        }
    }

    jsUcfirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    handleSearch(input) {
        this.props.searchCountry(this.jsUcfirst(input))
        this.setState({ input })
    }


    handleRegion(_input) {
        this.props.searchByRegion(this.jsUcfirst(_input))
        this.setState({ _input })
    }

    handleClick(event) {
        event.preventDefault()
        this.props.getEurope(event.target.value)
    }


    render() {
        return (
            <nav className='navbar navbar-light bg-light mb-3' >
                <a className='navbar-brand'><img id='planet' src='planet.png' /></a>
                <form className='form-inline' >
                    <input
                        value={this.state.input}
                        onChange={event => this.handleSearch(event.target.value)}
                        placeholder="Search for..."
                        className='form-control mr-sm-2' type='search' placeholder='search country' aria-label='search' />
                    <input
                        value={this.state._input}
                        onChange={event => this.handleRegion(event.target.value)}
                        className='form-control mr-sm-2' type='search' placeholder='search by region' aria-label='search'
                    />
                    <button className='btn btn-primary'
                        onClick={this.handleClick}
                    >Europe</button>
                    <button className='btn btn-danger' onClick={() => this.resetSearch.bind(this)} >Reset Search</button>
                </form>
            </nav>
        )
    }


}
export default SearchBar



