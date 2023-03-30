import React, { useState, useRef } from 'react';

import Avatar from '../../assets/images/profileImg.jpg';
import { FiImage, FiPlayCircle } from 'react-icons/fi';
import { TfiLocationPin } from 'react-icons/tfi';

import styles from './CreatePost.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CreatePost = () => {
    return (
        <div className={cx('container')}>
            <img src={Avatar} alt="avatar" />
            <div className={cx('wrapper')}>
                <input type="text" placeholder="What are you thinking of?" />
                <div className={cx('post-options')}>
                    <div className={cx('option')}>
                        <FiImage />
                        Photo
                    </div>
                    <div className={cx('option')}>
                        <FiPlayCircle />
                        Video
                    </div>
                    <div className={cx('option')}>
                        <TfiLocationPin />
                        Check in
                    </div>
                    <div className={cx('btn-post') + ' button'}>Post</div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
