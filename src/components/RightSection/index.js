import React from 'react';

import styles from './RightSection.module.scss';
import classNames from 'classnames/bind';
import TrendCard from '../TrendCard';
const cx = classNames.bind(styles);

const RightSection = () => {
    return (
        <div className={cx('right-section')}>
            <TrendCard />
            <div className={cx('btn-share') + ' button'}>
                <span>Share</span>
            </div>
        </div>
    );
};

export default RightSection;
