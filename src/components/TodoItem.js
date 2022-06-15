
import 'bootstrap/dist/css/bootstrap.min.css';
import checkImg from '../img/check.png'



import { ListGroupItem } from 'reactstrap';

export default function TodoItem({onClick, completed, text}) {
  let url = checkImg;
  return ( 
    <ListGroupItem
      className={
        completed ?
          'todo todo--completed' :
          'todo'
      }
      onClick={onClick}
      >
        <div className='d-flex align-items-center justify-content-between'>
          <span className="todo__content ">
            {text}
          </span>
          {completed && <img src={url} width={28} height={28} alt='item-completed' />}
        </div>
      
    </ListGroupItem>  
);
}