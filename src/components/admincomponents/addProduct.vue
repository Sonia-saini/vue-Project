<script setup>
  import {ref,reactive} from "vue";
  import { getStorage, ref as firebaseref, uploadBytesResumable, getDownloadURL ,db,collection,addDoc} from "../../firebase.js"
  let file=ref(null);
let form=reactive({title:"",price:0,image:""})
const onSubmit=async()=>{
  const docRef = await addDoc(collection(db, "vuestore"), form);

  console.log("Document written with ID: ", docRef)
  console.log(form)
}
  let fileUpload=()=>{

    const storage = getStorage();
// Create the file metadata

// Upload file and metadata to the object 'images/mountains.jpg'
const storageRef = firebaseref(storage, 'products/' + file.value.name);
const uploadTask = uploadBytesResumable(storageRef, file.value);
console.log(uploadTask)
// Listen for state changes, errors, and completion of the upload.
uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      form.image=downloadURL
      console.log('File available at', downloadURL);
    });
  }
);

  }  
</script>

<template>
    <div id="addproducts">
        <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="form.title"
        label="Product Title *"
        hint="title of product"
  
      />

      <q-input
        filled
        type="number"
        v-model="form.price"
        label="Product price *"
        lazy-rules

      />
      <q-file square filled v-model="file" label="choose file" @update:modelValue="fileUpload"/>
      <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
    </div>
</template>

<style lang="css" scoped>

</style>