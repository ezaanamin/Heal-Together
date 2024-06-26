import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const SignUpPost = createAsyncThunk(
  'post/postRequest',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:4000/users/', data);

      if (response.data.error === 'User Exist') {
        return rejectWithValue({ error: 'User Exist' });
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const  Recommended=createAsyncThunk(
  'post/recommended',
  async(data,{rejectWithValue})=>{
try
{
  const response=await axios.post('http://localhost:4000/users/recommended',data);
  return response.data;
}
catch(error)
{
  return rejectWithValue(error.response.data);
}
  }
);

export const VerfiedUser = createAsyncThunk(
  'post/VerfiedUser',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:4000/users/verify', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const VerifyUser = createAsyncThunk(
  'post/VerifyUser',
  async ({ token, data }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:4000/users/verifyUser', data, {
        headers: {
          Authorization: `Bearer ${token}` // Assuming your token is a JWT
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const ReSendCode = createAsyncThunk(
  'post/ReSendCode',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:4000/users/verify', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const Login = createAsyncThunk(
  'post/Login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:4000/users/login', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const GetUsersProfile = createAsyncThunk(
  'post/userProfile',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:4000/users/getUsers', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const EditUserProfile = createAsyncThunk(
  'post/EditUserProfile',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:4000/users/editprofile', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const UserFriends = createAsyncThunk(
  'post/UserFriends',
  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:4000/users/userfriend',
        {}, 
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const GetConversation = createAsyncThunk(
  'post/GetConversation',
  async ({ token, received_name }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:4000/chat/Conversation',
        { received_name },  
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const GetChat = createAsyncThunk(
  'post/GetChat',
  async ({ token,chatToken }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:4000/chat/getchat',
        {}, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
            chatToken:`Bearer ${chatToken}`,
            
          }
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const GetUsersMindFulDetails=createAsyncThunk(
'post/GetUsersMindFulDetails',
async (token, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:4000/mindful_moments/get', null, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
}
);

export const PostSupportMindFulMoments=createAsyncThunk(
  'post/PostSupportMindFulMoments',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:4000/mindful_moments/support', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
  );
  
  export const GetCommentsMindFulMoments=createAsyncThunk(
    'post/GetCommentsMindFulMoments',
    async (data, { rejectWithValue }) => {
      try {
        const response = await axios.post('http://localhost:4000/mindful_moments/getMindfulMomentComments', data);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
    );

    export const GetUsersInformation = createAsyncThunk(
      '/users/information',
      async (token, { rejectWithValue }) => {
       
        try {
          const response = await axios.post('http://localhost:4000/users/information', null, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          return response.data;
        } catch (error) {
          return rejectWithValue(error.response.data);
        }
      }
    );


    export const AuthenticateUser = createAsyncThunk(
      '/users/AuthenticateUser',
      async (token, { rejectWithValue }) => {
       
        try {
          const response = await axios.post('http://localhost:4000/users/Authenticate', null, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          return response.data;
        } catch (error) {
          return rejectWithValue(error.response.data);
        }
      }
    );
export const uploadImage = createAsyncThunk(
  'image/upload',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:4000/upload', formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const APISlice = createSlice({
  name: 'API',
  initialState: { data: [], error: null, status: 'idle',verfiedStatus:null},
  reducers: {},
  extraReducers: (builder) => {
  
      builder
      .addCase(SignUpPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(SignUpPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(SignUpPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });


      builder
      .addCase(VerfiedUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(VerfiedUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.verfiedStatus = action.payload;
        state.error = null;
      })
      .addCase(VerfiedUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });


      builder
      .addCase(ReSendCode.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(ReSendCode.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(ReSendCode.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });


      builder
      .addCase(Login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(Login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(Login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });


      builder
      .addCase(Recommended.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(Recommended.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(Recommended.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });

      builder
      .addCase(VerifyUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(VerifyUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(VerifyUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
builder
.addCase(GetUsersProfile.pending, (state) => {
  state.status = 'loading';
})
.addCase(GetUsersProfile.fulfilled, (state, action) => {
  state.status = 'succeeded';
  state.data = action.payload;
  state.error = null;
})
.addCase(GetUsersProfile.rejected, (state, action) => {
  state.status = 'failed';
  state.error = action.payload;
});

builder
.addCase(EditUserProfile.pending, (state) => {
  state.status = 'loading';
})
.addCase(EditUserProfile.fulfilled, (state, action) => {
  state.status = 'succeeded';
  state.data = action.payload;
  state.error = null;
})
.addCase(EditUserProfile.rejected, (state, action) => {
  state.status = 'failed';
  state.error = action.payload;
});

builder
.addCase(GetUsersMindFulDetails.pending, (state) => {
  state.status = 'loading';
})
.addCase(GetUsersMindFulDetails.fulfilled, (state, action) => {
  state.status = 'succeeded';
  state.data = action.payload;
  state.error = null;
})
.addCase(GetUsersMindFulDetails.rejected, (state, action) => {
  state.status = 'failed';
  state.error = action.payload;
});


builder
.addCase(PostSupportMindFulMoments.pending, (state) => {
  state.status = 'loading';
})
.addCase(PostSupportMindFulMoments.fulfilled, (state, action) => {
  state.status = 'succeeded';
  state.data = action.payload;
  state.error = null;
})
.addCase(PostSupportMindFulMoments.rejected, (state, action) => {
  state.status = 'failed';
  state.error = action.payload;
});

builder
.addCase(GetCommentsMindFulMoments.pending, (state) => {
  state.status = 'loading';
})
.addCase(GetCommentsMindFulMoments.fulfilled, (state, action) => {
  state.status = 'succeeded';
  state.data = action.payload;
  state.error = null;
})
.addCase(GetCommentsMindFulMoments.rejected, (state, action) => {
  state.status = 'failed';
  state.error = action.payload;
})

builder
.addCase(GetUsersInformation.pending, (state) => {
  state.status = 'loading';
})
.addCase(GetUsersInformation.fulfilled, (state, action) => {
  state.status = 'succeeded';
  state.data = action.payload;
  state.error = null;
})
.addCase(GetUsersInformation.rejected, (state, action) => {
  state.status = 'failed';
  state.error = action.payload;
});
    
builder
.addCase(GetChat.pending, (state) => {
  state.status = 'loading';
})
.addCase(GetChat.fulfilled, (state, action) => {
  state.status = 'succeeded';
  state.data = action.payload;
  state.error = null;
})
.addCase(GetChat.rejected, (state, action) => {
  state.status = 'failed';
  state.error = action.payload;
});

  builder
.addCase(GetConversation.pending, (state) => {
  state.status = 'loading';
})
.addCase(GetConversation.fulfilled, (state, action) => {
  state.status = 'succeeded';
  state.data = action.payload;
  state.error = null;
})
.addCase(GetConversation.rejected, (state, action) => {
  state.status = 'failed';
  state.error = action.payload;
});
    
  },

})




//GetConversation



export default APISlice.reducer;
