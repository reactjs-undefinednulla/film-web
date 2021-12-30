import React from 'react';
export default class Main extends React.Component {
    render() {
        return (
            <div className="item">
                <div className="nameImage"><img src={this.props.srcImg} /></div>
                <div className="nameFilm">{this.props.name}</div>
                <div className="boxButton">
                    <button className="watch"><p>Xem Ngay</p> <ion-icon name="add-outline"></ion-icon></button>
                </div>
                <div className="boxTag">
                    <div className="tag tag-rank">Rating {this.props.vote_average} </div>
                    <div className="tag tag-year">{this.props.release_date}</div>
                </div>
            </div>
        )
    }
}