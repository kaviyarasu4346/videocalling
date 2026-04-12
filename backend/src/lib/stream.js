import {StreamChat} from 'stream-chat';
import {ENV} from "./env.js";

const apikey = ENV.STREAM_API_KEY;
const apisecret = ENV.STREAM_API_SECRET; 

if(!apiKey || !apiSecret){
    console.error("Stream API key and SECRET is missing");
}

export const chatClient = StreamChat.getInstance(apiKey, apiSecret); 

export const upsertStreamUser = async(userData) => {
    try{
        await chatClient.upsertUser(userData);
        console.log("Stream user upserted",userData);  
      }catch(error){
        console.error("Error upserting Stream user:", error);
    }
};



export const deleteStreamUser = async(userId) => {
    try{
        await chatClient.deleteUser(userId);
        console.log("Stream user deleted",userId);
    }catch(error){
        console.error("Error deleting Stream user:", error);
    }
};

//todo :add another method to generate Token