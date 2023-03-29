import React from 'react';

import styles from './FollowerCard.module.scss';
import classNames from 'classnames/bind';
import { Followers } from '../../Data/FollowerData';
const cx = classNames.bind(styles);

const FollowerCard = () => {
    return (
        <div className={cx('container')}>
            <h3>Who is following you?</h3>
            {Followers.map((follower, index) => {
                return (
                    <div className={cx('follower')} key={index}>
                        <div className={cx('fl-info')}>
                            <img src={follower.img} alt={follower.name} className={cx('fl-avt')} />
                            <div className={cx('fl-name')}>
                                <span>{follower.name}</span>
                                <span>@{follower.username}</span>
                            </div>
                        </div>
                        <div className={cx('fl-btn') + ' button'}>Follow</div>
                    </div>
                );
            })}
        </div>
    );
};

export default FollowerCard;
