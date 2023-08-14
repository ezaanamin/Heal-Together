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

export const APISlice = createSlice({
  name: 'API',
  initialState: { data: [],moives:[],TVSHOW:[],Books:[], error: null, status: 'idle',verfiedStatus:null},
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




  },
});

export default APISlice.reducer;
