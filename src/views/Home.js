import React from 'react';
import './Home.scss'
import Header from './Header';
import Main from './Main'
import callApi from './API/callApi';

class Home extends React.Component {
    state = {
        listFilm: {},
        searchValue: ''
    }
    getValueNameSearch = async (e) => {
        await this.setState({ searchValue: e.target.value })
        console.log("🚀 ~ check:", this.state.searchValue)
        if (this.state.searchValue && this.state.searchValue.length > 0) {
            let data = await callApi(this.state.searchValue, 1, 1)
            this.setState(
                { listFilm: data }
            )
        }
        if (!this.state.searchValue && this.state.searchValue.length == 0) {
            let data = await callApi()
            this.setState(
                { listFilm: data }
            )
        }
    }
    async componentDidMount() {
        if (!this.state.searchValue && this.state.searchValue.length == 0) {
            let data = await callApi()
            this.setState(
                { listFilm: data }
            )
        }
    }
    render() {
        let { searchValue, listFilm } = this.state
        return (
            <>
                <div className="navigation">
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
                </div>
                <div className="main">
                    {listFilm.results && listFilm.results.length > 0 && listFilm.results.map((item, index) => {
                        let srcImg = `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`
                        let releaseDate = item.release_date.split('-')
                        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                        let newReleaseDate = `${releaseDate[2]} ${months[releaseDate[1] - 1]}, ${releaseDate[0]}`
                        return (
                            <Main
                                vote_average={item.vote_average}
                                key={index}
                                name={item.original_title}
                                srcImg={srcImg}
                                release_date={newReleaseDate}
                            />
                        )
                    })}
                </div>
            </>
        )
    }
}
export default Home;