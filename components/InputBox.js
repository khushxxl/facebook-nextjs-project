/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { useSession } from 'next-auth/client'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'
import { useRef, useState } from 'react'

import { collection, addDoc } from 'firebase/firestore'

import { db, storage } from '../firebase'

function InputBox() {
  const [session, loading] = useSession()
  const inputRef = useRef(null)

  const filePickerRef = useRef(null)
  const [imageToPost, setImageToPost] = useState(null)

  const sendPost = async (e) => {
    e.preventDefault()

    if (!inputRef.current.value) return

    db.collection('posts')
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, 'data_url')

          removeImage()

          uploadTask.on(
            'state_change',
            (error) => console.error(error),
            () => {
              storage
                .ref('posts')
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection('posts').doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true },
                  )
                })
            },
          )
        }
      })
    inputRef.current.value = ''
  }

  const addImageToPost = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result)
    }
  }

  const removeImage = () => {
    setImageToPost(null)
  }

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6 ">
      <div className="flex items-center space-x-4 p-4">
        <Image
          className="rounded-full"
          src={session.user.image}
          alt=""
          height={40}
          width={40}
        />
        <form action="" className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            ref={inputRef}
            placeholder={`Whats's on your mind, ${session.user.name}?`}
          />
          <button
            type="submit"
            className="ml-7 items-center "
            onClick={sendPost}
          >
            Submit
          </button>
        </form>
        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img src={imageToPost} alt="" className="h-10 object-contain" />
            <p className="text-xs  text-red-500 text-center ">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t cursor-pointer">
        <div className="input-icon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-xl xl:text-base">Live Video</p>
        </div>
        <div
          className="input-icon"
          onClick={() => filePickerRef.current.click()}
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-xl xl:text-base">Photo/Video</p>
          <input
            type="file"
            hidden
            onChange={addImageToPost}
            ref={filePickerRef}
          />
        </div>
        <div className="input-icon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-xl xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  )
}

export default InputBox
