import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from 'react-router-dom';
axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`

}

export const clearAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = ''

}

export const register = createAsyncThunk('auth/register', async(credentials, thunkAPI) => {
    try {
        const res = await axios.post('/users/signup', credentials);
        setAuthHeader(res.data.token)
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const signIn = createAsyncThunk('auth/signIn', async(credentials, thunkAPI) => {
    try {
        const res = await axios.post('/users/login', credentials);
        setAuthHeader(res.data.token)
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const signOut = createAsyncThunk('auth/signOut', async(_, thunkAPI) => {
    const navigate = useNavigate();
    try {
        await axios.post('/users/logout');
        clearAuthHeader()
        localStorage.clear()
        navigate('/');
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const refreshUser = createAsyncThunk('auth/refresh', async(_, thunkAPI) => {
  const state = thunkAPI.getState()
  const {token} = state?.auth || {}

  if(!token) return thunkAPI.rejectWithValue('Unable to fetch')

  setAuthHeader(token)
  try {
    const res = await axios.get('/users/current')
    return res.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})