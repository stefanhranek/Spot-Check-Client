import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';


export default function HomeTabs() {
    return (
        <div className="HomeTabs">
            <section className="tab">
                <Link to={'/map'}> View Map</Link>
            </section>
            <section className="tab">
                <Link to={'/favorites'}> Favorites</Link>
            </section>
        </div>
    )
}
