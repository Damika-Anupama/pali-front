/**
 * @author : Damika Anuapama Nanayakkara <damikaanupama@gmail.com>
 * @since : 07/17/2022
 **/

import { LaunchCommunity } from "./LaunchCommunity";
import { miniUserCom } from "./MiniUserCom";

 export interface FullCommunityBody {
    id: number;
    title: string;
    description: string;
    createdDate: Date;
    groupIcon: File;
    wallPaper: File;
    userDetails: miniUserCom[];
    launches: LaunchCommunity[];
  }
  