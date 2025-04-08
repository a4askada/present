import "./App.css";
import styled from "styled-components";
import {Icon} from "./components/icon/Icon";
import {Logo} from "./components/logo/Logo";
import {Header} from "./layout/header/Header";
import {Footer} from "./layout/footer/Footer";
import {Main} from "./layout/main/Main";
import {Gift} from "./layout/sections/find-gift/Gift";

function App() {
	return (
		<>
			<Header />
			<Gift />
			<Main />
			<Footer />
		</>
	);
}

export default App;
