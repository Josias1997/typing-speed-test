import React from "react";
import { MDBBtn, MDBIcon, MDBInput } from "mdbreact";

const Main = props => {
    return (
        <div className="container">
            <div className="container">
                <div style = {{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    padding: '40px 0',
                }}>
                    <h1>Typing Test MPM</h1>
                </div>
                <div className="progress md-progress">
                    <div className="progress-bar" role="progressbar" style={{
                        width: '100%',
                        backgroundColor: "#ff4444"
                    }}></div>
                </div>
                <div style={{
                    width: '100%',
                    backgroundColor: "#2E2E2E",
                    color: 'white',
                    fontWeight: 'bold',
                    height: '70px',
                    borderRadius: '5px',
                    padding: '20px 0 20px 10px',
                }}>
                    Typing Test - Cliquez dans la box aussi vite que vous pouvez pendant 10 secondes.
                </div>
                <div class="form-group mt-3">
                    <textarea class="form-control" id="exampleFormControlTextarea3" rows="7" disabled></textarea>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <div style={{
                        width: '68%'
                    }}>
                        <MDBInput label="Recopiez le mot ici" />
                    </div>
                    <div style={{
                        width: '12%'
                    }}>
                       <MDBBtn color="elegant">
                           <MDBIcon className="mr-2" far icon="clock"/>
                           <strong>1:00</strong>
                        </MDBBtn>
                    </div>
                    <div style={{
                        width: '20%'
                    }}>
                       <MDBBtn color="blue-grey" style={{
                           color: "black"
                       }}>
                           <MDBIcon className="mr-2"  icon="sync"/>
                           Recommencer ?
                        </MDBBtn>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%'
                }}>
                    <div style={{
                        width: '65%',
                    }}>
                        <div style={{
                            backgroundColor: '#2E2E2E',
                            fontWeight: 'bold',
                            color: 'white',
                            padding: '20px 0 20px 15px',
                            borderRadius: '5px 5px 0 0'
                        }}>
                            Résultat
                        </div>
                        <div style={{
                            backgroundColor: '#ccc',
                            fontWeight: 'bold',
                            padding: '20px 0 20px 60px',
                        }}>
                            <h4>57 MPM (mots par minute)</h4>
                            <p>Frappes</p>
                            <p>Précision</p>
                            <p>Mots corrects</p>
                            <p>Mots incorrects</p>
                        </div>
                    </div>
                    <div style={{
                        width: '32%',
                        backgroundColor: 'blue'
                    }}>
                       Publicité
                    </div>
                </div>
                <hr />
                <div className="mt-3" style={{
                    backgroundColor: '#ff4444',
                    color: 'white',
                    borderRadius: '5px'
                }}>
                    <div style={{
                        color: 'white',
                        padding: '5px 0 0 15px',
                    }}>
                        Header
                        <hr/>
                    </div>
                    <div style={{
                            padding: '20px 0 20px 15px' 
                        }}>
                        Content
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Main;