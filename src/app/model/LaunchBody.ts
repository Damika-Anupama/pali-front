/**
 * @author : Damika Anuapama Nanayakkara <damikaanupama@gmail.com>
 * @since : 06/06/2021
 **/

import { LaunchComment } from "./LaunchComment";
import { LaunchReaction } from "./LaunchReaction";

export interface LaunchBody {
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
}
