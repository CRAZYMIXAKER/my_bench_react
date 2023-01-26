import React from 'react';
import {Link} from "react-router-dom";
import '../styles/components/MainOfIndex.scss';
// import {RiFilter3Line} from "react-icons/ri";
import {
    MdOutlineSearch,
    MdOutlineFilterList,
    MdOutlineNotificationAdd,
    MdOutlineFavoriteBorder,
    MdMailOutline
} from "react-icons/md";
import ButtonMailTo from "./UI/button/ButtonMailTo";

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
                <div className="trial-wrapper">
                    <h2 className="trial-title">
                        All new users get 3 months free trial with unlimited publications
                    </h2>
                    <div className="trial-content">
                        <Link className="trial-content-start _btn _btn-white" to="/trial">Start Free Trial</Link>
                        <div className="trial-content-description">
                            No credit card required.
                            <br/>
                            Cancel anytime.
                        </div>
                    </div>
                </div>
            </section>

            <section className="prices">
                <h2 className="prices-title">Prices</h2>
                <div className="prices-text">Choose your personal plan depending on your needs</div>
                <div className="prices-list">
                    <div className="item">
                        <div className="item-wrapper">
                            <h4 className="item-title">Basic</h4>
                            <h3 className="item-price">
                                $0<span>/mo</span>
                            </h3>
                            <div className="item-description">
                                <p>
                                    <span>One free</span> publication in Available
                                    <br/>
                                    Resources board each week
                                    <br/>
                                    <span>Unlimited</span> publications in Looking for board
                                </p>
                                <p>Publications expire in 7 days</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-wrapper">
                            <h4 className="item-title">Standard</h4>
                            <h3 className="item-price">
                                $39<span>/mo</span>
                            </h3>
                            <div className="item-description">
                                <p>
                                    <span>10</span> publications in Available Resources board each month
                                    <br/>
                                    <span>Unlimited</span> publications in Looking for board
                                </p>
                                <p>Publications expire in 30 days</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-wrapper">
                            <h4 className="item-title">Pro</h4>
                            <h3 className="item-price">
                                $84<span>/mo</span>
                            </h3>
                            <div className="item-description">
                                <p>
                                    <span>Unlimited</span> publications in Available resources board
                                    <br/>
                                    <span>Unlimited</span> publications in Looking for board
                                    <br/>
                                    Fast publishing via uploading <span>CSV file</span>
                                </p>
                                <p>Publications expire in 30 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mail">
                <ButtonMailTo
                    className="mail-link"
                    mailto="mailto:zombisuki@gmail.com"
                >
                    <MdMailOutline/> info@mixaker.io
                </ButtonMailTo>
            </section>
        </main>
    );
};

export default MainOfIndex;