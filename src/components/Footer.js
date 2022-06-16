
import listAllImg from '../img/listAll.png'
import completedListImg from '../img/check.png'
import nonCompletedListImg from '../img/close.png'

import 'bootstrap/dist/css/bootstrap.min.css';


export default function Footer({kindOfFilter, visibilityFilter}) {

  let allUrl = listAllImg;
  let completedUrl = completedListImg;
  let nonCompletedUrl = nonCompletedListImg;


  const onFilterClick = filter => visibilityFilter({filter})

  return (
    <div 
    className="d-flex justify-content-between" 
    style={{width:"60%"}}
    >
      <button 
        className="button-list"
        onClick={e => {
          e.preventDefault();
          onFilterClick('SHOW_ALL');
        }}
      >
        <img 
          src= {allUrl} 
          width={25} 
          alt='all-list'
        />
      </button>
      <button 
        className="button-list" 
        onClick={e => {
          e.preventDefault();
          onFilterClick('SHOW_ACTIVE');
        }}     
      >
        <img 
          src= {nonCompletedUrl} 
          width={25} height={25} 
          alt='noncompleted-list'
        />
      </button>
      <button 
        className="button-list" 
        onClick={e => {
          e.preventDefault();
          onFilterClick('SHOW_COMPLETED');
        }}        
      >
        <img 
          src= {completedUrl} 
          width={25} 
          alt='completed-list'
        />
      </button>
    </div>
  )
}