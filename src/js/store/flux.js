const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			vehicles: [],
			planets: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			loadPeople: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(data => setStore({ people: data["results"] }))
					.catch(err => console.error(err))
			},
			loadVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles")
					.then(res => res.json())
					.then(data => setStore({ vehicles: data["results"] }))
					.catch(err => console.error(err))
			}
		}
	};
};

export default getState;
