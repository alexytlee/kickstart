import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component {
	state = {
		minimumContribution: '',
		errorMesssage: '',
		loading: false
	};

	onSubmit = async event => {
		event.preventDefault();

		this.setState({ loading: true, errorMesssage: '' });

		try {
			const accounts = await web3.eth.getAccounts();
			await factory.methods
				.createCampaign(this.state.minimumContribution)
				.send({ from: accounts[0] });

			Router.pushRoute('/');
		} catch (err) {
			this.setState({ errorMesssage: err.message });
		}

		this.setState({ loading: false });
	};

	render() {
		return (
			<Layout>
				<h3>Create a Campaign</h3>
				<Form
					onSubmit={this.onSubmit}
					error={!!this.state.errorMesssage}
				>
					<Form.Field>
						<label>Minimum Contribution</label>
						<Input
							label="wei"
							labelPosition="right"
							value={this.state.minimumContribution}
							onChange={event =>
								this.setState({
									minimumContribution: event.target.value
								})
							}
						/>
					</Form.Field>
					<Message
						error
						header="Oops!"
						content={this.state.errorMesssage}
					/>
					<Button primary loading={this.state.loading}>
						Create!
					</Button>
				</Form>
			</Layout>
		);
	}
}

export default CampaignNew;
