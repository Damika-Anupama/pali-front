/**
 * @author : Damika Anuapama Nanayakkara <damikaanupama@gmail.com>
 * @since : 06/06/2021
 **/

export interface LaunchBody {
  file: File;
  mediaType: string;
  description: string;
  feeling: string;
  userId: number;
  userName: string;
  shortDescription: string;
  profilePicture: string;
}
