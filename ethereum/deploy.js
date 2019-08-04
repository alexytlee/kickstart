const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
	'bird museum swing hungry lyrics remember surge great dune spot sorry donkey',
	'https://rinkeby.infura.io/v3/19751c60ed4e4558884f97962fbe67eb'
);

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log('Attempting to deploy from account', accounts[0]);

	const result = await new web3.eth.Contract(
		JSON.parse(compiledFactory.interface)
	)
		.deploy({ data: compiledFactory.bytecode })
		.send({ gas: '1000000', from: accounts[0] });

	console.log('Contract deployed to', result.options.address);
};

deploy();
