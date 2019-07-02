import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCt1_1TQFedlXFvuM7MHzdkg_MWL5Gw03s",
    authDomain: "visual-studio-55c81.firebaseapp.com",
    databaseURL: "https://visual-studio-55c81.firebaseio.com",
    projectId: "visual-studio-55c81",
    storageBucket: "visual-studio-55c81.appspot.com",
    messagingSenderId: "550994088874",
    appId: "1:550994088874:web:6e19fa2684efd63b"

};
const fireb = firebase.initializeApp(config); 
export default fireb;