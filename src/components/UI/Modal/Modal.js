import React, { useEffect } from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
   //porównaj sobie React.memo z shouldComponentUpdate
	// shouldComponentUpdate(nextProps, nextState) {
	// 	return nextProps.show !== props.show || nextProps.children !== props.children;
	// }

	return (
		<Aux>
			<Backdrop show={props.show} clicked={props.modalClosed} />
			<div
				className={classes.Modal}
				style={{
					transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
					opacity: props.show ? '1' : '0',
				}}
			>
				{props.children}
			</div>
		</Aux>
	);
};

export default React.memo(Modal, (prevProps, nextProps) => {
	return nextProps.show === prevProps.show && nextProps.children === prevProps.children;
});
