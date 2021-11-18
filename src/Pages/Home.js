import React from 'react';
import Footer from '../Components/Footer';
import HeroArea from '../Components/HeroArea';
import Items from '../Components/Items';
import Company from './Company';
import HappyCustomer from './HappyCustomer';

const Home = () => {
    return (
        <>
            <HeroArea></HeroArea>
            <Items></Items>
            <Company></Company>
            <HappyCustomer></HappyCustomer>
        </>
    );
};

export default Home;