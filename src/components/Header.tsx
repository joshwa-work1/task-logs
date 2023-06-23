'use client';

import { Box, Button, Container, Flex, Spacer, Text } from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/react';
import NextLink from 'next/link';

const Header = () => {
	const { data: session } = useSession();

	return (
		<Box boxShadow='xs' py='4' rounded='md' bg='white'>
			<Container maxW='container.md'>
				<Box>
					<Flex minWidth='max-content' alignItems='center' gap='2'>
						<Box>
							<Text as={NextLink} href='/'>
								{process.env.NEXT_PUBLIC_SITE_TITLE}
							</Text>
						</Box>
						<Spacer />
						<Box>
							{session?.user ? (
								<Flex minWidth='max-content' alignItems='center' gap='2'>
									<Box>
										<Button as={NextLink} href='/dashboard' variant='link'>
											Dashboard
										</Button>
									</Box>
									<Spacer />
									<Box>
										<Button
											onClick={() =>
												signOut({ redirect: true, callbackUrl: '/' })
											}
											variant='link'
										>
											Sign Out
										</Button>
									</Box>
								</Flex>
							) : (
								<Button as={NextLink} href='/login' variant='link'>
									Sign In
								</Button>
							)}
						</Box>
					</Flex>
				</Box>
			</Container>
		</Box>
	);
};

export default Header;
