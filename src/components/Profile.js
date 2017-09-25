import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import About from './About';
import Tracks from './Tracks';

class Profile extends Component {

	constructor(props) {
		super(props);

		this.state = {image: 'http://lorempixel.com/1920/1080/abstract'};

		this._changeImage = this._changeImage.bind(this);

	}

	_changeImage(inputImage) {
		this.setState({ image: inputImage });
	}

	render () {
		const imageURL = this.state.image;
		return (
			<Box>
				<Hero background={<Image src={this.state.image}
					fit='cover'
					full={true} />}
					size='small' />
				<Tabs justify='start'>
					<Tab title='Tracks'>
						<Tracks />
					</Tab>
					<Tab title='About'>
						<About changeImage={this._changeImage} imageURL={imageURL}/>
					</Tab>
				</Tabs>
			</Box>
		);
	}
}

export default Profile;