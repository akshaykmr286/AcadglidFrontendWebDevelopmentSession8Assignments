import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ICricketList } from '../interface/cricketer-list';
import { IPlayerType } from '../interface/player-type';
import { Router, ActivatedRoute, Params } from '@angular/router';
/*No need to declare in Providers as they are declared in app.module.ts*/
import { CricketerDropDownAss2Service } from "../services/cricketer-drop-down-ass2.service";
import { CricketerAss2Service } from "../services/cricketer-ass2.service";
/***************************************************************************************/
@Component({
  selector: 'app-ass2',
  templateUrl: './ass2.component.html',
  styleUrls: ['../ass1/ass1.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class Ass2Component implements OnInit {
  cricketersArray: ICricketList[] = []
  playerType: IPlayerType[] = [];
  firstName: string;
  lastName: string;
  favShot: string;
  batmanBowler: string;
  cricketerDetail: ICricketList;
  constructor(private router:Router,private _cricketService: CricketerAss2Service, private _cricketerDropDown: CricketerDropDownAss2Service) { }

  ngOnInit() { 
    this.playerType = this._cricketerDropDown.getPlayerType();
   }
    /**Add a cricket */
  addCricketer(first, last, shot, batsmanBowler) {

    this.cricketerDetail = {
      firstName: first,
      lastName: last,
      favShot: shot,
      batsmanBowler: batsmanBowler
    };

    /**Call function from service. */
    this._cricketService.addCricketer(this.cricketerDetail);
    this.cricketersArray = this._cricketService.getCricket();
  }
}
