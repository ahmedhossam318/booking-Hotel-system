import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoomById } from "../../store/slices/room";
import { useParams } from "react-router-dom";
import styles from "./Bookingscreen.module.css";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
const BookingScreen = () => {
	const param = useParams();
	const dispatch = useDispatch();
	const { rooms, isLoading, error } = useSelector((state) => state.rooms);
	useEffect(() => {
		dispatch(getRoomById(param.roomid));
	}, [dispatch, param.roomid]);
	return (
		<div className="m-5">
			{isLoading ? (
				<Loader />
			) : error ? (
				<Error message="connection Error , try again later" />
			) : (
				<div className={`row justify-content-center mt-5 ${styles.bs}`}>
					<div className="col-md-6">
						<h1>{rooms.name}</h1>
						{rooms.imageurls ? (
							<img
								src={rooms.imageurls[0]}
								className={styles.bigimage}
								alt=""
							/>
						) : (
							"Image not available"
						)}
					</div>
					<div className="col-md-6">
						<div style={{ textAlign: "right" }}>
							<h1>Booking Details</h1>
							<hr />
							<b>
								<p className={styles.p}>Name : </p>
								<p className={styles.p}>From Date :</p>
								<p className={styles.p}>To Date : </p>
								<p className={styles.p}>Max Count : {rooms.maxcount}</p>
							</b>
						</div>

						<div style={{ textAlign: "right" }}>
							<b>
								<h1>Amount</h1>
								<hr />
								<p className={styles.p}>Total days : </p>
								<p className={styles.p}>Rent per day : {rooms.rentperday} </p>
								<p className={styles.p}>Total Amount : </p>
							</b>
						</div>
						<div style={{ textAlign: "right" }}>
							<button
								style={{ float: "right" }}
								className={`btn btn-primary ${styles.button}`}
							>
								Pay Now
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default BookingScreen;
