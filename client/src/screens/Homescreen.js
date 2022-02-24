import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRooms } from "../store/slices/room";
import Room from "../components/Room/Room";
import Loader from "../components/Loader";
import Error from "../components/Error";

const HomeScreen = () => {
	const dispatch = useDispatch();
	const { rooms, isLoading } = useSelector((state) => state.rooms);
	useEffect(() => {
		dispatch(getAllRooms());
	}, [dispatch]);

	const roomList =
		rooms.length > 0
			? rooms.map((room, index) => (
					<li className="col-md-9 mt-2 ml-7" key={room._id}>
						<Room room={room} />
					</li>
			  ))
			: "There is no rooms available";
	return (
		<div className="row">
			{isLoading ? (
				<Loader />
			) : rooms.length > 0 ? (
				<ul>{roomList}</ul>
			) : (
				<Error />
			)}
		</div>
	);
};

export default HomeScreen;
