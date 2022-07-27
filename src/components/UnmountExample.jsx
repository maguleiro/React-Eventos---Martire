import react from "react";

const UnmountExample = () => {
	const triggerAlert = (msg) => {
		alert(msg);
	};

	return(
		<h1 onClick={triggerAlert("This is triggered by a click")} id="title">
			Test
		</h1>
		);
};

export default UnmountExample;