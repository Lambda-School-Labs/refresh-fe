import React from 'react'
import {addWater, subtractWater} from '../../../../../views/private/actions/actions-user'
import {connect} from 'react-redux'
import WaterImage from './water.svg'
class WaterCard extends React.Component{
    render(){
        return(
            <div className='water-card metric-card'>
                <h3 className='metrics-card-title'>Water</h3>
                <div className= 'metrics-card-content'>
                {/* <img  src={WaterImage} alt=""></img> */}
                <div
                    data-preset="bubble"
                    data-path="M10 10L90 10L90 90L10 90Z"
                    class="ldBar"
                    data-value={this.props.water / 8 * 100}
                    
                />
                </div>
                <div className='metric-card-input'>
                <button disabled={this.props.isFetching} onClick={() => this.props.subtractWater(-1, this.props.userId, this.props.dailyPoints, this.props.totalPoints)}>-</button>
                <h3>{this.props.water}/8</h3>
                <button disabled={this.props.isFetching} onClick={() => this.props.addWater(1, this.props.userId, this.props.dailyPoints, this.props.totalPoints)}>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        water: state.userReducer.water,
        userId: state.userReducer.userId,
        dailyPoints: state.userReducer.dailyPoints,
        totalPoints: state.userReducer.totalPoints,
        isFetching: state.userReducer.isFetching
    }
}
export default connect(mapStateToProps, { addWater, subtractWater })(WaterCard);
