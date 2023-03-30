import React from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import ProfileSection from '../../components/ProfileSection';
import PostSection from '../../components/PostSection';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <div className={cx('home')}>
            <ProfileSection />
            <PostSection />
            <div className={cx('trend-section')}>Trend</div>
        </div>
    );
};

export default Home;
