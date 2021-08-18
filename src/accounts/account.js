import React, { useState } from 'react'
import { Card, Modal, Button } from 'react-bootstrap'
import { Input } from './form'
// import image from './FutureFX.png'

export default function Account(props) {
        const {userDetails, handleSubmit, deleteCard} = props

        const [show, setShow] = useState(false)

        const handleClose = () => setShow(false)
        const handleShow = () => setShow(true)
        const rows = userDetails.map((row, index) => {
            return(
                <div className="container" key={index}>
                    <div className="card" style={{width:"20rem", height:"15rem"}}>
                            {/* <img src={image} alt="FutureFx" /> */}
                        <div className="card-body">
                            <div className="row">
                                <span className="col-sm-6">{row.accountCurrency}</span>
                                <span className="col-sm-6 text-right">
                                    <Button className="btn-danger" variant="seconday" onClick={() => deleteCard(index)}>X</Button>
                                </span>
                            </div>
                            <div className="position-absolute fixed-bottom">
                                <p className="padding-left:5rem">{row.bankNumber}</p>
                                <p>{row.recipientBank}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        
        return (
            <div>
            <div className="container" style={{marginTop: '5rem'}}>
                    <div class="card text-center">
                        <div className="card-header">
                            <ul className="nav nav-taps card-header-tabs">
                                    <li className="nav-item">
                                        <a href="." className="nav-link active" >Recipients</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="." className="nav-link" >Bank Cards</a>
                                    </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <div className="row d-flex">
                                <span>{rows}</span>
                                <span>
                                <Card style={{width: '20rem', height:'15rem'}}>
                                    <Card.Body className="align-items-center d-flex justify-content-center" onClick={handleShow}>
                                        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
                                    </Card.Body>
    
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>
                                            <h3>Add a recipient </h3>
                                            <p style={{fontSize:'10px'}}>Kindly add a recipient account details</p>
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                                <Input 
                                                handleSubmit={handleSubmit}/>
                                        </Modal.Body>
                                    </Modal>
                                </Card>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}