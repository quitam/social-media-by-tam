import React from 'react';

import styles from './ProfileSection.module.scss';
import classNames from 'classnames/bind';
import LogoSearch from '../LogoSearch';
import ProfileCard from '../ProfileCard';
import FollowerCard from '../FollowerCard';

const cx = classNames.bind(styles);

const ProfileSection = () => {
    return (
        <div className={cx('profile-section')}>
            <LogoSearch />
            <ProfileCard />
            <FollowerCard />
        </div>
    );
};

export default ProfileSection;
