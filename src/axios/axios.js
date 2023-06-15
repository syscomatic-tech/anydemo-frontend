import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import { saveAs } from 'file-saver';

// Base URL
const baseURL =
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:5050/api/v1';

const token =
  typeof window !== 'undefined' ? localStorage.getItem('accessToken') : '';
// Authenticated config with Authorization header
const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    authorization: `Bearer ${token}`,
  },
};

const configMT = {
  headers: {
    //multipart/form-data
    'Content-Type': 'multipart/form-data',
    authorization: `Bearer ${token}`,
  },
};
const configOT = {
  headers: {
    //multipart/form-data
    'Content-Type': 'application/octet-stream',
    authorization: `Bearer ${token}`,
  },
};
// Config with Content-Type header
const configCT = {
  headers: {
    'Content-Type': 'application/json',
  },
};

// Async thunk action to handle registration
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${baseURL}/auth/register`,
        userData,
        configCT
      );
      toast.success(response?.data?.message || 'Registered Successfully!');
      if (response.status === 200) {
        localStorage.setItem('email', userData.email);
      }
      return response?.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return rejectWithValue(
        error?.response?.data || error?.message || 'Something went wrong!'
      );
    }
  }
);

// Async thunk action to handle login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${baseURL}/auth/login`,
        userData,
        configCT
      );
      toast.success('Logged In Successfully!');
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.removeItem('email');
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Something went wrong!');
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk action to handle forget Password
export const forgetPassword = createAsyncThunk(
  'auth/forgetPassword',
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${baseURL}/auth/forgot-password`,
        email,
        configCT
      );
      toast.success(
        response?.data?.message || 'Password reset link sent to your email!'
      );
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Something went wrong!');
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk action to handle get user details
export const getProfile = createAsyncThunk(
  'user/fetchUserData',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseURL}/auth/me`, config);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Async thunk action to handle update user details
export const updateProfile = createAsyncThunk(
  'user/updateUserData',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.put(
        `${baseURL}/user/profile`,
        userData,
        config
      );
      toast.success(response?.data?.message || 'Profile Updated Successfully!');
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Something went wrong!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Axios instance for creating voice
export const createVoice = (voiceData) => {
  return axios.post(`${baseURL}/voice`, voiceData, config);
};

// Axios instance for getting all voices
export const getAllVoices = createAsyncThunk(
  'voice/getAllVoices',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseURL}/voice`, config);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//get allPlans
export const getAllPlans = createAsyncThunk(
  'plan/getAllPlans',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseURL}/plan`, config);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//subscribe to plan
export const subscribeToPlan = createAsyncThunk(
  'plan/subscribeToPlan',
  async (priceId, thunkAPI) => {
    try {
      // const user = useSelector((state) => state.profile.profile);
      const url = `${baseURL}/plan/price/${priceId}/checkout`;
      const response = await axios.get(url, config);
      //redirect to checkout page with blank page
      window.open(response.data.checkoutUrl, '_blank');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//cancel subscribe
export const cancelSubscription = createAsyncThunk(
  'plan/cancelSubscription',
  async (thunkAPI) => {
    try {
      const url = `${baseURL}/plan/cancel`;
      const response = await axios.delete(url, config);
      toast.success(
        response?.data?.message || 'Subscription Cancelled Successfully!'
      );
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Something went wrong!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// fetchUserMusic
export const fetchUserMusic = createAsyncThunk(
  'userMusic/fetchUserMusic',
  async () => {
    try {
      const response = await axios.get(`${baseURL}/music/user`, configMT);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// createMusic
export const convertMusic = createAsyncThunk(
  'musicConversion/convertMusic',
  async (formData) => {
    try {
      const response = await axios.post(
        `${baseURL}/music/convert`,
        formData,
        configMT
      );
      toast.success(response?.data?.message);
      console.log('convertMusic response', response);
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Something went wrong!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// downloadMusic
export const downloadMusic = createAsyncThunk(
  'musicDownload/downloadMusic',
  async (music) => {
    try {
      const response = await axios.get(
        `${baseURL}/music/${music._id}/download`,
        {
          ...configOT,
          responseType: 'blob',
        }
      );

      const blob = new Blob([response.data]);

      saveAs(blob, music.song);

      return response.data;
    } catch (error) {
      console.log({ error });
      toast.error(error?.response?.data?.message || 'Something went wrong!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// fetch user downloaded music list
export const downloadedMusicList = createAsyncThunk(
  'musicDownload/downloadedMusicList',
  async () => {
    try {
      const response = await axios.get(
        `${baseURL}/music/user/download`,
        config
      );

      return response.data;
    } catch (error) {
      console.log('downloadMusic error', error);
      toast.error(error?.response?.data?.message || 'Something went wrong!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// streamMusic
export const streamMusic = createAsyncThunk(
  'musicStream/streamMusic',
  async (musicId) => {
    try {
      const response = await axios.get(
        `${baseURL}/music/${musicId}/stream`,
        configMT
      );
      console.log('streamMusic', response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// verifyEmail
export const verifyEmail = createAsyncThunk(
  'emailVerification/verifyEmail',
  async (token) => {
    try {
      const response = await axios.post(
        `${baseURL}/auth/verify-email`,
        { token },
        configCT
      );
      toast.success(response?.data?.message || 'Email verified successfully!');
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Something went wrong!');
      return error.response.data;
    }
  }
);

// authentication with google
export const authenticateWithGoogle = createAsyncThunk(
  'auth/authenticateWithGoogle',
  async () => {
    try {
      const response = await axios.get(`${baseURL}/auth/google`, configCT);
      toast.success(response?.data?.message || 'Logged In Successfully!');
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Something went wrong!');
      return error.response.data;
    }
  }
);

// resetPassword
export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (data) => {
    try {
      const response = await axios.post(
        `${baseURL}/auth/reset-password`,
        data,
        configCT
      );
      toast.success(response?.data?.message || 'Password reset successfully!');
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Something went wrong!');
      return error.response.data;
    }
  }
);
