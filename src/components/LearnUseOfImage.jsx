//this picture we imported from public folder mind it
import Pic1 from '/images/pic1.jpg'


//This picture we imported frm assets folder which is inside src folder mind it 
import Pic2 from '../assets/images/pic2.jpg'
const LearnUseOfImage = () => {
  return (
    <>
      <h1> Images </h1>
      <img src={Pic1} alt="Alternative way" width="400px" height="400px"/><br/>
        <img src={Pic2} alt="Alternative way" width="400px" height="400px"/>
    </>
  )
}

export default LearnUseOfImage
 