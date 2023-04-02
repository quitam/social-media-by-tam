import React from 'react';

import Cover from '../../assets/images/cover.jpg';
import Avatar from '../../assets/images/luffy.jpg';

import styles from './ProfileCard.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ProfileCard = () => {
    return (
        <div className={cx('profile-card')}>
            <div className={cx('profile-image')}>
                <img src={Cover} alt="" className={cx('cover-img')} />
                <img src={Avatar} alt="" className={cx('avatar')} />
            </div>

            <div className={cx('profile-info')}>
                <span className={cx('profile-name')}>Qui Tam</span>
                <span className={cx('profile-job')}>Software Engineer</span>
            </div>

            <div className={cx('follow-status')}>
                <hr />
                <div className={cx('wrapper')}>
                    <div className={cx('follow-item')}>
                        <span>9999</span>
                        <span>Followers</span>
                    </div>

                    <div className={cx('vertical-line')}></div>

                    <div className={cx('follow-item')}>
                        <span>23</span>
                        <span>Followerings</span>
                    </div>
                </div>
                <hr />
            </div>
            <div className={cx('btn-profile')}>
                <span>My Profile</span>
            </div>
        </div>
    );
};

export default ProfileCard;
