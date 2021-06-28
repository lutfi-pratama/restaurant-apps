const LoaderInitiator = {
  displayLoading(loader) {
    loader.classList.add('display');
    // to stop loading after some time
    setTimeout(() => {
      loader.classList.remove('display');
    }, 1500);
  },

  hideLoading(loader) {
    loader.classList.remove('display');
  },
};

export default LoaderInitiator;
