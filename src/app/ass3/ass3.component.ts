import { Component, OnInit, ViewEncapsulation } from '@angular/core';
/*This service is not provided in app.module in @Ngmodule*/
import { CricketerAss3Service } from '../services/cricketer-ass3.service';
/*This service is already provided in app.module in @Ngmodule and not needed to proivide here*/
import { CricketerDropDownAss3Service } from '../services/cricketer-drop-down-ass3.service';
import { ICricketList } from '../interface/cricketer-list';
import { IPlayerType } from '../interface/player-type';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-ass3',
  templateUrl: './ass3.component.html',
  styleUrls: ['../ass1/ass1.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  /*CricketerDropDownAss3Service is provided in @ngmodule*/
  providers: [CricketerAss3Service]
})
export class Ass3Component implements OnInit {

  cricketersArray: ICricketList[] = []
  playerType: IPlayerType[] = [];
  firstName: string;
  lastName: string;
  favShot: string;
  batmanBowler: string;
  cricketerDetail: ICricketList;

  constructor(private router:Router,
              private _cricketService: CricketerAss3Service, 
              private _cricketerDropDown: CricketerDropDownAss3Service) { }
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
