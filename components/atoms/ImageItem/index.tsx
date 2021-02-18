import Image from 'next/image';
interface Props {
  url: string,
  altText: string
}

const myLoader = ({ src, width, quality }) => {
  return `https://images2.imgbox.com/${src}?w=${width}&q=${quality || 75}`
}

const ImageItem = ({ url, altText }: Props): JSX.Element => <Image layout="fixed" loader={myLoader} quality={100} src={url ? url.replace('https://images2.imgbox.com', ''): '404'} alt={altText} width={180} height={180} />;

export default ImageItem;


