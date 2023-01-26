import React from 'react';
import {Link} from "react-router-dom";
import '../styles/components/MainOfIndex.scss';

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