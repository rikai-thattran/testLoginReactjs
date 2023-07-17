
import React from 'react';
import MyComponent from './MyComponent';

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    toggleJobs = () => {
        this.setState(prevState => ({
            showJobs: !prevState.showJobs
        }));
    }

    render() {
        let array = this.props.hovaten;
        console.log(array)
        let name = this.props.name;
        let age = this.props.age
        return (
            <React.Fragment>
                <div>Tên là : {name}</div>
                <div>Tuổi là : {age}</div>
                <div>{array.map((item, index) => (
                    <div>
                        {item.Ho} - {item.Ten}
                    </div>
                ))}</div>
                <div>------------</div>
                {this.state.showJobs === false ? <div><button onClick={this.toggleJobs}>Show</button></div>
                    :
                    <React.Fragment>
                        <div className="job-lists">
                            {array.map((item, index) => (
                                <div key={index + 1}>
                                    {item.Ho} - {item.Ten}
                                </div>
                            ))}
                        </div>
                        {/* <MyComponent /> */}
                        <div><button onClick={this.toggleJobs}>Hide</button></div>
                    </React.Fragment>
                }
            </React.Fragment>
        );
    }
}

export default ChildComponent;


