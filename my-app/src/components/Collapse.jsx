import React from "react";

class Component extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isShow : props.opened};
    }

    hideShowText = () =>{
        const { isShow } = this.state;
        this.setState({ isShow: !isShow })
    }

    render(){
        const { isShow }  = this.state;

        return(
            <div className="m-5">

                <p className="d-flex justify-content-center">
                    <a onClick={this.hideShowText} className="btn btn-primary" data-bs-toggle="collapse" href="#" role="button" aria-expanded={ isShow }> { isShow ? "Скрыть" : "Показать" } </a>
                </p>
                <div className={`collapse ${ isShow ? 'show':'' } `}>
                    <div className="card card-body">{this.props.text}</div>
                </div>
            </div>
        );
    }



}

export default Component;
