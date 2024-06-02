function withLoading(WrappedComponent) {
  // eslint-disable-next-line react/prop-types
  return function WithLoadingComponent({ isLoading, ...props }) {
    return isLoading ? null : <WrappedComponent {...props} />;
  };
}

export default withLoading;
