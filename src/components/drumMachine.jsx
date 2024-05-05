import React from 'react';
import { connect } from 'react-redux';
import DrumPad from './drumPad';
import { updateDisplay } from '../redux/actions';

class DrumMachine extends React.Component {
  render() {
    return (
      <div id="drum-machine">
        <div id="display">{this.props.display}</div>
        <div className="pad-container"> {/* Additional div for styling or semantic grouping */}
          {['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'].map(key => (
            <DrumPad key={key} padKey={key} updateDisplay={this.props.updateDisplay} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  display: state.display
});

const mapDispatchToProps = {
  updateDisplay 
};

export default connect(mapStateToProps, mapDispatchToProps)(DrumMachine);