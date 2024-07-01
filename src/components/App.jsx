import WebSocket from "./WebSocket";

const App = () => {

	const userId = Date.now();

    return (
		<div>
			<WebSocket id={userId} />
		</div>
    );
};

export default App;
