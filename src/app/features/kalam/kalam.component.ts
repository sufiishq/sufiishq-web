import {Component, OnInit} from '@angular/core';
import { debounce } from 'lodash';
import {KalamService} from "./kalam.service";
import {ThemeService} from "../../core/services/theme.service";
import {TrackService} from "../../core/components/audio-player/track.service";
import {AudioService} from "../../core/components/audio-player/audio.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'si-feature-kalam',
  templateUrl: './kalam.component.html',
  styleUrls: ['./kalam.component.css']
})
export class KalamComponent implements OnInit {

  showSpinner = true
  pageInfo = {
    hasPrevious: false,
    hasNext: false,
    previous: 1,
    next: 2,
    keyword: ''
  }

  kalams: any = []

  constructor(private kalamService: KalamService, public themeService: ThemeService, public trackService: TrackService, public audioService: AudioService, private spinnerService: NgxSpinnerService) {
    this.search = debounce(this.search, 500)
  }

  ngOnInit(): void {
    this.getKalams('', 1)
  }

  getKalams(keyword: string, offset: number, pageSize: number = 20) {
    this.showSpinner = true
    this.spinnerService.show('sp-ball-fussion')
    this.kalamService.getKalams(keyword, offset, pageSize).then((res: any) => {
      this.spinnerService.hide('sp-ball-fussion')
      this.showSpinner = false
      this.kalams = res.data
      this.pageInfo.hasPrevious = res.has_previous
      this.pageInfo.hasNext = res.has_next
      this.pageInfo.previous = res.previous
      this.pageInfo.next = res.next
    })
  }

  search(evt: any) {
    let value = evt.target.value
    if (value !== this.pageInfo.keyword) {
      this.pageInfo.keyword = evt.target.value
      this.getKalams(evt.target.value, 1)
    }
  }

  gotoPrevious() {
    this.getKalams(this.pageInfo.keyword, this.pageInfo.previous)
  }

  gotoNext() {
    this.getKalams(this.pageInfo.keyword, this.pageInfo.next)
  }

  selectKalam(kalam: any) {
    this.trackService.activeTrack = kalam
    this.audioService.setAudio(kalam.src)
    this.audioService.seekAudio(kalam.start_from)
  }
}
