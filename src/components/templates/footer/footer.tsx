import React, {FC} from 'react';
import styles from "./footer.module.scss";

const Footer:FC = () => {
    return (
        <div className={styles.footer}>
            <h2>Сократить ссылку легко</h2>
            <p>
                С помощью нашего бесплатного и универсального сервиса сокращения URL Вы можете сделать из длинной ссылки
                короткую, или просто - сократить или укоротить ссылку. Короткие ссылки удобно отсылать в сообщениях или
                комментариях на facebook, instagram, twitter, vk, whatsapp, telegram или любом другом сервисе или сайте.
                Наши короткие URL-адреса абсолютно бесплатны и безопасны - очень удобно, возможно, даже лучший аналог
                bitly или clck :)
            </p>
        </div>
    );
};

export default Footer;