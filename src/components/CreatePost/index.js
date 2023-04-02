import React, { useState, useRef } from 'react';

import Avatar from '../../assets/images/luffy.jpg';
import { FiImage, FiPlayCircle } from 'react-icons/fi';
import { TfiLocationPin, TfiClose } from 'react-icons/tfi';

import styles from './CreatePost.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CreatePost = () => {
    const [image, setimage] = useState(null);
    const imageRef = useRef();

    const handleChangeImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            const img = e.target.files[0];
            img.preview = URL.createObjectURL(img);
            setimage(img);
        }
    };

    return (
        <div className={cx('container')}>
            <img src={Avatar} alt="avatar" className={cx('avatar')} />
            <div className={cx('wrapper')}>
                <input type="text" placeholder="What are you thinking of?" />
                <div className={cx('post-options')}>
                    <div className={cx('option')} onClick={() => imageRef.current.click()}>
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
                    <div style={{ display: 'none' }}>
                        <input type="file" name="myImage" ref={imageRef} onChange={handleChangeImage} />
                    </div>
                </div>
                {image && (
                    <div className={cx('wrapper-preview')}>
                        <TfiClose className={cx('btn-close')} onClick={() => setimage(null)} />
                        <img src={image.preview} alt="preview" className={cx('preview-image')} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreatePost;
