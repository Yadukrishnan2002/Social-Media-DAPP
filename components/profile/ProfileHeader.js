
import { useRouter } from 'next/navigation'
import React from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'

const style = {
    profileHeaderWrapper: `border-[#38444d] border-b`,
    header: `py-1 px-3 mt-2 flex items-center`,
    primary: `bg-transparent outline-none font-bold`,
    secondary: `text-[#8899a6] text-xs`,
    backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
    coverPhotoContainer: `flex items-center justify-center h-[15vh] overflow-hidden`,
    coverPhoto: `object-cover h-full w-full`,
    profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
    profileImageProfilePage: `object-cover rounded-full h-full`,
    profileImageNft: `object-cover h-full `,
    profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
    details: `px-3`,
    nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
    activeNav: `text-white`,
  }
  

const ProfileHeader = () => {

    const router = useRouter();
    const currentAccount = 'ethanhuntmi';

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div onClick={() => router.push('/')} className={style.backButton}>
          <BsArrowLeftShort />
        </div>
        <div className={style.details}>
          <div className={style.primary}>Ethan Hunt</div>
          <div className={style.secondary}>
           Tweets
          </div>
        </div>
      </div>
      <div className={style.coverPhotoContainer}>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLraD6x4mAOmTgVeDpdv6cBesnFGy443lyhKcSkjR8tKvOUmdNMBb3gwrjKacRZ76y3t0&usqp=CAU'
          alt='cover'
          className={style.coverPhoto}
        />
      </div>
      <div className={style.profileImageContainer}>
        <div
          className={
            false ? 'hex' : style.profileImageContainer
          }
        >
          <img
            src='https://alchetron.com/cdn/ethan-hunt-841776cc-17c4-464d-9e92-3d3b66c4f7c-resize-750.jpeg'
            alt='profile image'
            className={
              false
                ? style.profileImageNft
                : style.profileImageProfilePage
            }
          />
        </div>
      </div>
      <div className={style.details}>
        <div>
          <div className={style.primary}>Ethan Hunt</div>
        </div>
        <div className={style.secondary}>
          {currentAccount && (
            <>
              @{currentAccount.slice(0, 8)}...{currentAccount.slice(37)}
            </>
          )}
        </div>
      </div>
      <div className={style.nav}>
        <div className={style.activeNav}>Tweets</div>
        <div>Tweets & Replies</div>
        <div>Media</div>
        <div>Likes</div>
      </div>
    </div>
  )
}

export default ProfileHeader