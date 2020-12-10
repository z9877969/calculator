import React from "react";

const withFetch = url => WrapperComponent => {
  return class WithFetch {
    state = {
      data: [],
      loading: false,
      error: null,
    };

    componentDidMount() {
      this.setState({ loading: true });
      fetch(url)
        .then(res => res.json())
        .then(data => this.setState({ data }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }

    render() {
      return <WrapperComponent {...this.props} />;
    }
  };
};

export default withFetch;
