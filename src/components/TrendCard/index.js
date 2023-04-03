import React from 'react';

import styles from './TrendCard.module.scss';
import classNames from 'classnames/bind';
import { TrendData } from '../../Data/TrendData';
const cx = classNames.bind(styles);

const TrendCard = () => {
    return (
        <div className={cx('container')}>
            <h3>Suggesion for you</h3>
            <div className={cx('trends')}>
                {TrendData.map((trend, index) => {
                    return (
                        <div className={cx('trend-item')} key={index}>
                            <span>#{trend.name}</span>
                            <span>{trend.shares}k shares</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TrendCard;
