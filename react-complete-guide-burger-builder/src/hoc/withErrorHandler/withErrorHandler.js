import React from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Auxilary/Auxilary'

const withErrorHandler = (WrapperComponent, axios) => {
    return class extends React.Component {
        state = {
            error: null
        }
        componentWillMount() {
            this.reqInter = axios.interceptors.request.use(req => {
                this.setState({ error: null })
                return req
            })
            this.resInter = axios.interceptors.response.use(res => res, err => {
                this.setState({ error: err })
            })
        }

        componentWillUnmount(){
            console.log('Will unmount',this.reqInter,this.resInter)
            axios.interceptors.request.eject(this.reqInter)
            axios.interceptors.response.eject(this.resInter)
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null })
        }
        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} modelClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrapperComponent {...this.props} />
                </Aux>

            )
        }
    }
}

export default withErrorHandler