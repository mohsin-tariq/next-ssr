interface Props {
  url: string,
  altText: string
}

const ImageItem = ({ url, altText }: Props): JSX.Element => <img src={url} alt={altText}/>;

export default ImageItem;


