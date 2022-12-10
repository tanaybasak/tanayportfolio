import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import { useIntersection } from './intersectionObserver';
import './imageRenderer.scss';
import Image from "next/image";

const ImageRenderer = ({ url, thumb, width, height }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef();
    useIntersection(imgRef, () => {
        setIsInView(true);
    });

    const handleOnLoad = () => {
        setIsLoaded(true);
    };
    return (
        <div
            className="image-container"
            ref={imgRef}
            style={{
                paddingBottom: `${(height / width) * 100}%`,
                width: '100%'
            }}
        >
            {isInView && (
                <>
                    <Image className={classnames('image', 'thumb', {
                        ['isLoaded']: !!isLoaded
                    })}
                        alt="image"
                        src={thumb} />
                    <Image
                        className={classnames('image', {
                            ['isLoaded']: !!isLoaded
                        })}
                        alt="image"
                        src={url}
                        onLoad={handleOnLoad}
                    />
                </>
            )}
        </div>
    );
};

export default ImageRenderer;