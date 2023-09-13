import {
	About,
	Clients,
	Contact,
	Footer,
	Hero,
	Portfolio,
	Services,
} from "@components";

const App = () => {
	return (
		<>
			<div className="w-[90%] mx-auto overflow-hidden">
				<Hero />
				<Services />
				<About />
				<Clients />
				<Portfolio />
				<Contact />
				<Footer />
			</div>
		</>
	);
};

export default App;
