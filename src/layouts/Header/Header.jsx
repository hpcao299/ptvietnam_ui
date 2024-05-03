import config from '@/config';
import { categoryLinks } from '@/constants';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'react-feather';
import Cart from './Cart';
import styles from './Header.module.css';
import blackLogo from '~/public/black_logo.png';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx('header')}>
            <div className={cx('header-content')}>
                <Link href={config.routes.home}>
                    <Image src={blackLogo} alt="PT Vietnam Logo" className={cx('header-logo')} />
                </Link>
                <div className={cx('header-links-wrapper')}>
                    {categoryLinks.map(({ title, slug }, i) => (
                        <Link href={`/category/${slug}`} key={i} className={cx('header-link')}>
                            {title}
                        </Link>
                    ))}
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
                    <Cart />
                </div>
            </div>
        </header>
    );
};

export default Header;
