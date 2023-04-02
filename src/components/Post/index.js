import React from 'react';

import { FiHeart, FiMessageSquare, FiSend } from 'react-icons/fi';
import styles from './Post.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const Post = ({ post }) => {
    return (
        <div className={cx('container')}>
            <img src={post.img} alt={post.name} className={cx('post-image')} />

            <div className={cx('wrapper-react')}>
                {post.liked ? (
                    <FiHeart color="red" fill="red" className={cx('react')} />
                ) : (
                    <FiHeart className={cx('react')} />
                )}
                <FiMessageSquare className={cx('react')} />
                <FiSend className={cx('react')} />
            </div>
            <span>{post.likes} likes</span>

            <div className={cx('caption')}>
                <span>
                    <b>{post.name}</b>
                </span>
                <span> {post.desc}</span>
            </div>
        </div>
    );
};

export default Post;
