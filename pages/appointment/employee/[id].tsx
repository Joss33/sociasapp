import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import useTourStep from '../../../hooks/useTourStep';
import useDarkMode from '../../../hooks/useDarkMode';
import { useRouter } from 'next/router';
import { getUserDataWithId } from '../../../common/data/userDummyData';
import { useState, FC } from 'react';
import Chart, { IChartOptions } from '../../../components/extras/Chart';
import COLORS from '../../../common/data/enumColors';
import dummyEventsData from '../../../common/data/dummyEventsData';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Head from 'next/head';
import { getFirstLetter } from '../../../helpers/helpers';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../../layout/SubHeader/SubHeader';
import Button from '../../../components/bootstrap/Button';
import { demoPagesMenu } from '../../../menu';
import CommonAvatarTeam from '../../../common/partial/other/CommonAvatarTeam';
import Page from '../../../layout/Page/Page';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Avatar from '../../../components/Avatar';
import Icon from '../../../components/icon/Icon';
import Badge from '../../../components/bootstrap/Badge';
import Alert from '../../../components/bootstrap/Alert';
import moment from 'moment';
import classNames from 'classnames';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import EVENT_STATUS from '../../../common/data/enumEventStatus';
import { priceFormat } from '../../../helpers/helpers';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Progress from '../../../components/bootstrap/Progress';

import topSalesData from '../../../common/data/dummySalesData';

const Id: NextPage = () => {
	useTourStep(19);
	const { darkModeStatus } = useDarkMode();

	const router = useRouter();
	const { id } = router.query;

	const data = getUserDataWithId(String(id));

	const [dayHours] = useState<IChartOptions>({
		series: [
			{
				data: [8, 12, 15, 20, 15, 22, 9],
			},
		],
		options: {
			colors: [String(process.env.NEXT_PUBLIC_SUCCESS_COLOR)],
			chart: {
				type: 'radar',
				width: 200,
				height: 200,
				sparkline: {
					enabled: true,
				},
			},
			xaxis: {
				categories: [
					'Monday',
					'Tuesday',
					'Wednesday',
					'Thursday',
					'Friday',
					'Saturday',
					'Sunday',
				],
				// convertedCatToNumeric: false,
			},
			tooltip: {
				theme: 'dark',
				fixed: {
					enabled: false,
				},
				x: {
					show: true,
				},
				y: {
					title: {
						formatter(seriesName) {
							return 'Hours';
						},
					},
				},
			},
			stroke: {
				curve: 'smooth',
				width: 2,
			},
			plotOptions: {
				radar: {
					polygons: {
						strokeColors: `${COLORS.SUCCESS.code}50`,
						strokeWidth: '1',
						connectorColors: `${COLORS.SUCCESS.code}50`,
					},
				},
			},
		},
	});

	const userTasks = dummyEventsData.filter((f) => f.assigned.username === data?.username);

	return (
		<PageWrapper>
			<Head>
				<title>{`${data?.name} ${data?.surname}`}</title>
			</Head>
			<Page>
				<div className='row'>
					<div className='col-lg-12'>
						<Card className='shadow-3d-info'>
								<img src="https://fabrx.co/preview/muse-dashboard/assets/img/placeholder16.svg" alt="Placeholder" className='rounded-top'></img>
							<CardBody className='position-relative'>
								<div className='row'>
									
									<div className="col-12">
										<div className=' d-flex align-items-center'>
											<span className="avatar avatar-xxl border border-5 border-white rounded-circle position-absolute top-0 translate-middle-y">
												<Avatar
													src={data?.src}
													color={data?.color}
													isOnline={data?.isOnline}
													size={100}
												/>
											</span>
											<div className="d-flex align-items-center mt-5 mb-3">
												<span className='display-6 fw-bold mb-0 me-3'>{`${data?.name} ${data?.surname}`}</span>
												<span className='border border-secondary border-2 text-secondary fw-bold px-3 py-2 rounded'>
													{data?.position}
												</span>
											</div>
										</div>
									</div>
									<div className='col'>
										<div className='row g-2'>
											<div className='col-12'>
												<div className='d-flex align-items-center'>
													<div className='flex-shrink-0'>
														<Icon icon='Mail' size='3x' color='primary' />
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-5 mb-0'>
															{`${data?.username}@site.com`}
														</div>
														<div className='text-muted'>
															Correo electrónico
														</div>
													</div>
												</div>
											</div>
											<div className='col-12'>
												<div className='d-flex align-items-center'>
													<div className='flex-shrink-0'>
														<Icon icon='Tag' size='3x' color='primary' />
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-5 mb-0'>
															{`@${data?.username}`}
														</div>
														<div className='text-muted'>
															Nombre social
														</div>
													</div>
												</div>
											</div>
											<div className='col-12'>
												<div className='d-flex align-items-center'>
													<div className='flex-shrink-0'>
														<Icon icon='LocationOn' size='3x' color='primary' />
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-5 mb-0'>
															Barranquilla
															{/* {`@${data?.username}`} */}
														</div>
														<div className='text-muted'>
															Ubicación
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col">
										<div className="col-12 col-sm-6 col-lg-4">
											<div className="d-flex align-items-center justify-content-sm-end">
												<a href="#0" className="shadow rounded-circle d-flex align-items-center justify-content-center bg-white ms-3 ms-md-4"><img src="https://fabrx.co/preview/muse-dashboard/assets/svg/icons/facebook3.svg" alt="Facebook"/></a>
												<a href="#0" className="shadow rounded-circle d-flex align-items-center justify-content-center bg-white ms-3 ms-md-4"><img src="https://fabrx.co/preview/muse-dashboard/assets/svg/icons/youtube@18.svg" alt="Youtube"/></a>
												<a href="#0" className="shadow rounded-circle d-flex align-items-center justify-content-center bg-white ms-3 ms-md-4"><img src="https://fabrx.co/preview/muse-dashboard/assets/svg/icons/medium@12.svg" alt="Medium"/></a>
											</div>
                  </div>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className="col-md-12 col-lg-8">
						<div className="row">
							<div className="col-md-12">
								<Card>
									<CardHeader>
										<CardLabel icon='Stream' iconColor='warning'>
											<CardTitle>Sobre mí</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody className='pt-0'>

										<div className="row">
											<div className="col-auto">
													La presidenta de la Fundación Finsocial, María Claudia García, fue escogida como la nueva Mujer Cafam Atlántico, un reconocimiento que destaca su liderazgo, su trabajo por las poblaciones vulnerables del país y su compromiso por mejorar las condiciones de vida de miles de colombianos a través de programas de educación financiera, emprendimiento e impacto social.
											</div>
										</div>

									</CardBody>
								</Card>
							</div>
							<div className="col-md-12">
								<Card>
									<CardHeader>
										<CardLabel icon='Group' iconColor='info'>
											<CardTitle>Actividad</CardTitle>
										</CardLabel>
									</CardHeader>
									<CardBody >
										<div className="row">
											<div className="col-md-12 mb-3">
												<div className="row">
													<div className="col-auto">
														<div className='flex-shrink-0'>
															<div className='ratio ratio-1x1 me-2' style={{ width: 48 }}>
																<div
																	className={classNames(
																		'rounded-2',
																		'd-flex align-items-center justify-content-center',
																		{
																			'bg-l10-dark': !darkModeStatus,
																			'bg-l90-dark': darkModeStatus,
																		},
																	)}>
																	<span className='fw-bold'>{'Ts'}</span>
																</div>
															</div>
														</div>
													</div>
													<div className="col">
														<p className='mb-0'>
															<strong>
																Laquita Elliott upvoted and followed Michael Jackson
															</strong>
														</p>
														<p className='mb-0'>
															1 Jan, 2022
														</p>
													</div>
													<div className="col-auto ms-auto">
														<Dropdown>
															<DropdownToggle hasIcon={false}>
																<Button
																	icon='MoreHoriz'
																	color='dark'
																	isLight
																	shadow='sm'
																/>
															</DropdownToggle>
															<DropdownMenu isAlignmentEnd>
																<DropdownItem>
																	<Button
																		icon='Visibility'
																		tag='a'>
																		View
																	</Button>
																</DropdownItem>
															</DropdownMenu>
														</Dropdown>
													</div>
												</div>
											</div>
											<div className="col-md-12 mb-3">
												<div className="row">
													<div className="col-auto">
														<div className='flex-shrink-0'>
															<div className='ratio ratio-1x1 me-2' style={{ width: 48 }}>
																<div
																	className={classNames(
																		'rounded-2',
																		'd-flex align-items-center justify-content-center',
																		{
																			'bg-l10-dark': !darkModeStatus,
																			'bg-l90-dark': darkModeStatus,
																		},
																	)}>
																	<span className='fw-bold'>{'Ts'}</span>
																</div>
															</div>
														</div>
													</div>
													<div className="col">
														<p className='mb-0'>
															<strong>
																Laquita Elliott upvoted and followed Michael Jackson
															</strong>
														</p>
														<p className='mb-0'>
															1 Jan, 2022
														</p>
													</div>
													<div className="col-auto ms-auto">
														<Dropdown>
															<DropdownToggle hasIcon={false}>
																<Button
																	icon='MoreHoriz'
																	color='dark'
																	isLight
																	shadow='sm'
																/>
															</DropdownToggle>
															<DropdownMenu isAlignmentEnd>
																<DropdownItem>
																	<Button
																		icon='Visibility'
																		tag='a'>
																		View
																	</Button>
																</DropdownItem>
															</DropdownMenu>
														</Dropdown>
													</div>
												</div>
											</div>
											<div className="col-md-12 mb-3">
												<div className="row">
													<div className="col-auto">
														<div className='flex-shrink-0'>
															<div className='ratio ratio-1x1 me-2' style={{ width: 48 }}>
																<div
																	className={classNames(
																		'rounded-2',
																		'd-flex align-items-center justify-content-center',
																		{
																			'bg-l10-dark': !darkModeStatus,
																			'bg-l90-dark': darkModeStatus,
																		},
																	)}>
																	<span className='fw-bold'>{'Ts'}</span>
																</div>
															</div>
														</div>
													</div>
													<div className="col">
														<p className='mb-0'>
															<strong>
																Laquita Elliott upvoted and followed Michael Jackson
															</strong>
														</p>
														<p className='mb-0'>
															1 Jan, 2022
														</p>
													</div>
													<div className="col-auto ms-auto">
														<Dropdown>
															<DropdownToggle hasIcon={false}>
																<Button
																	icon='MoreHoriz'
																	color='dark'
																	isLight
																	shadow='sm'
																/>
															</DropdownToggle>
															<DropdownMenu isAlignmentEnd>
																<DropdownItem>
																	<Button
																		icon='Visibility'
																		tag='a'>
																		View
																	</Button>
																</DropdownItem>
															</DropdownMenu>
														</Dropdown>
													</div>
												</div>
											</div>
											<div className="col-md-12 mb-3">
												<div className="row">
													<div className="col-auto">
														<div className='flex-shrink-0'>
															<div className='ratio ratio-1x1 me-2' style={{ width: 48 }}>
																<div
																	className={classNames(
																		'rounded-2',
																		'd-flex align-items-center justify-content-center',
																		{
																			'bg-l10-dark': !darkModeStatus,
																			'bg-l90-dark': darkModeStatus,
																		},
																	)}>
																	<span className='fw-bold'>{'Ts'}</span>
																</div>
															</div>
														</div>
													</div>
													<div className="col">
														<p className='mb-0'>
															<strong>
																Laquita Elliott upvoted and followed Michael Jackson
															</strong>
														</p>
														<p className='mb-0'>
															1 Jan, 2022
														</p>
													</div>
													<div className="col-auto ms-auto">
														<Dropdown>
															<DropdownToggle hasIcon={false}>
																<Button
																	icon='MoreHoriz'
																	color='dark'
																	isLight
																	shadow='sm'
																/>
															</DropdownToggle>
															<DropdownMenu isAlignmentEnd>
																<DropdownItem>
																	<Button
																		icon='Visibility'
																		tag='a'>
																		View
																	</Button>
																</DropdownItem>
															</DropdownMenu>
														</Dropdown>
													</div>
												</div>
											</div>
										</div>
									</CardBody>
								</Card>
							</div>
						</div>
					</div>
					<div className="col-md-12 col-lg-4">
						<div className="row">
							<div className="col-md-12">
								<Card className='shadow-3d-success'>
									<CardHeader className='pb-0'>
										<CardLabel icon='Summarize' iconColor='success'>
											<CardTitle tag='h4' className='h5'>
												Completa tu perfil
											</CardTitle>
										</CardLabel>
										<CardActions>
											<h5 className='mb-0'><strong>75%</strong></h5>
										</CardActions>
									</CardHeader>
									<CardBody>

										<div className="row">
											<div className="col-md-12 mb-3">
												<Progress isAutoColor value={75} height={10} />
											</div>
										</div>

										<div className="row g-3">
											{topSalesData.map((i) => (
												// eslint-disable-next-line react/jsx-props-no-spreading
												<TopSalesItem key={i.id} {...i} />
											))}
										</div>
									</CardBody>
								</Card>
							</div>
							<div className="col-md-12">
								<Card className='shadow-3d-primary'>
									<CardHeader className='pb-0'>
										<CardLabel icon='Summarize' iconColor='primary'>
											<CardTitle tag='h4' className='h5'>
												Conexiones
											</CardTitle>
										</CardLabel>
										<CardActions>
											<Button
												color={'primary'}
												className='rounded-1 w-100'
												size='sm'>
												Agregar
											</Button>
										</CardActions>
									</CardHeader>
									<CardBody>
										{/* <div className="row g-3">
											<FriendItemProps key={1} name='Ryan' image='' ocupation='' />
										</div> */}
									</CardBody>
								</Card>
							</div>
						</div>
					</div>

					<div className="col-md-12">
						<Card>
							<CardHeader>
								<CardLabel icon='Stream' iconColor='warning'>
									<CardTitle>Fotos</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className="row">
									<div className="col-6 col-md-3 col-xxl-3">
										<img src="https://fabrx.co/preview/muse-dashboard/assets/img/placeholder4.jpg" alt="Placeholder" className="rounded mb-3 mb-md-4"/>
									</div>
									<div className="col-6 col-md-3 col-xxl-3">
										<img src="https://fabrx.co/preview/muse-dashboard/assets/img/placeholder5.jpg" alt="Placeholder" className="rounded mb-3 mb-md-4"/>
									</div>
									<div className="col-6 col-md-3 col-xxl-3">
										<img src="https://fabrx.co/preview/muse-dashboard/assets/img/placeholder6.jpg" alt="Placeholder" className="rounded mb-3 mb-md-4"/>
									</div>
									<div className="col-6 col-md-3 col-xxl-3">
										<img src="https://fabrx.co/preview/muse-dashboard/assets/img/placeholder7.jpg" alt="Placeholder" className="rounded mb-3 mb-md-4"/>
									</div>
									<div className="col-6 col-md-3 col-xxl-3">
										<img src="https://fabrx.co/preview/muse-dashboard/assets/img/placeholder8.jpg" alt="Placeholder" className="rounded mb-3 mb-md-4"/>
									</div>
									<div className="col-6 col-md-3 col-xxl-3">
										<img src="https://fabrx.co/preview/muse-dashboard/assets/img/placeholder9.jpg" alt="Placeholder" className="rounded mb-3 mb-md-4"/>
									</div>
									<div className="col-6 col-md-3 col-xxl-3">
										<img src="https://fabrx.co/preview/muse-dashboard/assets/img/placeholder10.jpg" alt="Placeholder" className="rounded mb-3 mb-md-4"/>
									</div>
									<div className="col-6 col-md-3 col-xxl-3">
										<img src="https://fabrx.co/preview/muse-dashboard/assets/img/placeholder11.jpg" alt="Placeholder" className="rounded mb-3 mb-md-4"/>
									</div>
									<div className="col-6 col-md-3 col-xxl-3">
										<img src="https://fabrx.co/preview/muse-dashboard/assets/img/placeholder12.jpg" alt="Placeholder" className="rounded mb-3 mb-md-4"/>
									</div>
									<div className="col-6 col-md-3 col-xxl-3">
										<img src="https://fabrx.co/preview/muse-dashboard/assets/img/placeholder13.jpg" alt="Placeholder" className="rounded mb-3 mb-md-4"/>
									</div>
									<div className="col-6 col-md-3 col-xxl-3">
										<img src="https://fabrx.co/preview/muse-dashboard/assets/img/placeholder14.jpg" alt="Placeholder" className="rounded mb-3 mb-md-4"/>
									</div>
									<div className="col-6 col-md-3 col-xxl-3">
										<img src="https://fabrx.co/preview/muse-dashboard/assets/img/placeholder15.jpg" alt="Placeholder" className="rounded mb-3 mb-md-4"/>
									</div>
									<div className="col-12">
										<div className="d-flex align-items-center p-2 pt-md-4 mb-md-2 pb-md-0">
											<a href="#" className="my-1 fs-16 font-weight-semibold mx-auto btn btn-link link-dark">See all Photos<svg className="ms-1" data-name="icons/tabler/chevron right" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 16">
												<rect data-name="Icons/Tabler/Chevron Right background" width="16" height="16" fill="none"></rect>
												<path d="M.26.26A.889.889,0,0,1,1.418.174l.1.086L8.629,7.371a.889.889,0,0,1,.086,1.157l-.086.1L1.517,15.74A.889.889,0,0,1,.174,14.582l.086-.1L6.743,8,.26,1.517A.889.889,0,0,1,.174.36Z" transform="translate(4)" fill="#1e1e1e"></path>
											</svg></a>
										</div>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>

					{/* <div className='col-lg-8'>
						<Card>
							<CardHeader>
								<CardLabel icon='Task' iconColor='danger'>
									<CardTitle>
										<CardLabel>Assigned</CardLabel>
									</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='table-responsive'>
									<table className='table table-modern mb-0'>
										<thead>
											<tr>
												<th>Date / Time</th>
												<th>Customer</th>
												<th>Service</th>
												<th>Duration</th>
												<th>Payment</th>
												<th>Status</th>
											</tr>
										</thead>
										<tbody>
											{userTasks.map((item) => (
												<tr key={item.id}>
													<td>
														<div className='d-flex align-items-center'>
															<span
																className={classNames(
																	'badge',
																	'border border-2 border-light',
																	'rounded-circle',
																	'bg-success',
																	'p-2 me-2',
																	`bg-${item.status.color}`,
																)}>
																<span className='visually-hidden'>
																	{item.status.name}
																</span>
															</span>
															<span className='text-nowrap'>
																{moment(
																	`${item.date} ${item.time}`,
																).format('MMM Do YYYY, h:mm a')}
															</span>
														</div>
													</td>
													<td>
														<div>
															<div>{item.customer.name}</div>
															<div className='small text-muted'>
																{item.customer.email}
															</div>
														</div>
													</td>
													<td>{item.service.name}</td>
													<td>{item.duration}</td>
													<td>
														{item.payment && priceFormat(item.payment)}
													</td>
													<td>
														<Dropdown>
															<DropdownToggle hasIcon={false}>
																<Button
																	isLink
																	color={item.status.color}
																	icon='Circle'
																	className='text-nowrap'>
																	{item.status.name}
																</Button>
															</DropdownToggle>
															<DropdownMenu>
																{Object.keys(EVENT_STATUS).map(
																	(key) => (
																		<DropdownItem key={key}>
																			<div>
																				<Icon
																					icon='Circle'
																					color={
																						EVENT_STATUS[
																							key
																						].color
																					}
																				/>
																				{
																					EVENT_STATUS[
																						key
																					].name
																				}
																			</div>
																		</DropdownItem>
																	),
																)}
															</DropdownMenu>
														</Dropdown>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
								{!userTasks.length && (
									<Alert color='warning' isLight icon='Report' className='mt-3'>
										There is no scheduled and assigned task.
									</Alert>
								)}
							</CardBody>
						</Card>
					</div> */}
				</div>
			</Page>
		</PageWrapper>
	);
};

interface ITopSalesItemProps {
	name: string;
	type: string;
	price: number;
	count: number;
	state: boolean;
}

const TopSalesItem: FC<ITopSalesItemProps> = ({ name, state }) => {
	const { darkModeStatus } = useDarkMode();

	return (
		<div className='col-12'>
			<div className='row'>
				<div className='col d-flex align-items-center'>
					<div className='flex-shrink-0'>
						<div className='ratio ratio-1x1 me-3' style={{ width: 48 }}>
							<div
								className={classNames(
									'rounded-2',
									'd-flex align-items-center justify-content-center',
									{
										'bg-l10-dark': !darkModeStatus,
										'bg-l90-dark': darkModeStatus,
									},
								)}>
								<span className='fw-bold'>{getFirstLetter(name)}</span>
							</div>
						</div>
					</div>
					<div className='flex-grow-1'>
						<div className={classNames('fs-6',{'text-decoration-line-through': state})}  >{name}</div>
						<div className='text-muted'>
						</div>
					</div>
				</div>
				<div className='col-auto text-end'>
					{
						!state?
						<Button
							color={'success'}
							className='rounded-1 w-100'
							size='sm'>
							Agregar
						</Button>
						: ''
					}
					
				</div>
			</div>
		</div>
	);
};

interface IFriendItemProps {
	name: string;
	image: string;
	ocupation: string;
}

const FriendItemProps: FC<IFriendItemProps> = ({ name, image, ocupation }) => {
	const { darkModeStatus } = useDarkMode();

	return (
		<div className='col-12'>
			<div className='row'>
				<div className='col d-flex align-items-center'>
					<div className='flex-shrink-0'>
						<div className='ratio ratio-1x1 me-3' style={{ width: 48 }}>
							<div
								className={classNames(
									'rounded-2',
									'd-flex align-items-center justify-content-center',
									{
										'bg-l10-dark': !darkModeStatus,
										'bg-l90-dark': darkModeStatus,
									},
								)}>
								<span className='fw-bold'>{getFirstLetter(name)}</span>
							</div>
						</div>
					</div>
					<div className='flex-grow-1'>
						<div className='fs-6' >{ocupation}</div>
					</div>
				</div>
			</div>
		</div>
	);
};



export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		// @ts-ignore
		...(await serverSideTranslations(locale, ['common', 'menu'])),
	},
});

export async function getStaticPaths() {
	return {
		paths: [
			// String variant:
			'/appointment/employee/1',
			// Object variant:
			{ params: { id: '2' } },
		],
		fallback: true,
	};
}

export default Id;
