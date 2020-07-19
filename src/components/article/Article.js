import * as React from "react";

class Article extends React.Component {
  componentDidMount() {
    const {handle} = this.props.match.params;
    console.log(handle);
  }

  render() {
    return (
      <div/>
    );
  }
}

export default Article;