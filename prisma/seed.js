// import pkg from '@prisma/client';

// const { PrismaClient } = pkg;

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const main = async () => {
	await prisma.feedback.create({
		data: {
			fullName: 'an example fullname',
			email: 'test@test.com',
			message: 'Hello from seeding script',
		},
	});
};

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => await prisma.$disconnect);
