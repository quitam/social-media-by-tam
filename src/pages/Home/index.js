import React from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import LeftSection from '../../components/LeftSection';
import MainSection from '../../components/MainSection';
import RightSection from '../../components/RightSection';
import Header from '../../components/Header';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <div className={cx('home')}>
            <div className={cx('header')}>
                <Header />
            </div>
            <div className={cx('content')}>
                <LeftSection />
                <MainSection />
                <RightSection />
            </div>
        </div>
    );
};

export default Home;
