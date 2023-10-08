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

import Posts from '../../components/Posts';

import { BsFillPatchCheckFill } from 'react-icons/bs'
import { FaRegComment, FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiShare } from 'react-icons/fi'
import { format } from 'timeago.js'
import Widgets from '../../components/Widgets';

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-4/5 flex justify-between`,
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


    postWrapper: `flex p-3 border-b border-[#38444d]`,
    profileImage: `rounded-full h-[40px] w-[40px] object-cover`,
    postMain: `flex-1 px-4`,
    headerDetails: `flex items-center`,
    name: `font-bold mr-1`,
    verified: `text-[0.8rem]`,
    handleAndTimeAgo: `text-[#8899a6] ml-1`,
    tweet: `my-2`,
    image: `rounded-3xl`,
    footer: `flex justify-between mr-28 mt-4 text-[#8899a6]`,
    footerIconMessage: `rounded-full text-lg p-2 hover:text-[#1d9bf0] hover:bg-[#1e364a]`,
    footerIconRetweet: `rounded-full text-lg p-2 hover:text-[#03ba7c] hover:bg-[#1b393b]`,
    footerIconLike: `rounded-full text-lg p-2 hover:text-[#f91c80] hover:bg-[#39243c]`,
    footerIconShare: `rounded-full text-lg p-2 hover:text-[#1d9bf0] hover:bg-[#1e364a]`,

    widgetsWrapper: `flex-[1] p-4`,
    searchBar: `flex items-center bg-[#243340] p-2 rounded-3xl`,
    searchIcon: `text-[#8899a6] mr-2`,
    inputBox: `bg-transparent outline-none`,
    section: `bg-[#192734] my-6 rounded-xl overflow-hidden`,
    title: `p-2 font-bold text-lg`,
    showMore: `p-2 text-[#1d9bf0] text-sm cursor-pointer hover:bg-[#22303c]`,
    item: `flex items-center p-3 my-2 hover:bg-[#22303c] cursor-pointer`,
    newsItemLeft: `flex-1`,
    newsItemCategory: `text-[#8899a6] text-xs font-semibold`,
    newsItemTitle: `text-sm font-bold`,
    newsItemRight: `w-1/5 ml-3`,
    newsItemImage: `rounded-xl h-14 w-14 object-cover`,
    followAvatarContainer: `w-1/6`,
    followAvatar: `rounded-full h-[40px] w-[40px]`,
    profileDetails: `flex-1`,
    name: `font-bold`,
    handle: `text-[#8899a6]`,
    followButton: `bg-white text-black px-3 py-1 rounded-full text-xs font-bold`,


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
        <Feed />    
        <Widgets />

      </div> 
    </div>
  )
}
