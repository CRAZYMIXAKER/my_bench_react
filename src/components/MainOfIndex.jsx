import React from 'react';
import {Link} from "react-router-dom";
import '../styles/components/MainOfIndex.scss';
// import {RiFilter3Line} from "react-icons/ri";
import {MdOutlineSearch, MdOutlineFilterList, MdOutlineNotificationAdd, MdOutlineFavoriteBorder} from "react-icons/md";

const MainOfIndex = () => {
    return (
        <main>
            <section className="hero">
                <div className="hero-main">
                    <div className="description">
                        <h1 className="description-title">
                            <span> Find the best tech partners directly </span>
                        </h1>
                        <p className="description-text">
                            Mybench connects software companies with available resources and vacancy requests in one
                            place
                        </p>
                        <div className="description-links">
                            <Link className="_btn _btn-black" to="/available"> Available </Link>
                            <Link className="_btn _btn-transparent" to="/looking-for"> Looking for </Link>
                        </div>
                    </div>
                    <div className="image">
                        <div className="image-wrapper">
                            <img alt="" src={require("../images/banner-hero.webp")}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="opportunities">
                <h2 className="opportunities-title">
                    Instantly find new companies and resources relevant to your requests using
                </h2>
                <div className="opportunities-list">
                    <div className="opportunities-list-item">
                        <MdOutlineSearch/>
                        <h3>Search</h3>
                        <p> Our live search allows finding relevant publications by skills in a few seconds </p>
                    </div>
                    <div className="opportunities-list-item">
                        <MdOutlineFilterList/>
                        <h3>Filters</h3>
                        <p> Sort specialists by specified filters: Role, Seniority, Stack, Rate, Location.</p>
                    </div>
                    <div className="opportunities-list-item">
                        <MdOutlineNotificationAdd/>
                        <h3>Notifications</h3>
                        <p> Adjust notifications to see new publications and get in touch immediately </p>
                    </div>
                    <div className="opportunities-list-item">
                        <MdOutlineFavoriteBorder/>
                        <h3 className="sc-73f323da-5 hYIBoC">Favorites</h3>
                        <p> Add publications and companies to your favorite list for the future cooperation </p>
                    </div>
                </div>
            </section>

            <section className="trial">
            </section>

            <section className="prices">
            </section>

            <section className="mail">
            </section>
        </main>
    );
};

export default MainOfIndex;