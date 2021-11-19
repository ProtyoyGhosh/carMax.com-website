import React from 'react';
import HeroArea from '../Components/HeroArea';
import Items from '../Components/Items';
import Company from './Company';
import HappyCustomer from './HappyCustomer';
import Marketting from './Marketting';
import Promotion from './Promotion';


const Home = () => {
    return (
        <>
            <HeroArea></HeroArea>
            <Items></Items>
            <Company></Company>
            <HappyCustomer></HappyCustomer>
            <Marketting></Marketting>
            <Promotion></Promotion>
        </>
    );
};

export default Home;