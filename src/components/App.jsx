import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { fetchQuery } from 'services/api';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { ModalWindow } from 'components/Modal/Modal';
import { Container } from 'components/App.styled';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    totalImages: 0,
    loading: false,
    largeImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.setState({ loading: true });

      fetchQuery(searchQuery, page)
        .then(resp =>
          this.setState(prevState => ({
            images: [...prevState.images, ...resp.images],
            totalImages: resp.TotalHits,
          }))
        )
        .catch(error => console.log(error))
        .finally(() => this.setState({ loading: false }));
    }
  }

  searchQueryValue = value => {
    if (value === this.state.searchQuery) {
      toast.warn('Enter another search query!');
      return;
    }

    this.setState({
      searchQuery: value,
      page: 1,
      totalImages: 0,
      images: [],
      showLoadMoreBtn: false,
    });
  };

  getModalImage = imageUrl => {
    this.setState({ largeImage: imageUrl });
  };

  largeImageStateReset = () => {
    this.setState({ largeImage: '' });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, largeImage, loading, totalImages } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.searchQueryValue} />
        <ImageGallery images={images} getModalImage={this.getModalImage} />
        {loading && <Loader />}
        {totalImages !== images.length && (
          <Button onClick={this.handleLoadMore} />
        )}

        <ToastContainer position="top-center" autoClose={1500} />

        {largeImage && (
          <ModalWindow
            largeImage={largeImage}
            largeImageStateReset={this.largeImageStateReset}
          />
        )}
      </Container>
    );
  }
}

export default App;
