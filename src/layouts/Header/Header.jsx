import config from '@/config';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'react-feather';
import Cart from './Cart';
import styles from './Header.module.css';

const cx = classNames.bind(styles);

const Header = () => {
    const categoryLinks = [
        { title: 'áo', slug: 'ao' },
        { title: 'áo khoác', slug: 'ao-khoac' },
        { title: 'túi', slug: 'tui' },
        { title: 'nón', slug: 'non' },
        { title: 'phụ kiện', slug: 'phu-kien' },
    ];

    return (
        <header className={cx('header')}>
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
