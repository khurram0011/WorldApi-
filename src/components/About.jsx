import React from 'react';
import countryFacts from '../components/Api/CountryFacts.json'
import './About.css'

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <div className="container">
                <div className="row">


                    {
                        countryFacts.map((country) => {
                            const { id, countryName, capital, population, interestingFact } = country
                            return (
                                <div className="card" key={id}>
                                    <h2 className="card-title">{countryName}</h2>
                                    <p className="card-detail">
                                        <strong>Capital:</strong> {capital}
                                    </p>
                                    <p className="card-detail">
                                        <strong>Population:</strong> {population}
                                    </p>
                                    <p className="card-detail">
                                        <strong>Interesting Fact:{interestingFact}</strong>
                                    </p>
                                </div>
                            );
                        })
                    }
                </div>

            </div>
        </div>
    );
};

export default About;
