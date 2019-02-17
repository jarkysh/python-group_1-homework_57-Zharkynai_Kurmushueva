import React, {Component} from 'react';
import './App.css';
import Modal from './components/UI/Modal/Modal';
import OrderButton from './components/OrderButton/OrderButton'
import Button from "./components/UI/Button/Button";
import Alert from './components/UI/Alert/Alert'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {isModalOpen: false,
                    isAlertOpen: false,

                    }
    }
 openModal()
        {
            this.setState({isModalOpen: true})
        }

        closeModal()
        {
            this.setState({isModalOpen: false})
        }

    openAlert = () => {
        this.setState({isAlertOpen: true})
    };
    closeAlert = () => {
        this.setState({isAlertOpen: false})
    };

    continued = () => {
        alert('Continue')
    };

    autoCancelAlert = () => {
        this.showAlert();
        if (this.state.alertCancelTime > 0) {
            return setTimeout(this.cancelAlert, this.state.alertCancelTime)
        }
    };

    render() {
        const buttonRow = [
            {btnType: 'primary', label: 'Continue', clicked: this.continued},
            {btnType: 'danger', label: 'Close', clicked: this.cancelModal}
        ];


                    return (
                <div>
                    <button onClick={() => this.openModal()}>Open modal</button>
                    <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                        <h3>Some kinda modal title</h3>
                        <p>This is modal content</p>


                    </Modal>


                </div>
            )
        }

}

export default App;