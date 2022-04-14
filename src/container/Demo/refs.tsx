import React from "react";
import { Input, Button, InputRef } from 'antd';

class Refs extends React.Component {
    myRef = React.createRef<InputRef>();

    render() {
        return (
            <div>
                <Input ref={this.myRef} type="text" placeholder="点击提示" />
                <Button onClick={this.showTips} >点击提示</Button>
                <p></p>
                <Input onBlur={(e) => alert(e.target.value)} type="text" placeholder="失焦提示" />
            </div>
        );
    }

    showTips = () => {
        alert(this.myRef.current!.input?.value);

    }
}

export default Refs;