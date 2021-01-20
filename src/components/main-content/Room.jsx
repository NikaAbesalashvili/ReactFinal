import React from 'react';

const RoomData = [
    {
        type: 'BIG',
        title: 'Specious Room',
        description: 'The most specious room you will ever see in our hotel. Equipped with span and warm beds.',
        source: 'images/content-images/big-one.jpg'
    },
    {
        type: 'SMALL',
        title: 'Small Cheap Room',
        description: 'Smallest and economic room in our hotel. Save an extra buck for your holyday.',
        source: 'images/content-images/small-one.jpg',

    },
    {
        type: 'PREMIUM',
        title: 'Big Room',
        description: 'Biggest room in our hotel fully equiped with Wi-Fi and hot coffee.',
        source: 'images/content-images/expensive.jpg',
    },
    {
        type: 'EXPENSIVE',
        title: 'Expensive Luxury Room',
        description: 'The most expencive room available millionaires and very reach people.',
        source: 'images/content-images/premium.jpg'
    },
    {
        type: 'BIG',
        title: 'Specious Room',
        description: 'The most specious room you will ever see in our hotel. Equipped with span and warm beds.',
        source: 'images/content-images/big-two.jpg'
    },
    {
        type: 'SMALL',
        title: 'Small Cheap Room',
        description: 'Smallest and economic room in our hotel. Save an extra buvk for your holyday.',
        source: 'images/content-images/small-two.jpg'
    }
]

const RoomType = (props) => {
    return <h3 className='room-type' >{props.roomType}</h3>
}

const RoomTitle = (props) => {
    return <h2 className='room-title'>{props.roomTitle}</h2>
}

const RoomDescriotion = (props) => {
    return <p className="description">{props.description}</p>    
}

const RoomImage = (props) => {
    return <img className='image' src={props.source} alt="room-image"/>
}

function Room(props) {
    return (
        <div className="room">
            <RoomImage source={props.data.source}/>
            <div className="image-texts">
                <RoomType roomType={props.data.type}/>
                <RoomTitle roomTitle={props.data.title}/>
                <RoomDescriotion description={props.data.description}/>
            </div>
        </div>
    )
}

export default Room;
export {RoomData};
