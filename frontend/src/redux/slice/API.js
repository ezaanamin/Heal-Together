import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const SignUpPost = createAsyncThunk(
  'post/postRequest',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:4000/users/', data);
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
export const TopRatedMoives = createAsyncThunk("TopRatedMoives", async () => {

  try {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDNmNjk5NmYzYTBhOGEwMjRlODYxY2MwYjc2OWU0ZCIsInN1YiI6IjYyNTFjNzY5OGZkZGE5MWM5ZWE4NjFhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3XyuU3Ymo_WkKLX-_hf7gbPtjvlbUp4afjRmSbDJmjA'
      }
    };
    
   const response= await axios.get('https://api.themoviedb.org/3/movie/top_rated', options)
  
   return response.data['results']
  
  } catch (error) {
    console.error('Error fetching data:', error);
  }



});

export const TopRatedTVSHOW = createAsyncThunk("TopRatedTVSHOW", async () => {

  try {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDNmNjk5NmYzYTBhOGEwMjRlODYxY2MwYjc2OWU0ZCIsInN1YiI6IjYyNTFjNzY5OGZkZGE5MWM5ZWE4NjFhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3XyuU3Ymo_WkKLX-_hf7gbPtjvlbUp4afjRmSbDJmjA'
      }
    };
    
   const response= await axios.get('https://api.themoviedb.org/3/tv/top_rated', options)
  
   return response.data['results']
  
  } catch (error) {
    console.error('Error fetching data:', error);
  }



});

export const TopBook = createAsyncThunk("TopBooks", async () => {

  try {

   const response= await axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=FZUKKCOd6D4OfYN2S17Cj1b5o1M9E9pH')
  
   return response.data
  
  } catch (error) {
    console.error('Error fetching data:', error);
  }



});
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

      builder
      .addCase(TopRatedMoives.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(TopRatedMoives.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.moives = action.payload;
        state.error = null;
      })
      .addCase(TopRatedMoives.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });


      builder
      .addCase(TopRatedTVSHOW.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(TopRatedTVSHOW.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.TVSHOW = action.payload;
        state.error = null;
      })
      .addCase(TopRatedTVSHOW.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });

      builder
      .addCase(TopBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(TopBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.Books = action.payload;
        state.error = null;
      })
      .addCase(TopBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default APISlice.reducer;
