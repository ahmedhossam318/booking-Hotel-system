import React, { useState } from "react";
import styles from "./Style.module.css";
import { login } from "../../store/slices/user";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import Success from "../../components/Success";
const LoginScreen = () => {
	const dispatch = useDispatch();
	const { user, isLoading, error } = useSelector((state) => state.users);

	const [userLogged, setUserLogged] = useState({
		email: "",
		password: "",
	});
	const userHandler = (e) => {
		const key = e.target.id;
		const value = e.target.value;
		setUserLogged((prevstate) => {
			return { ...prevstate, [key]: value };
		});
		console.log(value);
	};
	const loginHandler = (e) => {
		e.preventDefault();
		dispatch(login(userLogged));
		console.log(userLogged);
	};
	return (
		<div className={styles.cont}>
			{error ? (
				<Error message="Connection error" />
			) : (
				<>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<div className="row justify-content-center mt-5">
								<div className="col-sm-5">
									<div className={`${styles.logo} ${styles.logoActive}`}>
										<h1 className={`text-center ${styles.head}`}>Login</h1>
									</div>
									{user?.status === false ? (
										<Error message={user?.message} />
									) : null}
									{user?.status && isLoading === false && (
										<Success message="Login Success" />
									)}
									<div className={styles.formItem}>
										<input
											type="email"
											name="email"
											id="email"
											placeholder="email"
											value={userLogged.email}
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
											value={userLogged.password}
											onChange={userHandler}
											className={styles.formStyle}
										/>
										<p>
											<a href="/forgetpassword">
												<small>Forgot Password ?</small>
											</a>
										</p>
									</div>
									<div className={styles.formItem}>
										<input
											type="submit"
											onClick={loginHandler}
											className={`${styles.login} col-md-5`}
											value="Log In"
										/>
									</div>
								</div>
							</div>
						</>
					)}
				</>
			)}
		</div>
	);
};

export default LoginScreen;
