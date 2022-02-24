import React, { useState } from "react";
import styles from "./room.module.css";
import { Modal, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
const Room = ({ room }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className="container">
			<div
				style={{ textAlign: "center" }}
				className={`row justify-content-center mt-5  ${styles.bs}`}
			>
				<div className="col-md-4">
					<img src={room.imageurls[0]} className={styles.smallimg} alt="" />
				</div>
				<div className="col-md-7 text-left">
					<h2>{room.name}</h2>
					<b>
						<p className={styles.p}>Max Count : {room.maxcount}</p>
						<p className={styles.p}>Phone : {room.phonenumber}</p>
						<p className={styles.p}>type : {room.type}</p>
					</b>
					<div style={{ float: "right" }}>
						<Link to={`/room/${room._id}`}>
							<button
								style={{ marginRight: "10px" }}
								className={`btn btn-primary ${styles.button}`}
							>
								Book Now
							</button>
						</Link>
						<button
							className={`btn btn-primary ${styles.button}`}
							onClick={handleShow}
						>
							View Details
						</button>
					</div>
				</div>
				<Modal
					size="lg"
					show={show}
					onHide={handleClose}
					backdrop="static"
					keyboard={false}
				>
					<Modal.Header closeButton>
						<Modal.Title>{room.name}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Carousel fade>
							{room.imageurls.map((url, index) => (
								<Carousel.Item key={index}>
									<img
										className={`d-block w-100 ${styles.bigimage}`}
										src={url}
										alt="First slide"
									/>
								</Carousel.Item>
							))}
						</Carousel>
						<p className={styles.p}>{room.description}</p>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</div>
	);
};

export default Room;
