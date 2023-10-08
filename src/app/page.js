"use client";

import {useState} from 'react'

import Image from 'next/image'
import Sidebar from '../../components/Sidebar'
import {FiMoreHorizontal} from 'react-icons/fi'
import {VscTwitter} from 'react-icons/vsc'
import Feed from '../../components/home/Feed.js'

import {BsStars} from 'react-icons/bs'

import TweetBox from '../../components/home/TweetBox'

import { BsCardImage, BsEmojiSmile } from 'react-icons/bs'
import { RiFileGifLine, RiBarChartHorizontalFill } from 'react-icons/ri'
import { IoMdCalendar } from 'react-icons/io'
import { MdOutlineLocationOn } from 'react-icons/md'

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
  sidebarWrapper: `flex-[0.7] px-8 flex `,
  twitterIconContainer: `text-3xl m-4`,
  tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
  navContainer: `flex-1`,
  profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-2`,
  profileLeft: `flex item-center justify-center mr-4`,
  profileImage: `height-12 w-12 rounded-full`,
  profileRight: `flex-1 flex`,
  details: `flex-1`,
  name: `text-lg`,
  handle: `text-[#8899a6]`,
  moreContainer: `flex items-center mr-2`,

  
  feedWrapper: `flex-[2] border-l border-r border-[#38444d]`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,



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


export default function Home() {

  const [tweetMessge, setTweetMessage] = useState('')

  const postTweet = (event) => {
      event.preventDefault()
      console.log(tweetMessge)
  }


  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar />

        {/* Feed */}

        <div className={style.feedWrapper}> 
            <div className={style.header}>
                <div className={style.headerTitle}>Home</div> 
                <BsStars />
            </div>

            {/* TweetBox */}


            <div className={style.tweetBoxWrapper}>
            <div className={style.tweetBoxLeft}>
                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg/800px-Tom_Cruise_by_Gage_Skidmore_2.jpg" alt="profile image" className={style.profileImage} />
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



        </div>
        
        <h2>Widgets</h2>
      </div> 
    </div>
  )
}
