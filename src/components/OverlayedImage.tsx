interface OverlayedImageProps {
    src: string;
    alt: string;
}
export const OverlayedImage: React.FC<OverlayedImageProps> = ({ src, alt }) => {
    return (
        <div className='overlayed-image'>
            <div className='overlay'>&nbsp;</div>
            <img src={src} alt={alt} />
        </div>
    );
};
