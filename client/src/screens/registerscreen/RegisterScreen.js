import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/slices/user";
import styles from "./Style.module.css";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import Success from "../../components/Success";
const RegisterScreen = () => {
	const dispatch = useDispatch();
	const { user, isLoading, error } = useSelector((state) => state.users);
	const [registerUser, setRegisterUser] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const userHandler = (e) => {
		const key = e.target.id;
		const value = e.target.value;
		setRegisterUser((prevstate) => {
			return { ...prevstate, [key]: value };
		});
	};
	const registerHandler = (e) => {
		e.preventDefault();
		if (registerUser.confirmPassword === registerUser.password) {
			dispatch(register(registerUser));
			console.log(registerUser);
		} else {
			alert("password is not identical");
		}
		setRegisterUser({ name: "", email: "", password: "", confirmPassword: "" });
	};
	return (
		<div className={styles.cont}>
			{error ? (
				<Error message="Connection error" />
			) : (
				<>
					{isLoading && <Loader />}
					<div className="row justify-content-center mt-5">
						<div className=" col-sm-5">
							<div className={`${styles.logo} ${styles.logoActive}`}>
								<h1 className={`text-center ${styles.head}`}>Register</h1>
							</div>
							{user?.created && <Success message="Registration Success" />}
							{user?.created === false ? (
								<Error message={user?.message} />
							) : null}
							<div className={styles.formItem}>
								<input
									type="text"
									name="name"
									id="name"
									placeholder="name"
									value={registerUser.name}
									onChange={userHandler}
									className={styles.formStyle}
									autoComplete="off"
								/>
							</div>
							<div className={styles.formItem}>
								<input
									type="email"
									name="email"
									id="email"
									placeholder="email"
									value={registerUser.email}
									onChange={userHandler}
									className={styles.formStyle}
									autoComplete="off"
								/>
							</div>
							<div className={styles.formItem}>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="Password"
									value={registerUser.password}
									onChange={userHandler}
									className={styles.formStyle}
								/>
							</div>
							<div className={styles.formItem}>
								<input
									type="password"
									name="password"
									id="confirmPassword"
									placeholder="Confirm Password"
									value={registerUser.confirmPassword}
									onChange={userHandler}
									className={styles.formStyle}
									autoComplete="off"
								/>
							</div>
							<div
								className={`${styles.formItem} d-flex justify-content-center`}
							>
								<input
									type="submit"
									onClick={registerHandler}
									className={`${styles.login} col-md-5`}
									value="Register"
								/>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default RegisterScreen;
