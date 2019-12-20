import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeTabs() {
    return (
        <div className="HomeTabs">
            <section className="tab">
                <Link to={'/map'}> MAP</Link>
            </section>
            <section className="tab">
                <Link to={'/favorites'}> FAVORITES </Link>
            </section>
        </div>
    )
}
