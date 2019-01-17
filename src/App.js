import React, { Component } from 'react';
import Slider from 'react-slick';
import Image from './card.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactSlider />
      </div>
    );
  }
}

class ReactSlider extends React.Component {
  state = {
    oldSlide: 0,
    activeSlide: 0,
    activeSlide2: 0
  };

  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      beforeChange: (current, next) =>
        this.setState({ oldSlide: current, activeSlide: next }),
      afterChange: current => this.setState({ activeSlide2: current })
    };

    const { oldSlide } = this.state;

    return (
      console.log(this.state.oldSlide),
      (
        <div className="slider-div">
          <Slider {...settings}>
            <DivOne oldSlide={oldSlide} />
            <DivTwo oldSlide={oldSlide} />
            <DivThree oldSlide={oldSlide} />
            <DivFour oldSlide={oldSlide} />
            <DivFive oldSlide={oldSlide} />
          </Slider>
        </div>
      )
    );
  }
}

class DivOne extends Component {
  state = {
    currentIndex: 0
  };

  render() {
    const x = this.props.oldSlide;
    // const Add = x + 1;
    let width;
    if (x === this.state.currentIndex || x === 4) {
      width = '350px';
    } else {
      width = '100px';
    }
    return (
      <div className="img-div">
        <img id="img" src={Image} style={{ width: width }} alt="Socialytiks" />
      </div>
    );
  }
}

class DivTwo extends Component {
  state = {
    currentIndex: 1
  };

  changeIndex = () => {
    setTimeout(() => {
      this.setState({ currentIndex: 0 });
    }, 4000);
  };

  componentDidMount() {
    this.changeIndex();
  }

  render() {
    const x = this.props.oldSlide;
    let width;
    if (x === this.state.currentIndex) {
      width = '350px';
    } else {
      width = '100px';
    }

    return (
      <div className="img-div">
        <img id="img" src={Image} style={{ width: width }} alt="Socialytiks" />
      </div>
    );
  }
}

class DivThree extends Component {
  state = {
    currentIndex: 1
  };

  render() {
    const x = this.props.oldSlide;
    let width;
    if (x === this.state.currentIndex) {
      width = '350px';
    } else {
      width = '100px';
    }

    return (
      <div className="img-div">
        <img id="img" src={Image} style={{ width: width }} alt="Socialytiks" />
      </div>
    );
  }
}

class DivFour extends Component {
  state = {
    currentIndex: 2
  };

  render() {
    const x = this.props.oldSlide;
    let width;
    if (x === this.state.currentIndex) {
      width = '350px';
    } else {
      width = '100px';
    }

    return (
      <div className="img-div">
        <img id="img" src={Image} style={{ width: width }} alt="Socialytiks" />
      </div>
    );
  }
}

class DivFive extends Component {
  state = {
    currentIndex: 3
  };

  render() {
    const x = this.props.oldSlide;
    let width;
    if (x === this.state.currentIndex) {
      width = '350px';
    } else {
      width = '100px';
    }

    return (
      <div className="img-div">
        <img id="img" src={Image} style={{ width: width }} alt="Socialytiks" />
      </div>
    );
  }
}

export default App;
