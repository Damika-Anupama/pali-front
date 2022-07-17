/**
 * @author : Damika Anuapama Nanayakkara <damikaanupama@gmail.com>
 * @since : 07/17/2022
 **/

 import { LaunchComment } from "./LaunchComment";
 import { LaunchReaction } from "./LaunchReaction";
 
 export interface LaunchCommunity {
   launchId: Number;
   file: File;
   mediaType: string;
   description: string;
   feeling: string;
   userId: number;
   userName: string;
   shortDescription: string;
   profilePicture: string;
   updatedTime: Date;
   reactions: LaunchReaction[];
   comments: LaunchComment[];
   existingStatus: string,
   sharedPersonId: Number,
   sharedTime: Date
 }
 