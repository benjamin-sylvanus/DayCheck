import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "1.5rem",
            }}>
                <div style={{flexDirection: "row", marginBottom: "3rem", padding: "0.5rem", background:"#141618" }}>
                    <nav style={{
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "space-evenly",
                        textAlign: "center"
                    }}>

                        <li className="" style={{display: "flex", flexBasis: 1}}>
                            {/*eslint-disable-next-line*/}
                            <a href="#" style={{
                                color:"#ffffff",
                                borderRadius: "0.2rem",
                                background: "#23252a",
                                paddingLeft: "10px",
                                paddingRight: "10px"
                            }}> Calendar</a></li>


                        <li className="" style={{display: "flex", flexBasis: 1}}>
                            {/*eslint-disable-next-line*/}
                            <a href="#" style={{
                            color:"#ffffff",
                            borderRadius: "0.2rem",
                            background: "#23252a",
                            paddingLeft: "10px",
                            paddingRight: "10px"
                        }}>Today!</a></li>

                        <li style={{color:"#ffffff", display: "flex", minWidth: "fit-content"}}>
                            {/*eslint-disable-next-line*/}
                            <a href="#" style={{
                            color:"white",
                            borderRadius: "0.2rem",
                            background: "#23252a",
                            paddingLeft: "10px",
                            paddingRight: "10px"
                        }}>Another Item</a></li>
                    </nav>
                </div>


                <header style={{display: "flex", justifyContent: "center", flexDirection: "row"}}>
                    <h1>Todays Activities</h1>
                </header>
            </div>
        );
    }
}

export default Header;