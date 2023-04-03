import React from 'react';

import styles from './RightSection.module.scss';
import classNames from 'classnames/bind';
import { FiHome, FiSettings, FiBell, FiUser } from 'react-icons/fi';
import TrendCard from '../TrendCard';
const cx = classNames.bind(styles);

const RightSection = () => {
    return (
        <div className={cx('right-section')}>
            <div className={cx('nav-icons')}>
                <dv className={cx('wrap-icon')}>
                    <FiHome fill="var(--primary)" />
                </dv>
                <dv className={cx('wrap-icon')}>
                    <FiSettings />
                </dv>
                <dv className={cx('wrap-icon')}>
                    <FiBell style={{ transform: 'rotate(22.5deg)' }} />
                </dv>
                <dv className={cx('wrap-icon')}>
                    <FiUser />
                </dv>
            </div>

            <TrendCard />
            <div className={cx('btn-share') + ' button'}>
                <span>Share</span>
            </div>
        </div>
    );
};

export default RightSection;
