import Profile from './profile/Profile';
import img from './profile/IMG_0713(1).jpg'

function App() {
  const handleAlert = () =>{
    alert('My name is : Mahdi Ben Mhenni')
  }
  const AppStyles = {display : 'flex' ,flexDirection : 'column',alignItems : 'center',justifyContent : 'center', margin : '0px' , width : '100vw' , height : '100vh' , backgroundImage: 'linear-gradient(#434343 0%, black 100%)'}
  const ContentStyles = {color : 'white' , margin : '25px' , padding : '20px' , border : '2px orange solid' , borderRadius : '25%' , textAlign : 'center'}
  const ButtonStyles = {width : '80px' ,height : "40px", backgroundColor : 'orange' , borderRadius : '10px' , border : 'none'}

  return (
    <div style={AppStyles} className="App">
      <button style={ButtonStyles} onClick = {handleAlert}>Click Me!</button>
      <div style={ContentStyles} className = 'Content'>
      <Profile fullname = 'Mahdi ben mhenni' bio = 'GMC Student' profession = 'Web Develepor'>
        <img style={{width: '200px',height : '200px', borderRadius : '50%' , objectFit : 'cover'}} src ={img}  alt = 'Me'/>
      </Profile>
      </div>
    </div>
  );
}

export default App;
