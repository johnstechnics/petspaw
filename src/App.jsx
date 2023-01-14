import { useState } from 'react';
import { useBodyOverflow } from './hooks';
import './assets/css/reset.css';
import './assets/css/main.css';
import { Modal } from './components/Modal';
import { Navigation } from './components/Navigation';
import { NavBar } from './components/NavBar';
import { Mobilemenu } from './components/Mobilemenu';
import { Upload } from './pages/upload/Upload';
import { AppRoutes } from './AppRoutes';

export const App = (props) => {

	const [mobilemenuActive, setMobilemenuActive] = useState(false);
	const [modalActive, setModalActive] = useState(false);

	useBodyOverflow(modalActive, mobilemenuActive);

	return (
		<div className="wrapper">
			<div className="container">
				<Navigation class={props.pathName === '/' ? 'block' : 'none'} />
				<div className={props.pathName === '/' ? 'pages main' : 'pages'}>
					{props.pathName !== '/' && <NavBar setMobilemenuActive={setMobilemenuActive} />}
					<AppRoutes />
				</div>
			</div>
			<Mobilemenu
				mobilemenuActive={mobilemenuActive}
				setMobilemenuActive={setMobilemenuActive}
			/>
			<Modal
				modalActive={modalActive}
				setModalActive={setModalActive}
			>
				<Upload setModalActive={setModalActive} />
			</Modal>
		</div>
	)
};
