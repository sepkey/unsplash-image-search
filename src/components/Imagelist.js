const ImageList = (props) => {
  console.log(props.images);
  const images = props.images.map(({ urls, alt_description, id }) => {
    return <img src={urls.regular} alt={alt_description} key={id} />;
  });

  return <div>{images}</div>;
};

export default ImageList;
