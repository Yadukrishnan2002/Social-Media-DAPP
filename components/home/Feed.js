import {BsStars} from 'react-icons/bs'
import TweetBox from './TweetBox';
import Posts from '../Posts';

const style = {
    feedWrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}


const tweets = [

        {
            displayName: 'Tony Stark',
            userName: 'tonystark@3000',
            avatar: 'https://www.koimoi.com/wp-content/new-galleries/2020/08/avengers-endgame-trivia-118-when-robert-downey-jr-called-tony-stark-an-ahole-001.jpg',
            text: 'I am Iron Man',
            isProfileImageNft: false,
            timestamp: '2020-06-01T12:00:00.000Z',
        },
        {
            displayName: 'Thor Odinson',
            userName: 'thorgodofthunder',
            avatar: 'https://im.indiatimes.in/content/2020/Apr/thor-ragnarok-1440x2560-chris-hemsworth-thor-4k-12788-1_5ea17aeeaaa72.jpg?w=820&h=540&cc=1',
            text: 'The Strongest Avenger',
            isProfileImageNft: false,
            timestamp: '2020-06-01T12:00:00.000Z',
        },
        {
            displayName: 'Bruce Wayne',
            userName: 'brucewaynedarkknight',
            avatar: 'https://upload.wikimedia.org/wikipedia/en/1/19/Bruce_Wayne_%28The_Dark_Knight_Trilogy%29.jpg',
            text: 'I am Vengence',
            isProfileImageNft: false,
            timestamp: '2020-06-01T12:00:00.000Z',
        },
        {
            displayName: 'Clark Kent',
            userName: 'clarkkryptonite',
            avatar: 'https://i.pinimg.com/originals/89/ca/43/89ca4331c28a53e2f7986ff9e8d8bba5.jpg',
            text: 'I hate krypton',
            isProfileImageNft: false,
            timestamp: '2020-06-01T12:00:00.000Z',
        },
        {
          displayName: 'Steve Rogers',
          userName: 'clarkkryptonite',
          avatar: 'https://i.pinimg.com/1200x/36/01/b3/3601b349f9f4b95528d7a85104c5ff15.jpg',
          text: 'Avengers Assemble',
          isProfileImageNft: false,
          timestamp: '2020-06-01T12:00:00.000Z',
      },
]

function Feed(){
    return (    
        <div className={style.feedWrapper}> 
            <div className={style.header}>
                <div className={style.headerTitle}>Home</div> 
                <BsStars />
            </div>

            <TweetBox />

            {
                tweets.map((tweet,index) => (
                    <Posts 
                    key = {index}
                    displayName = {tweet.displayName}
                    userName = {`${tweet.userName.slice(0,6)}...${tweet.userName.slice(-4)}`}
                    avatar = {tweet.avatar}
                    text = {tweet.text}
                    isProfileImageNft = {tweet.isProfileImageNft}
                    timestamp = {tweet.timestamp}
                    
                    />
                ))
            }
            
        </div>
    )
}

export default Feed;