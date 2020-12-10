import React from "react";

const withLog = (WrapperComponent) => {
  return class WithLog {
    componentDidMount() {
      console.group(`WithLog ouput @${WrappedComponent.name}`);
      console.log(this.props);
      console.groupEnd();
    }

    render() {
        return (
             <WrapperComponent {...this.props}/>
        );
    }
  };
};

export default withLog;
