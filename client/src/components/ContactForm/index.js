/*
*
*   Contact Form
*
*/

import React, { useState } from 'react';

import UI from '../UI';

const ContactForm = () => {

	const [ submitted, setSubmitted ] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
	};

	return (
		<UI.Box my={4} width={[0.8,0.6]} mx={['auto',0]}>
			{submitted ? 
				(
					<UI.Text py={4} fontSize={3}>Thank you for your message.</UI.Text>
				)
				:
				(
					<form onSubmit={handleSubmit}>
						<UI.Box my={6}>
							<UI.Label for='input_name' mb={2}>Your Name</UI.Label>
							<UI.TextInput name='input_name' />
						</UI.Box>
						<UI.Box my={6}>
							<UI.Label for='input_email' mb={2}>Your Email</UI.Label>
							<UI.EmailInput name='input_email' />
						</UI.Box>
						<UI.Box my={6}>
							<UI.Label for='input_message' mb={2}>Your Message</UI.Label>
							<UI.TextArea name='input_message' />
						</UI.Box>
						<UI.Box my={6}>
							<UI.PrimaryButton submit value='Submit' />
						</UI.Box>
					</form>
				)
			}
		</UI.Box>
	);
}

export default ContactForm;
