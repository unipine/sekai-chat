import axios from 'axios';

class ChatAPI {

  constructor() {
    this.axios = axios.create({
      baseURL: '/api/'
    })
  }

  postAuthAPI = (user) => (
    this.axios.post('/auth',user, {
      headers: {"Content-Type": "application/json"}
    }).then(response => {
      return response.data
    })
  )

  postUsersAPI = (user) => (
    this.axios.post('/users',user, {
      headers: {"Content-Type": "application/json"}
    }).then(response => {
      return response.data
    })
  )

  getUsersAPI = () => (
    this.axios.get('/users', {
      headers: {"Content-Type": "application/json"}
      }).then(response => {
      return response.data
    })
  )


  getOneUserAPI = (id,token) => (
    this.axios.get(`/users/${id}`,{
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token }
    }).then(response => {
      return response.data
    })
  )

  postChannelsAPI = (name,token) => ( console.log('name',name,'token',token) ||
    this.axios.post(`/channels`,name,{
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}` }
    }).then(response => {
      return response.data
    })
  )

  getChannelsAPI = (token) => (
    this.axios.get(`/channels`,{
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}` }
    }).then(response => {
      return response.data
    })
  )

  getMembersAPI = (id,token) => (
    this.axios.get(`/channels/${id}/members`,{
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}` }
    }).then(response => {
      return response.data
    })
  )

  postMembersAPI = (id,token) => ( console.log('id',id,'token',token) ||
    this.axios.post(`/channels/${id}/members`,null,{
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}` }
    }).then(response => {
      return response.data
    })
  )


  getMessagesAPI = (id,token) => (
    this.axios.get(`/channels/${id}/messages`,{
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}` }
    }).then(response => {
      return response.data
    })
  )

  postMessagesAPI = (id,message,token) => ( console.log('id',id,'message',message,'token',token) ||
    this.axios.post(`/channels/${id}/messages`,message,{
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}` }
    }).then(response => {
      return response.data
    })
  )


}

export default ChatAPI;
