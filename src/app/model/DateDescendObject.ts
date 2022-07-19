/**
 * @author : Damika Anuapama Nanayakkara <damikaanupama@gmail.com>
 * @since : 07/18/2022
 **/

import { ObjectType } from "typescript";
import { LaunchComment } from "./LaunchComment";
import { LaunchReaction } from "./LaunchReaction";
import { onlineStatus } from "./OnlineStatus";

export interface DateDescendObject {
    createdDate: Date;
    type: ObjectType;
    id: number;
    // from community
    title: string;
    communityDescription: string;
    groupIcon: File;
    wallpaper: File;
    //from friend
    username: string;
    asked: boolean; // whether the friend requested and you accepted or you asked friend accepted
    profilePicture: File;
    //from launch
    file: File;
    mediaType: string;
    launchDescription: string;
    feeling: string;
    userId: Number;
    userName: string;
    shortDescription: string;
    userprofilePicture: File;
    userOnlineStatus:onlineStatus;
    updatedTime: Date;
    reactions: LaunchReaction[];
    comments: LaunchComment[];
}
