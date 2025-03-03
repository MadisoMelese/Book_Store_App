import { AiOutlineClose } from "react-icons/ai"
import { PiBookLight } from "react-icons/pi"
import { BiUserCircle } from "react-icons/bi"

const BooksModal = ({book, onClose}) => {
  return (
    <div  className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center " onClick={onClose}>
      <div className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 " onClick={(e) => e.stopPropagation()}> 
        <AiOutlineClose className="text-3xl text-red-500  top-6 left-6 cursor-pointer" onClick={onClose}/>
        <div className="flex flex-col justify-center items-center gap-x-4">
          <div className="flex w-full justify-center items-center gap-x-4">
          <PiBookLight className="text-6xl text-blue-500"/>
          <h1 className="text-2xl font-bold"> Book Details</h1>
          </div>

          <div className="flex flex-col justify-center items-start gap-x-4 relative">
            <div className="flex justify-start gap-x-4 text-xl">
            <span className="font-bold text-xl">Title:</span> {book.title}
              </div>
            <div className="text-xl"> <span className="text-xl text-black font-bold">Description: 
            </span>This Book prepared for both beginners and advance level programmer to guidline how to use 
              all basic things like syntax, functions, conditional rendering</div>
            <div className="flex text-2xl mt-6">
              <BiUserCircle className="text-4xl text-blue-500"/> 
              <span>  {book.author} 
                </span></div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default BooksModal
