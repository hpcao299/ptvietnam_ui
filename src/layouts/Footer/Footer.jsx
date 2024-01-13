import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import { Smartphone, Mail } from 'react-feather';

const Footer = () => {
    const serviceLinks = [
        'Thông tin thanh toán',
        'Cách đặt hàng',
        'Chính sách đổi hàng',
        'Chính sách bảo hành',
        'Hướng dẫn chọn size',
        'Câu hỏi thường gặp',
    ];

    const productLinks = ['Tất cả sản phẩm', 'Áo', 'Áo khoác', 'Túi', 'Tem', 'Phụ kiện'];

    return (
        <footer className={styles.footer}>
            <div className="main-content">
                <div className={styles.content}>
                    <div className={styles.col}>
                        <Image
                            src="/white_logo.png"
                            alt="White logo"
                            width={186}
                            height={92}
                            className={styles.logo}
                        />
                        <div className={styles.contact} style={{ marginBottom: '8px' }}>
                            <Smartphone />
                            <span>Số điện thoại: 090 233 20 18</span>
                        </div>
                        <div className={styles.contact}>
                            <Mail />
                            <span>Email: workptvietnam@gmail.com</span>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.heading}>Dịch vụ khách hàng</div>
                        {serviceLinks.map((title, i) => (
                            <div className={styles.link} key={i}>
                                {title}
                            </div>
                        ))}
                    </div>

                    <div className={styles.col}>
                        <div className={styles.heading}>danh mục sản phẩm</div>
                        {productLinks.map((title, i) => (
                            <div className={styles.link} key={i}>
                                {title}
                            </div>
                        ))}
                    </div>
                    <div className={styles.col}>
                        <div className={styles.heading}>theo dõi chúng tôi</div>
                        <div className={styles.socialMediaLinks}>
                            <a
                                href="https://www.facebook.com/pornteamvn"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Image
                                    src="/facebook_icon.png"
                                    alt="Facebook icon"
                                    width={32}
                                    height={32}
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/pt_vietnam"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Image
                                    src="/instagram_icon.png"
                                    alt="Instagram icon"
                                    width={32}
                                    height={32}
                                />
                            </a>
                            <a
                                href="https://www.youtube.com/pornteamvn"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Image
                                    src="/youtube_icon.png"
                                    alt="Youtube icon"
                                    width={32}
                                    height={32}
                                />
                            </a>
                            <a
                                href="https://www.tiktok.com/@pt_vietnam"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Image
                                    src="/tiktok_icon.png"
                                    alt="Tiktok icon"
                                    width={32}
                                    height={32}
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>Copyright © 2024 PORNTeam Vietnam.</div>
            </div>
        </footer>
    );
};

export default Footer;
