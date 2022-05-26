import React from 'react';
import {Card, Col, Divider} from 'antd';

class Main extends React.Component {
    render() {
        return (
            <div className="site-card-wrapper">
                <div style={{display: "flex", margin: "2rem", alignItems: "stretch", justifyContent: "space-evenly"}}>
                    <Col style={{display: "flex"}}>
                        <Card title="Exercise" bordered={true} style={{borderRadius: "1.5rem", flexGrow: 1}}>
                            Went to gym and played basketball.
                        </Card>
                    </Col>
                    <Col style={{display: "flex", maxWidth: "20%"}}>
                        <Card title="Work" bordered={true}
                              style={{
                                  borderRadius: "1.5rem",
                                  flexGrow: 1,
                                  textAlign: "left",
                                  alignItems: "center",
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
                    </Col>
                    <Col style={{display: "flex"}}>
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
                </div>
            </div>);
    }
}

export default Main;