import "./App.css";
import styled from "styled-components";
import {Icon} from "./components/icon/Icon";
import {Logo} from "./components/logo/Logo";
import {Header} from "./layout/header/Header";
import {Footer} from "./layout/footer/Footer";
import {Gift} from "./layout/sections/find-gift/Gift";
import {WeWork} from "./layout/sections/how-we-work/WeWork";
import {GiftAll} from "./layout/sections/gift-for-all/GiftAll";
import {ContactUs} from "./layout/sections/contact-us/ContactUs";
import {BestBlog} from "./layout/sections/best-blog/BestBlog";

function App() {
	return (
		<>
			<Header />
			<Gift />
			<WeWork />
			<GiftAll />
			<ContactUs />
			<BestBlog />

			<Footer />
		</>
	);
}

export default App;
