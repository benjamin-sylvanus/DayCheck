import React from 'react';
import {Card, Col, Divider, Row} from 'antd';

class Main extends React.Component {
    state={width: 0}

    handleSize() {
        let innerWidth = window.innerWidth;
        alert(innerWidth);
        if (innerWidth<=600) {
            return 'row-width-70'
        }
        else {
            return 'row-width-30';
        }
    }
    render() {
        return (
            <div style={{
                display: "flex",
                margin: "2rem",
                alignItems: "center",
                alignContent: "normal",
                justifyContent: "space-around",
                flexDirection: "column",
                rowGap: "2rem"
            }}>
                <Col className={this.handleSize()}>
                    <Card title="Exercise" bordered={true} style={{borderRadius: "1.5rem", flexGrow: 1}}>
                        Went to gym and played basketball.
                    </Card>
                </Col>
                <Row className={this.handleSize()}>
                    <Card title="Work" bordered={true}
                          style={{
                              borderRadius: "1.5rem",
                              flexGrow: 1,
                              textAlign: "left",
                              padding: 10
                          }}>
                        <p>Spent time on new project for work. Read about matrix translation and rotation.
                            Doesn't make
                            sense yet.
                        </p>
                        <Divider/>
                        <p>
                            Made progress on website. Specifically practiced using an animation library and
                            worked on
                            fundamental CSS styling.
                        </p>
                        <Divider/>
                        <div>
                            Made this as fast as I could
                        </div>


                    </Card>
                </Row>

                <Col className={this.handleSize()}>
                    <Card title="Sleep" bordered={true}
                          style={{
                              borderRadius: "1.5rem",
                              flexGrow: 1,
                              textAlign: "left",
                              alignContent: "center",
                              padding: 20
                          }}>
                        <div>
                            Went to bed: TBD
                        </div>

                        <div>
                            Woke up: 2am
                        </div>


                        <Divider/>
                        <div>Energy in morning: Good</div>
                        <div>Energy in afternoon: Bad</div>
                    </Card>
                </Col>
            </div>);
    }
}

export default Main;