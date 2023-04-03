import React from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import LeftSection from '../../components/LeftSection';
import MainSection from '../../components/MainSection';
import RightSection from '../../components/RightSection';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <div className={cx('home')}>
            <LeftSection />
            <MainSection />
            <RightSection />
        </div>
    );
};

export default Home;
