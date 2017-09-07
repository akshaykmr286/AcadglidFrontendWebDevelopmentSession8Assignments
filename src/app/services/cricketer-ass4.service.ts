import { Injectable } from '@angular/core';
import { ICricketList } from '../interface/cricketer-list';
import { IPlayerType } from '../interface/player-type';
import { LoggerService } from "./logger.service";
@Injectable()
export class CricketerAss4Service {

   cricketersList: ICricketList[] = [];
   constructor(private _logger: LoggerService) { }

    /** Add cricketer in the array List. */
    addCricketer(cricketerDetail: ICricketList) {
      this.cricketersList.unshift(cricketerDetail);
      /*calling logger for adding data*/
      this._logger.info("Adding Data",cricketerDetail);
    }

    /**Get the cricket list from the array. */
    getCricket(): ICricketList[] {
      /*calling logger for retrieving data*/
      this._logger.info("Retrieving Data",this.cricketersList);
      return this.cricketersList;
    }

}
