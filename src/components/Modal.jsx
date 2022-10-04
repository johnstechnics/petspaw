export const Modal = (props) => (
    <div 
        className={props.modalActive ? 'modal active' : 'modal'} 
        onClick={() => props.setModalActive(false)}
    >
        <div className="container">
            {props.children}
        </div>
    </div>
);
