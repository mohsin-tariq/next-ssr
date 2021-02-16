import Image from 'next/image'

interface Props {
  url: string,
  altText: string
}

const ImageItem = ({ url, altText }: Props): JSX.Element => <Image src={url} alt={altText} width={'100px'} height={'100px'}/>;

export default ImageItem;


