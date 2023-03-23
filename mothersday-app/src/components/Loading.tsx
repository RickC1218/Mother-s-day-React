import gif from '../assets/gif-project.gif';
import './styles/loading.css';
import { Themes } from './Themes';

export const Loading = () => {
    return (
        <div className="card-loading">
            <div className="loading-themes">
                <Themes />
            </div>
            <div className="container-loading">
                <img src={gif} alt="loading..." />
                <h2>Loading...</h2>
            </div>
        </div>
    );
}
