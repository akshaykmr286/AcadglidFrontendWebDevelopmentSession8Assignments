import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CricketerService } from '../services/cricketer.service';
import { CriketerDropDownService } from '../services/criketer-drop-down.service';
import { ICricketList } from '../interface/cricketer-list';
import { IPlayerType } from '../interface/player-type';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-ass1',
  templateUrl: './ass1.component.html',
  styleUrls: ['./ass1.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [CricketerService,CriketerDropDownService]
})
export class Ass1Component implements OnInit {

  cricketersArray: ICricketList[] = []
  playerType: IPlayerType[] = [];
  firstName: string;
  lastName: string;
  favShot: string;
  batmanBowler: string;
  cricketerDetail: ICricketList;

  constructor(private router:Router,private _cricketService: CricketerService, private _cricketerDropDown: CriketerDropDownService) { }
  
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
