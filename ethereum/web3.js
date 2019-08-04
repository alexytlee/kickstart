import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	const getProvider = async () => {
		await window.web3.currentProvider.enable(); // request authentication
	};
	getProvider();
	// We are in the browser and metamask is running
	web3 = new Web3(window.web3.currentProvider);
} else {
	// We are on the server *OR* the user is not running metamask
	const provider = new Web3.providers.HttpProvider(
		'https://rinkeby.infura.io/v3/19751c60ed4e4558884f97962fbe67eb'
	);
	web3 = new Web3(provider);
}

export default web3;
