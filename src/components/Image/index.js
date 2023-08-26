import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/img';
import styles from './Image.module.scss';

//fallback: customFallback đổi tên fallback thành customFallback để
//tránh trùng với biến fallback đặt phái dưới
const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;