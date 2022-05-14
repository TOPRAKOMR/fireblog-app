import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";


const firebaseUtil = firebase.initializeApp({
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  databaseURL:process.env.REACT_APP_databaseURL
  
});
export default firebaseUtil;

export const auth=firebaseUtil.auth();
export const firebaseDB=firebaseUtil.database();
export const googleProvider=new firebase.auth.GoogleAuthProvider();

// const firebaseConfig = {
//     apiKey: "AIzaSyBPMw0EetCbc_gDX9KMXUCMuN1Qk6ypNUw",
//     authDomain: "reactjs-train.firebaseapp.com",
//     databaseURL: "https://reactjs-train-default-rtdb.firebaseio.com",
//     projectId: "reactjs-train",
//     storageBucket: "reactjs-train.appspot.com",
//     messagingSenderId: "515003567847",
//     appId: "1:515003567847:web:868729412778a2f273dc42",
//     measurementId: "G-SR0WDHZ47D"
//   };
  


// const app = initializeApp(firebaseConfig);

// const auth =getAuth(app)

// export const createUser = async (email,password,navigate,displayName)=>{
//   try {
    
//     let userCredential =await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     await updateProfile(auth.currentUser,{
//       displayName:displayName,
//     });
//     navigate("/");
//     console.log(userCredential)
//   } catch (error) {
//     alert(error.message)
    
//   }
// };

// //* https://console.firebase.google.com/
// //* => Authentication => sign-in-method => enable Email/password
// //! Email/password ile girişi enable yap

// export const signIn = async(email,password,navigate)=>{
//   try {
//     let userCredential=await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     navigate("/")
//     console.log(userCredential);

//   } catch (error) {
//     alert(error.message)
//   }
// }

// export const logOut=()=>{
//   signOut(auth);
// }

// export const userObserver = (setCurrentUser) => {
//   onAuthStateChanged(auth, (currentUser) => {
//     if (currentUser) {
//       setCurrentUser(currentUser);
//     } else {
//       // User is signed out
//       setCurrentUser(false);
//     }
//   });
// };

//blog işlemleri ekleme-silme ve güncelleme,

// export const addNewBlog =(title,url,content,navigate)=>{
//   const db = getDatabase();
//   const userRef =ref(db,"baglanti");
//   const newUserRef =push(userRef)
//   set((newUserRef),{
//     blogTitle:title,
//     imgUrl:url,
//     blogContent:content
//   });
//   navigate("/");
// }

// export const useFetch=()=>{
//   const [isLoading, setIsLoading] = useState();
//   const [blogList,setBlogList]=useState();
//   useEffect(() => {
//     setIsLoading(true)
//     const db = getDatabase();
//     const userRef =ref(db,"baglanti");
//     onValue(userRef, (snapshot) => {
//       const data = snapshot.val();
//       const blogArray=[];

//       for(let id in data){
//           blogArray.push({id,...data[id]})
//       }          
//       setBlogList(blogArray);
//       setIsLoading(false);
//   });
// },[])
// return {blogList}
  
// }

