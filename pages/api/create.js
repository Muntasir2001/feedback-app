import prisma from '../../lib/prisma';

export default async function handler(req, res) {
	const { fullName, email, feedbackType, message } = req.body;

	console.log(req.body);

	try {
		const feedback = await prisma.feedback.create({
			data: {
				email: email,
				fullName: fullName,
				feedbackType: feedbackType,
				message: message,
			},
		});

		res.status(200).json({ feedback });
	} catch (error) {
		res.status(400).json({ error });
		console.log(error);
	}
}
