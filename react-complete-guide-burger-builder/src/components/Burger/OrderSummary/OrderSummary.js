import React,{Component} from 'react'
import Aux from '../../../hoc/Auxilary/Auxilary'
import Button from '../../UI/Button/Button'
class OrderSummary extends Component{
    componentDidUpdate(){
        console.log('[Order summery] will update')
    }
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>
                    {igKey}
                </span>
                :{this.props.ingredients[igKey]}
            </li>
        })
        return (
        <Aux>
            <h3>
                Your Order
            </h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: ${this.props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCanceled}>Cancel</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
        </Aux>
    )
    }
}

export default OrderSummary