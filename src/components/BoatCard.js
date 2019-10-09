import React from 'react';
const styles = {

};
const BoatCard = (props) => (
    <div className='boatCard'>
        <div className='imgContainer'>
            <img className="img" src={props.boat.image}></img>
        </div>
        <div className="boatCardDetails">
            <div className="">
                <div className="row1">
                    <div className="titlePlace">
                        <span className="title">{`${props.boat.title} `} <span className="year">{props.boat.year}</span></span>
                        <div className="place">{props.boat.place}</div>
                    </div>

                    <div className="viewsContainer">
                        <div className="viewsCount"><span className="hot">HOT</span>{` ${props.boat.views} views `}</div>
                        <div>&nbsp;{`in last 24h`}</div>
                    </div>
                </div>

                <div className="row2">
                    <div className="row2Cols cabinLength">
                        <div className="row2Value">{props.boat.length}</div>
                        <div className="row2Key">LENGTH</div>
                    </div>

                    <div className="row2Cols">
                        <div className="row2Value">{props.boat.cabins}</div>
                        <div className="row2Key">CABINS</div>
                    </div>
                    <div className="row2Cols">
                        <div className="row2Value">{props.boat.guests}</div>
                        <div className="row2Key">GUESTS</div>
                    </div>
                    <div className="row2Cols">
                        <div className="ratingsDesktop">
                            <div className="star-ratings-sprite"><span style={{ width: `${((props.boat.rating / 5) * 100)}%` }} className="star-ratings-sprite-rating"></span></div>
                        </div>
                        <div className="ratingsMobile row2Value">{`${props.boat.rating} Ratings`}</div>
                        <div className="row2Key">{props.boat.reviews} Reviews</div>
                    </div>
                </div>

                <div className="row3">
                    <div className="boatAmenitiesContainer">
                        <div className="row3_1">
                            <span>{props.boat.sicherungsshein ?
                                <i className="fa fa-check"></i> :
                                <i className="fa fa-close"></i>
                            } <span className="inclusivesText">sicherungsshein</span></span>
                            <span>{props.boat.luxury ?
                                <i className="fa fa-check"></i> :
                                <i className="fa fa-close"></i>
                            } <span className="inclusivesText">Luxury</span></span>
                        </div>
                        <div className="row3_2">
                            <div className="topMargin row3Key">SAIL TYPE  : <span className="row3Value">{props.boat.sailType}</span></div>
                            <div className="topMargin row3Key">FREE EXTRAS: <span className="row3Value">{props.boat.freeExtras}</span></div>
                        </div>
                    </div>
                    <div className="priceBookContainer">
                        <div className="priceContainer"><i className="fa fa-euro"></i>
                            <span className="price">{(props.boat.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
                            <span className="subText">&nbsp; weekly</span>
                        </div>
                        <div className="bookContainer">
                            <div className="subText"><i className="fa fa-bolt"></i>DIRECT BOOKING</div>
                            <button className="buttonViewDetails">VIEW DETAILS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default BoatCard;