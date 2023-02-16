import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { FC, HTMLAttributes, useCallback, useState } from 'react';
import useDarkMode from '../../../hooks/useDarkMode';
import { demoPagesMenu } from '../../../menu';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Badge from '../../../components/bootstrap/Badge';
import Icon from '../../../components/icon/Icon';
import Progress from '../../../components/bootstrap/Progress';
import Avatar, { AvatarGroup } from '../../../components/Avatar';
import USERS from '../../../common/data/userDummyData';
import useTourStep from '../../../hooks/useTourStep';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Button from '../../../components/bootstrap/Button';
import { pathRetouch } from '../../../helpers/helpers';
import classNames from 'classnames';
interface IItemProps extends HTMLAttributes<HTMLDivElement> {
	name: string;
	partner: string;
	teamName: string;
	city: string;
	fundraisingGoal: string;
	attachCount: number;
	taskCount: number;
	percent: number;
	dueDate: string;
}
const Item: FC<IItemProps> = ({
	name,
	partner,
	teamName,
	city,
	fundraisingGoal,
	attachCount,
	taskCount,
	percent,
	dueDate,
	...props
}) => {
	const { darkModeStatus } = useDarkMode();
	const router = useRouter();
	const handleOnClickToProjectPage = useCallback(
		() => router.push(`${pathRetouch(demoPagesMenu.projectManagement.subMenu.itemID.path)}/1`),
		[router],
	);
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<div className='col-md-6 col-lg-4' {...props}>
			<Card stretch onClick={handleOnClickToProjectPage} className='cursor-pointer'>
				<img src="https://fabrx.co/preview/muse-dashboard/assets/img/placeholder16.svg" alt="Placeholder" className='rounded-top'></img>
				<CardBody className='position-relative'>
					
					<div className="row">
						<div className="col-md-12 ">
							<div className="d-flex align-items-center">
								<span className=" border border-5 border-white rounded-circle position-absolute top-0 translate-middle-y">
									<Avatar
										src={'https://fabrx.co/preview/muse-dashboard/assets/img/placeholder8.jpg'}
										color={'primary'}
										size={80}
									/>
								</span>
							</div>
						</div>
					</div>
					<div className="row mb-3">
						<div className="col">
							<CardLabel className='pt-4'>
								<CardTitle className='mb-2 pt-3'>{name}</CardTitle>
								<CardSubTitle className='mb-2'>{teamName} - {partner}</CardSubTitle>
							</CardLabel>
						</div>
						<div className="col-auto mb-2">
							<span className='border border-secondary border-2 text-secondary fw-bold px-2 py-1 rounded-1 '>
								{dueDate}
							</span>
						</div>
					</div>

					<div className="row">
						<div className="col-md-12 d-flex align-items-center mb-2">
							<Badge color={darkModeStatus ? 'light' : 'dark'} isLight className='me-2'>
								<Icon icon='LocationOn' />
							</Badge>
							<span className='text-primary'>
								<strong>
									{city}
								</strong>
							</span>
						</div>
					</div>
					<div className='row'>
						<div className="col-md-12 d-flex align-items-center mb-2">
							<Badge color={darkModeStatus ? 'light' : 'dark'} isLight className='me-2'>
								<Icon icon='Paid' />
							</Badge>
							<span className='me-2'>Meta de recaudacion:</span> {' '} <strong>{fundraisingGoal}</strong>
						</div>
						<div className='col-md-12 mb-3'>
							<p className='mb-2'>
								{percent}% Completado
							</p>
							<Progress color='secondary' value={percent} height={10} />
						</div>
						<div className="col-md-12">
							<div className=' d-flex justify-content-end'>
								<AvatarGroup>
									<Avatar
										src={USERS.GRACE.src}
										userName={`${USERS.GRACE.name} ${USERS.GRACE.surname}`}
										color={USERS.GRACE.color}
									/>
									<Avatar
										src={USERS.SAM.src}
										userName={`${USERS.SAM.name} ${USERS.SAM.surname}`}
										color={USERS.SAM.color}
									/>
									<Avatar
										src={USERS.CHLOE.src}
										userName={`${USERS.CHLOE.name} ${USERS.CHLOE.surname}`}
										color={USERS.CHLOE.color}
									/>

									<Avatar
										src={USERS.JANE.src}
										userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
										color={USERS.JANE.color}
									/>
									<Avatar
										src={USERS.JOHN.src}
										userName={`${USERS.JOHN.name} ${USERS.JOHN.surname}`}
										color={USERS.JOHN.color}
									/>
									<Avatar
										src={USERS.RYAN.src}
										userName={`${USERS.RYAN.name} ${USERS.RYAN.surname}`}
										color={USERS.RYAN.color}
									/>
								</AvatarGroup>
							</div>
						</div>
					</div>
				</CardBody>
			</Card>
		</div>
	);
};

interface ILoginProps {
	isSignUp?: boolean;
}

const Index: NextPage = () => {
	useTourStep(12);

	const { darkModeStatus } = useDarkMode();
	const router = useRouter();
	const handleOnClickToEmployeeListPage = useCallback(
		() => router.push(`../${demoPagesMenu.appointment.subMenu.employeeList.path}`),
		[router],
	);

	// const [singUpStatus, setSingUpStatus] = useState<boolean>(!!isSignUp);

	return (
		<PageWrapper>
			<Head>
				<title>{demoPagesMenu.projectManagement.subMenu.list.text}</title>
			</Head>
			<Page>
				<div className='row mt-3'>
					<div className='col-12'>
						<div className='display-4 fw-bold py-3'>Proyectos</div>
					</div>

					<Item
						name='Una boutique libre de empaques'
						teamName='Package Free'
						partner='Maria Claudia'
						city='Barranquilla - Colombia'
						fundraisingGoal='COP 1.000.000'
						dueDate='3 Días restantes'
						attachCount={6}
						taskCount={24}
						percent={65}
						data-tour='project-item'
					/>
					<Item
						name='Kits para hornear en casa'
						teamName='Dough Dealer'
						partner='Maria Claudia'
						city='Barranquilla - Colombia'
						fundraisingGoal='COP 1.000.000'
						dueDate='14 Días restantes'
						attachCount={1}
						taskCount={4}
						percent={70}
					/>
					<Item
						name='Una tintorería para zapatillas deportivas'
						teamName='The Sneaker Shack'
						partner='Maria Claudia'
						city='Barranquilla - Colombia'
						fundraisingGoal='COP 1.000.000'
						dueDate='14 Días restantes'
						attachCount={12}
						taskCount={34}
						percent={78}
					/>
					<Item
						name='Una barbería con carácter vikingo'
						teamName='Viking Barbershop'
						partner='Maria Claudia'
						city='Barranquilla - Colombia'
						fundraisingGoal='COP 1.000.000'
						dueDate='21 Días restantes'
						attachCount={4}
						taskCount={18}
						percent={43}
					/>
					<Item
						name='Un bar pop-up para eventos sociales'
						teamName='Hub Tap'
						partner='Maria Claudia'
						city='Barranquilla - Colombia'
						fundraisingGoal='COP 1.000.000'
						dueDate='21 Días restantes'
						attachCount={2}
						taskCount={12}
						percent={30}
					/>
					<div className='col-md-4'>
						<Card stretch>
							<CardBody className='d-flex align-items-center justify-content-center'>
								<Button
									color='primary'
									size='lg'
									isLight
									className='w-100 h-100'
									icon='AddCircle'>
									Add New
								</Button>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		// @ts-ignore
		...(await serverSideTranslations(locale, ['common', 'menu'])),
	},
});

export default Index;
