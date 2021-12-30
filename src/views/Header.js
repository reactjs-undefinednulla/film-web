import React from 'react';
import "./Header.scss"

export default class Header extends React.Component {
    state = {
        searchValue: ''
    }
    getValueNameSearch = (e) => {
        this.setState({ searchValue: e.target.value })
    }
    render() {
        let { searchValue } = this.state
        return (
            <div className="nav">
                <div className="nav__logo">Filming</div>
                <div className="nav__search">
                    <ion-icon name="search-outline"></ion-icon>
                    <input
                        type="text"
                        placeholder="Tìm Kiếm"
                        value={searchValue}
                        onChange={(e) => this.getValueNameSearch(e)}
                    /></div>
            </div>
        )
    }
}