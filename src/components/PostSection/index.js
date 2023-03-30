import React from 'react';

import styles from './PostSection.module.scss';
import classNames from 'classnames/bind';
import CreatePost from '../CreatePost';

const cx = classNames.bind(styles);

const PostSection = () => {
    return (
        <div className={cx('container')}>
            <CreatePost />
        </div>
    );
};

export default PostSection;
