import React from 'react';
import GifBoxIcon from '@mui/icons-material/GifBox';
import PhotoIcon from '@mui/icons-material/Photo';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { ADDTOPOST,Heading,AddToPostItems } from "../styles/styles"
const AddToPost = () => {
    return (
   <ADDTOPOST>
    <Heading>Add to your post</Heading>
<AddToPostItems>
   <PhotoIcon fontSize="large"  style={{color:"#45bd62",marginRight:10}}/>
   <TagFacesIcon style={{color:"#f7b928"}}      fontSize="large"/>
   <FmdGoodIcon fontSize="large" style={{color:"#f02849",marginRight:10}}/>
   <GifBoxIcon fontSize="large" style={{color:"#2abba7",marginRight:10}}/>
</AddToPostItems>
   </ADDTOPOST>
    );
}

export default AddToPost;
