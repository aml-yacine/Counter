import notFound from '../../assets/404.jpg';
import './notFound.css';
const Notfound = ()=>{
    return <div className="bg-info w-50 m-auto not_found">

        <img className='w-100' src={notFound} alt="not found" />

    </div>
}
export default Notfound;