import classNames from 'classnames/bind';
import React from 'react';
import styles from './Banner.module.css';
import Image from 'next/image';

const cx = classNames.bind(styles);

const Banner = () => {
    return (
        <div className={cx('banner-wrapper')}>
            <div className={cx('banner-col')}>
                <Image src="/banner1.jpeg" alt="Banner image" width={489} height={326} />
            </div>
            <div className={cx('banner-col')}>
                <div className={cx('banner-row')}>
                    <div>
                        <Image
                            src="/product_1.jpeg"
                            alt="Banner image"
                            width={390}
                            height={152}
                            style={{ objectPosition: '0 -6px' }}
                        />
                    </div>
                    <div>
                        <Image
                            src="/product_3.jpeg"
                            alt="Banner image"
                            width={390}
                            height={152}
                            style={{ objectPosition: '0 -80px' }}
                        />
                    </div>
                </div>
            </div>
            <div className={cx('banner-col')}>
                <Image src="/banner4.jpeg" alt="Banner image" width={287} height={326} />
            </div>
        </div>
    );
};

export default Banner;
