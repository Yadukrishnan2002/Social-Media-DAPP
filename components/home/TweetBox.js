import {useState} from 'react'
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs'
import { RiFileGifLine, RiBarChartHorizontalFill } from 'react-icons/ri'
import { IoMdCalendar } from 'react-icons/io'
import { MdOutlineLocationOn } from 'react-icons/md'

const style = {
    tweetBoxWrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
    tweetBoxLeft: `mr-4`,
    tweetBoxRight: `flex-1`,
    profileImage: `height-12 w-12 rounded-full`,
    inputField: `w-full h-full outline-none bg-transparent text-lg`,
    formLowerContainer: `flex`,
    iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
    icon: `mr-2`,
    submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
    inactiveSubmit: `bg-[#196195] text-[#95999e]`,
    activeSubmit: `bg-[#1d9bf0] text-white`,
}

function TweetBox (){

    const [tweetMessge, setTweetMessage] = useState('')

    const postTweet = (event) => {
        event.preventDefault()
        console.log(tweetMessge)
    }

   return(
    <div className={style.tweetBoxWrapper}>
            <div className={style.tweetBoxLeft}>
                <img src = "https://alchetron.com/cdn/ethan-hunt-841776cc-17c4-464d-9e92-3d3b66c4f7c-resize-750.jpeg" alt="profile image" className={style.profileImage} />
            </div>
            <div className={style.tweetBoxRight}> 
                <form>
                    <textarea className={style.inputField} 
                    placeholder="What's happening"
                    value = {tweetMessge}
                    onChange={(e) => setTweetMessage(e.target.value)}
                    />
                    <div className={style.formLowerContainer}> 
                        <div className={style.iconsContainer}>
                            <BsCardImage className={style.icon} />
                            <RiFileGifLine className={style.icon} />
                            <RiBarChartHorizontalFill className={style.icon} />
                            <BsEmojiSmile className={style.icon} />
                            <IoMdCalendar className={style.icon} />
                            <MdOutlineLocationOn className={style.icon} />                       
                        </div>
                            <button type = "submit" className={`${style.submitGeneral} ${
                                tweetMessge ? style.activeSubmit : style.inactiveSubmit
                            }`}
                            onClick={(event) => postTweet(event)}
                            >
                                Tweet
                            </button>                     
                    </div>
                </form>
            </div>
     </div>
   )
}

export default TweetBox;