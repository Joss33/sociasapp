import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import useDarkMode from '../../../../hooks/useDarkMode';
import { useState } from 'react';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import { demoPagesMenu } from '../../../../menu';
import Button from '../../../../components/bootstrap/Button';
import Badge from '../../../../components/bootstrap/Badge';
import CommonAvatarTeam from '../../../../common/partial/other/CommonAvatarTeam';
import Page from '../../../../layout/Page/Page';
import Board from '../../../../components/Board/Board';
import { getUserDataWithId } from '../../../../common/data/userDummyData';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Avatar from '../../../../components/Avatar';
import Icon from '../../../../components/icon/Icon';
import classNames from 'classnames';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../../components/bootstrap/Dropdown';
import Progress from '../../../../components/bootstrap/Progress';

import MariaClaudia from '../../../../assets/img/socias/mariaClaudia.jpg';

const Index: NextPage = () => {
	const router = useRouter();
	const { id } = router.query;
	const { darkModeStatus } = useDarkMode();
	const data = getUserDataWithId(String(id));

	return (
		<PageWrapper>
			<Head>
				<title>{demoPagesMenu.projectManagement.subMenu.item.text}</title>
			</Head>
			<Page container='fluid'>
				<div className='row'>
					<div className='col-lg-12'>
						<Card className='shadow-3d-secondary'>
								<img src="https://fabrx.co/preview/muse-dashboard/assets/img/placeholder16.svg" alt="Placeholder" className='rounded-top'></img>
							<CardBody className='position-relative'>
								<div className='row'>
									<div className="col-12">
										<div className=' d-flex align-items-center'>
											<span className="avatar avatar-xxl border border-5 border-white rounded-circle position-absolute top-0 translate-middle-y">
												<Avatar
													src={MariaClaudia}
													color={'primary'}
													size={100}
												/>
											</span>
											<div className="d-flex align-items-center mt-5 mb-3">
												<span className='display-6 fw-bold mb-0 me-3'>Una boutique libre de empaques</span>
												<span className='border border-secondary border-2 text-secondary fw-bold px-3 py-2 rounded'>
													Socia
												</span>
											</div>
										</div>
									</div>
									<div className='col'>
										<div className='row'> 
											<div className='col-12'>
												<div className='d-flex align-items-center'>
													<div className='flex-shrink-0'>
														<Icon icon='Face' size='3x' color='secondary' />
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-5 mb-0'>
															Maria Claudia
														</div>
														<div className='text-muted'>
															Emprendedora
														</div>
													</div>
												</div>
											</div>
											<div className='col-12'>
												<div className='d-flex align-items-center'>
													<div className='flex-shrink-0'>
														<Icon icon='Mail' size='3x' color='secondary' />
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-5 mb-0'>
															{`maria@site.com`}
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
														<Icon icon='LocationOn' size='3x' color='secondary' />
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-5 mb-0'>
															Barranquilla - Colombia
														</div>
														<div className='text-muted'>
															Ubicación
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col d-flex align-items-center">
										<div className='col-md-12 mb-3'>
											<div className="row">
												<div className="col-auto">
													<p className='mb-2'>
														Meta de recaudacion: <strong className="text-secondary">COP 1.000.000</strong>
													</p>
												</div>
												<div className="col-auto ms-auto">
													<p className='mb-2'>
														75% Completado
													</p>
												</div>
											</div>
											<Progress color='secondary' value={75} height={10} className='mb-2' />
											<div className="row">
												<div className="col">
													<p className='mb-2'>
														Plazo de financiacion: <strong className='text-primary'>3, Marzo 2023</strong>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-auto ms-auto">
										<Button
											color='primary'
											size='lg'
											isLight
											className='w-100 h-100'
											icon='Payments'>
											Invertir
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className="col-lg-12">
						<Card className="shadow-3d-secondary">
							<CardHeader>
								<CardLabel icon='Stream' iconColor='warning'>
									<CardTitle>Información del Proyecto</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className="row">
									<div className="col-12 mb-3">
										<h5>
											<strong>Nombre de la emprendedora</strong>
										</h5>
										<p className='mb-0'>
											Redes Sociales:
										</p>
										<small><a href="https://www.linkedin.com/in/maria-claudia-garc%C3%ADa-6a6068135/">https://www.linkedin.com/in/maria-claudia-garc%C3%ADa-6a6068135/</a></small>
									</div>
									<div className="row mx-auto">
										<div className="col-md-6">
											<CardLabel icon='Star' iconColor='warning'>
												<CardTitle>Objetivo de la Campaña</CardTitle>
											</CardLabel>
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sapiente vero nam quibusdam commodi odit officiis cupiditate, aspernatur quod aperiam aliquid magnam molestiae ipsum voluptatem doloremque quis ipsa, natus suscipit.
											</p>
										</div>
										<div className="col-md-6"> 
											<CardLabel icon='Favorite' iconColor='secondary'>
												<CardTitle>¿Por qué confiar en nuestro proyecto?</CardTitle>
											</CardLabel>
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sit beatae dolorum culpa ex, aliquid doloremque quam reiciendis maxime praesentium iste eius aperiam quo maiores corrupti quaerat, nam accusamus recusandae.
											</p>
										</div>
										<div className="col-md-6">
											<CardLabel icon='AddTask' iconColor='success'> 
												<CardTitle>¿Cómo lo haremos realidad?</CardTitle>
											</CardLabel>
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quo praesentium quibusdam cumque quam optio minima rerum quasi perferendis deleniti deserunt non perspiciatis, fugiat architecto harum commodi, repellendus quis vel!
											</p>
										</div>
										<div className="col-md-6">
											<CardLabel icon='Report' iconColor='danger'>
												<CardTitle>¿Cuáles son los riesgos?</CardTitle>
											</CardLabel>
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quo praesentium quibusdam cumque quam optio minima rerum quasi perferendis deleniti deserunt non perspiciatis, fugiat architecto harum commodi, repellendus quis vel!
											</p>
										</div>
										<div className="col-md-6">
											<CardLabel icon='Public' iconColor='info'>
												<CardTitle>Impacto Social</CardTitle>
											</CardLabel>
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quo praesentium quibusdam cumque quam optio minima rerum quasi perferendis deleniti deserunt non perspiciatis, fugiat architecto harum commodi, repellendus quis vel!
											</p>
										</div>
										<div className="col-md-6">
											<CardLabel icon='Stream' iconColor='info'>
												<CardTitle>Tipo de Proyecto</CardTitle>
											</CardLabel>
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quo praesentium quibusdam cumque quam optio minima rerum quasi perferendis deleniti deserunt non perspiciatis, fugiat architecto harum commodi, repellendus quis vel!
											</p>
										</div>
										<div className="col-md-6">
											<CardLabel icon='Category' iconColor='success'>
												<CardTitle>Categoria</CardTitle>
											</CardLabel>
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quo praesentium quibusdam cumque quam optio minima rerum quasi perferendis deleniti deserunt non perspiciatis, fugiat architecto harum commodi, repellendus quis vel!
											</p>
										</div>
										<div className="col-md-6">
											<CardLabel icon='TravelExplore' iconColor='secondary'>
												<CardTitle>Tipo de venta</CardTitle> 
											</CardLabel>
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quo praesentium quibusdam cumque quam optio minima rerum quasi perferendis deleniti deserunt non perspiciatis, fugiat architecto harum commodi, repellendus quis vel!
											</p>
										</div>
									</div>
									{/* <div className="row mx-auto">
										<div className="col-md-12">

										</div>
									</div> */}
								</div>
							</CardBody>
						</Card>
					</div>

					

					<div className="col-md-12 col-lg-8">
						<Card className="shadow-3d-primary">
							<CardHeader>
								<CardLabel icon='Stream' iconColor='primary'>
									<CardTitle>
										Información del Negocio
									</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody className='pt-0'>
									<div className="row mx-auto">
										<div className="col-md-12">
											<h4 className="">
												<strong>Azucares manualitas</strong>
											</h4>

											<div className="row mx-auto">
												<div className="col-md-12">
													<p className="mb-0"><strong>Descripción del Negocio</strong></p>
													<p>
														Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita minima magnam unde, quis tempora nulla consequatur maxime ut, dolores veniam nemo id obcaecati excepturi commodi molestias fugiat eos doloremque corporis?
													</p>
												</div>
												<div className="col-md-12 col-lg-6">
													<p className="mb-0"><strong>Representante Legal</strong></p>
													<p>
														Neero
													</p>
												</div>
												<div className="col-md-12 col-lg-6">
													<p className="mb-0"><strong>Industria</strong></p>
													<p>
														TIC
													</p>
												</div>
												<div className="col-md-12 col-lg-6">
													<p className="mb-0"><strong>Antiguedad</strong></p>
													<p>
														2 Años
													</p>
												</div>
												<div className="col-md-12 col-lg-6">
													<p className="mb-0"><strong>Equipo</strong></p>
													<p>
														Neero Team
													</p>
												</div>
												<div className="col-md-12 col-lg-6">
													<p className="mb-0"><strong>Ingresos del último año</strong></p>
													<p>
														COP 250.000.000
													</p>
												</div>
												<div className="col-md-12 col-lg-6">
													<p className="mb-0"><strong>Lugar Nacimiento</strong></p>
													<p>
														Barranquilla
													</p>
												</div>
											</div>

										</div>
									</div>
							</CardBody>
						</Card>
					</div>

					<div className="col-md-12 col-lg-4">
						<Card className="shadow-3d-primary">
							<CardHeader>
								<CardLabel icon='Group' iconColor='primary'>
									<CardTitle>
										Información de la Socia
									</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody className='pt-0'>
									<div className="row mx-auto">
										<div className="col-md-12">
											<div className="row">
												<div className="col-md-12 mb-3 d-flex align-items-center">
													<h4 className="me-3 ">
														<strong>Maria Claudia</strong>
													</h4>
													<span className='border border-primary border-2 text-primary fw-bold px-3 py-2 rounded'>
															32 Años
													</span>
												</div>
											</div>

											<div className="row mx-auto">
												<div className="col-md-12 col-lg-6">
													<p className="mb-0"><strong>Brief de la Socia</strong></p>
													<p>
														TIC
													</p>
												</div>
												<div className="col-md-12 col-lg-6">
													<p className="mb-0"><strong>Experiencia</strong></p>
													<p>
														2 Años
													</p>
												</div>
												<div className="col-md-12 col-lg-6">
													<p className="mb-0"><strong>Logros</strong></p>
													<p>
														Neero Team
													</p>
												</div>
												<div className="col-md-12 col-lg-6">
													<p className="mb-0"><strong>Ubicación de la Socia</strong></p>
													<p>
														Barranquilla
													</p>
												</div>
											</div>
										</div>
									</div>
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
