import React from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import LeftSection from '../../components/LeftSection';
import MainSection from '../../components/MainSection';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <div className={cx('home')}>
            <LeftSection />
            <MainSection />
            <div className={cx('trend-section')}>Trend</div>
        </div>
    );
};

export default Home;
