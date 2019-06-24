import React, { Component } from 'react'
import ReactWordcloud from 'react-wordcloud'
class WordCloud extends Component {
    state = {
        empty: true,
        data: [],
        list:[]
    }
    componentDidMount() {
        fetch('http://localhost:8080/api/')
            .then(res => res.json()).then(res => {
                let list1 = []
                res.map(element=>list1.push([element.text,element.value]))
                this.setState({ empty:false,data: res,list:list1 })
            })
    }

    render() {
        // let printData ="No data"
        
        // if(!this.state.empty){
        //     printData = this.state.data.map(element => {
        //        return <p>{element.text}  {element.value}</p>
        //     });
        // }
        return (
            <div>
                {/* {printData}
                {this.state.list} */}
                <ReactWordcloud words={this.state.data}  options={{
        fontFamily: 'courier new',
        fontSizes: [5, 8],
        // fontStyle: 'italic',
        // fontWeight: 'bold',
  }}/>
            </div>
        )
    }
}

export default WordCloud