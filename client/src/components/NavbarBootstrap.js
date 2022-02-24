import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const NavbarBootstrap = () => {
	const { user } = useSelector((state) => state.users);
	const user_object = JSON.parse(localStorage.getItem("currentUser"));
	console.log(user_object);
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Link to="/home">
					<Navbar.Brand>SheryRooms</Navbar.Brand>
				</Link>
				<Nav className="me-auto">
					{user_object ? (
						<>
							<h1 style={{ color: "white" }}>{user_object?.name}</h1>
						</>
					) : (
						<>
							<Link className="nav-link" to="/register">
								register
							</Link>
							<Link className="nav-link" to="/login">
								login
							</Link>
						</>
					)}
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavbarBootstrap;
