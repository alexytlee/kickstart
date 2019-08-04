import web3 from './web3';
import CampaignFactory from '../ethereum/build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x1CBc5a953ec8eB736329a5df0Fd4B6deEc782e5d'
);

export default instance;
