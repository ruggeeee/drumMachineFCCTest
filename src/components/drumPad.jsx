import React from 'react';
import { connect } from 'react-redux';
import { updateDisplay } from '../redux/actions';
import Heater_1 from '../assets/sounds/Heater-1.mp3';
import Heater_2 from '../assets/sounds/Heater-2.mp3';
import Heater_3 from '../assets/sounds/Heater-3.mp3';
import Heater_4 from '../assets/sounds/Heater-4.mp3';
import Heater_6 from '../assets/sounds/Heater-6.mp3';
import Dsc_Oh from '../assets/sounds/Dsc_Oh.mp3';
import Kick_n_Hat from '../assets/sounds/Kick_n_Hat.mp3';
import RP4_KICK_1 from '../assets/sounds/RP4_KICK_1.mp3';
import Cev_H2 from '../assets/sounds/Cev_H2.mp3';

const sounds = {
    Q: { id: 'Heater-1', src: Heater_1, description: 'Heater 1' },
    W: { id: 'Heater-2', src: Heater_2, description: 'Heater 2' },
    E: { id: 'Heater-3', src: Heater_3, description: 'Heater 3' },
    A: { id: 'Heater-4', src: Heater_4, description: 'Heater 4' },
    S: { id: 'Clap', src: Heater_6, description: 'Clap' },
    D: { id: 'Open-HH', src: Dsc_Oh, description: 'Open HH' },
    Z: { id: 'Kick-n-Hat', src: Kick_n_Hat, description: 'Kick n\' Hat' },
    X: { id: 'Kick', src: RP4_KICK_1, description: 'Kick' },
    C: { id: 'Closed-HH', src: Cev_H2, description: 'Closed HH' }
};

class DrumPad extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (event) => {
    if (event.key.toUpperCase() === this.props.padKey) {
      this.playSound();
    }
  }

  playSound = () => {
    const audio = document.getElementById(this.props.padKey);
    audio.currentTime = 0;
    audio.play();
    this.props.updateDisplay(sounds[this.props.padKey].description);
  }

  render() {
    const { padKey } = this.props;
    return (
      <div className="drum-pad" id={`drum-pad-${sounds[padKey].id}`} onClick={this.playSound}>
        {padKey}
        <audio className='clip' id={padKey} src={sounds[padKey].src} type="audio/mp3"></audio>
      </div>
    );
  }
}

export default connect(null, { updateDisplay })(DrumPad);