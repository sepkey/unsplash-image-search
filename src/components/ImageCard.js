import React from "react";
class ImageCard extends React.Component {
  constructor(props) {
    super();
    this.imgRef = React.createRef();
    this.state = { spans: 0 };
  }
  componentDidMount() {
    // console.log(this.imgRef);
    this.imgRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    // console.log(this.imgRef.current.clientHeight);
    const height = this.imgRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    console.log(spans);

    this.setState({ spans });
  };

  render() {
    const { alt_description, urls } = this.props.image;
    return (
      <div
        style={{
          gridRowEnd: `span ${this.state.spans}`,
          justifySelf: "center",
        }}
      >
        <img ref={this.imgRef} alt={alt_description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
