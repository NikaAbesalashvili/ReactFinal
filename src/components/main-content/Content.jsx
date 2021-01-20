import Room, {RoomData} from './Room';
import './content.css';

const Content = () => {
    return (
        <div className="content">
            {RoomData.map((data, index) =>
                <Room data={data} key={index}/>
            )}
        </div>
    )
}

export default Content;
