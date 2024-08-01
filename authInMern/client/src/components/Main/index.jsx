import styles from "./styles.module.css";
import { useEffect, useState } from "react";

const Main = () => {
	const [username, setUsername] = useState("");

	useEffect(() => {
		// Retrieve username from localStorage
		const storedUsername = localStorage.getItem("username");
		console.log("Retrieved Username:", storedUsername);  // Log the retrieved username
		if (storedUsername) {
			setUsername(storedUsername);
		}
	}, []);

	const handleLogout = () => {
		// Remove token and username from localStorage
		localStorage.removeItem("token");
		localStorage.removeItem("username");
		// Redirect to login page or home page after logout
		window.location.href = "/login"; // Adjust if needed
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Dashboard</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<div className={styles.welcome_message}>
				Welcome, {username || "User"}!
			</div>
		</div>
	);
};

export default Main;
