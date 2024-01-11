import classNames from 'classnames/bind';
import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import config from '@/config';
import { ShoppingCart, Search } from 'react-feather';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('header')}>
            <div className={cx('header-content')}>
                <Link href={config.routes.home}>
                    <Image
                        src="/black_logo.png"
                        alt="PT Vietnam Logo"
                        height={60}
                        width={115}
                        className={cx('header-logo')}
                    />
                </Link>
                <div className={cx('header-links-wrapper')}>
                    <Link href="/" className={cx('header-link')}>
                        áo
                    </Link>
                    <Link href="/" className={cx('header-link')}>
                        áo khoác
                    </Link>
                    <Link href="/" className={cx('header-link')}>
                        túi
                    </Link>
                    <Link href="/" className={cx('header-link')}>
                        nón
                    </Link>
                    <Link href="/" className={cx('header-link')}>
                        tem
                    </Link>
                    <Link href="/" className={cx('header-link')}>
                        phụ kiện
                    </Link>
                </div>
                <div className="d-flex al-center">
                    <form className={cx('header-search-wrapper')}>
                        <input
                            name="search"
                            type="text"
                            placeholder="Tìm kiếm..."
                            className={cx('header-search-input', 'blank')}
                        />
                        <button type="submit" className={cx('header-search-submit', 'blank')}>
                            <Search size={20} />
                        </button>
                    </form>
                    <Link href={config.routes.cart}>
                        <div className={cx('header-cart')}>
                            <ShoppingCart size={26} />
                            <div className={cx('header-cart-count')}>0</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
