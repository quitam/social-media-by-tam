import React from 'react';

import styles from './LeftSection.module.scss';
import classNames from 'classnames/bind';
import ProfileCard from '../ProfileCard';
import FollowerCard from '../FollowerCard';

const cx = classNames.bind(styles);

const LeftSection = () => {
    return (
        <div className={cx('left-section')}>
            <ProfileCard />
            <FollowerCard />
        </div>
    );
};

export default LeftSection;
