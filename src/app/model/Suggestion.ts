/**
 * @author : Damika Anuapama Nanayakkara <damikaanupama@gmail.com>
 * @since : 18/06/2021
 **/

export class Suggestion {
  constructor(
    public message: string,
    public priority: string,
    public feeling: string,
    public userId: number,
  ) {
  }


}
