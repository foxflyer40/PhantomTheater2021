import React, { useState } from "react";
// get the database
import { firestore } from "../firebase/firebase";
import { storage } from '../firebase/firebase'




function AdminForm() {
   // create state for show information
   let [title, setTitle] = useState({});
   let [blurb, setBlurb] = useState({});
   let [type, setType] = useState({});
   let [imageLgName, setImageLgName] = useState({})
   let [imageLg, setImageLg] = useState({});
   let [imageSm, setImageSm] = useState({});

   let [status, setStatus] = useState({});  //proposed / Booked / archived
   let [dates, setDates] = useState([]);  // creates array of dates/times

   // create state for each artist field
   let [displayName, setDisplayName] = useState({})
   let [contactName, setContactName] = useState({})
   let [phone, setPhone] = useState({})
   let [email, setEmail] = useState({})

   let [bio, setBio] = useState({})
   let [image1, setImage1] = useState({})
   let [image2, setImage2] = useState({})
   let [image3, setImage3] = useState({})
   let [image4, setImage4] = useState({})
   let [video1, setVideo1] = useState({})
   let [link1, setLink1] = useState({})
   let [link2, setLink2] = useState({})


   // construct object from state to pass to db
   let show = {
      title: title,
      type: type,
      blurb: blurb,
      imageLgName: imageLgName,
      imageLg: imageLg,
      imageSm: imageSm,
      status: status,
      dates: dates,
      displayName: displayName,
      contactName: contactName,
      phone: phone,
      email: email,
      bio: bio,
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4,
      video1: video1,
      link1: link1,
      link2: link2
   }


   // write current state to shows collection
   async function enterNewShow(event) {
      event.preventDefault();
      // get the collection 'shows' | .doc creates new entry with auto ID | .set(show) fills new entry with show object built from state values set by form
      if (!event.target.titleIn.value) {
         alert('please enter a show.')
         console.log(show)
      } else {
         console.log(show)
         // write show data to db
         await firestore.collection("shows").doc().set(show);
         // clear form inputs
         event.target.titleIn.value = "";
         event.target.blurbIn.value = "";
         event.target.typeIn.value = "";
         event.target.imageLgNameInput.value = ""
         event.target.imageLgInput.value = ""
         event.target.imageSmInput.value = ""
         event.target.statusIn.value = ""
         event.target.datesIn.value = ""
         event.target.displayNameInput.value = ''
         event.target.contactNameInput.value = ''
         event.target.phoneInput.value = ''
         event.target.emailInput.value = ''
         event.target.bioInput.value = ''
         event.target.image1Input.value = ''
         event.target.image2Input.value = ''
         event.target.image3Input.value = ''
         event.target.image4Input.value = ''
         event.target.video1Input.value = ''
         event.target.link1Input.value = ''
         event.target.link2Input.value = ''
// clear state
         setTitle({})
         setType({})
         setBlurb({})
         setImageLgName({})
         setImageLg({})
         setImageSm({})
         setStatus({})
         setDates({})
         setDisplayName({})
         setContactName({})
         setPhone({})
         setEmail({})
         setBio({})
         setImage1({})
         setImage2({})
         setImage3({})
         setImage4({})
         setVideo1({})
         setLink1({})
         setLink2({})
      }
   }

   // form sets state on input change and fires enterNewShow on submit
   return (
      <div>
         <form id="adminForm" onSubmit={enterNewShow}>
            <input type="submit" value="submit"></input>
            <br />
            <label>
               Show Title:
          <input
                  type="text"
                  name="titleIn"
                  onChange={(evt) => setTitle(evt.target.value)}
               ></input>
            </label>

            <br />

            <label>
               Show Blurb:
          <input
                  type="text"
                  name="blurbIn"
                  onChange={(evt) => setBlurb(evt.target.value)}
               ></input>
            </label>

            <br />

            <label>
               Type:
          <input
                  type="text"
                  name="typeIn"
                  onChange={(evt) => setType(evt.target.value)}
               ></input>
            </label>
            <br />
           

            {/* <progress value='0' max='100' id='uploader'>0%</progress> */}
            <label>
               File name:
                <input
                  type='text'
                  name='imageLgNameInput'
                  onChange={evt => {
                     setImageLgName(evt.target.value)
                  }}
               ></input></label>

            <br />
            <label>
               Image Large:
            <input
                  type='file'
                  name='imageLgInput'
                  value=''
                  onChange={evt => {
                     setImageLg(evt.target.files[0])
                  }}
               ></input></label>

            <br />
            <label>
               Image Small:
            <input
                  type='file'
                  name='imageSmInput'
                  value=''
                  onChange={evt => {
                     setImageSm(evt.target.files[0])
                  }}
               ></input></label>

            <br />
            <label>
               Status:
                <input
                  type='text'
                  name='statusIn'
                  onChange={evt => {
                     setStatus(evt.target.value)
                  }}
               ></input></label>

            <br />
            <label>
               Dates:
                <input
                  type='text'
                  name="datesIn"
                  onChange={evt => {
                     setDates(evt.target.value)
                  }}
               ></input></label>


            <br />
            <br />
            <label>
               Artist Name:
               <input type='text' name='displayNameInput' onChange={evt => setDisplayName(evt.target.value)}></input>
            </label>
            <br />
            <label>
               Contact Name:
               <input type='text' name='contactNameInput' onChange={evt => setContactName(evt.target.value)}></input>
            </label>
            <br />
            <label>
               Phone:
               <input type='text' name='phoneInput' onChange={evt => setPhone(evt.target.value)}></input>
            </label>
            <br />
            <label>
               Email:
               <input type='text' name='emailInput' onChange={evt => setEmail(evt.target.value)}></input>
            </label>
            <br />
            <label>
               Bio:
               <input type='text' name='bioInput' onChange={evt => setBio(evt.target.value)}></input>
            </label>
            <br />
            <label>
               Image 1:
               <input type='text' name='image1Input' onChange={evt => setImage1(evt.target.value)}></input>
            </label>
            <br />
            <label>
               Image 2:
               <input type='text' name='image2Input' onChange={evt => setImage2(evt.target.value)}></input>
            </label>
            <br />
            <label>
               Image 3:
               <input type='text' name='image3Input' onChange={evt => setImage3(evt.target.value)}></input>
            </label>
            <br />
            <label>
               Image 4:
               <input type='text' name='image4Input' onChange={evt => setImage4(evt.target.value)}></input>
            </label>
            <br />
            <label>
               Video:
               <input type='text' name='video1Input' onChange={evt => setVideo1(evt.target.value)}></input>
            </label>
            <br />
            <label>
               Link 1:
               <input type='text' name='link1Input' onChange={evt => setLink1(evt.target.value)}></input>
            </label>
            <br />
            <label>
               Link 2:
               <input type='text' name='link2Input' onChange={evt => setLink2(evt.target.value)}></input>
            </label>
          
         </form>

      </div>
   );
}

export default AdminForm;
