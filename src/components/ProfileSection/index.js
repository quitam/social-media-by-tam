import React from 'react';

import styles from './ProfileSection.module.scss';
import classNames from 'classnames/bind';
import LogoSearch from '../LogoSearch';

const cx = classNames.bind(styles);

const ProfileSection = () => {
    return (
        <div className={cx('profile-section')}>
            <LogoSearch />
        </div>
    );
};

export default ProfileSection;
