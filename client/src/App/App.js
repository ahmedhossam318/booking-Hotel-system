import React from "react";
import NavbarBootstrap from "../components/NavbarBootstrap";
import BookingScreen from "../screens/Bookingscreen/Bookingscreen";
import HomeScreen from "../screens/Homescreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterScreen from "../screens/registerscreen/RegisterScreen";
import LoginScreen from "../screens/loginScreen/LoginScreen";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<NavbarBootstrap />
				<Routes>
					<Route index path="/home" element={<HomeScreen />} />
					<Route path="/room/:roomid" element={<BookingScreen />} />
					<Route path="/register" element={<RegisterScreen />} />
					<Route path="/login" element={<LoginScreen />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
