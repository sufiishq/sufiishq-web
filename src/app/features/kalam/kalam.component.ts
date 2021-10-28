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
  backgrounds = [
      '#ff0000', '#ff4800', '#ff8400', '#ffb700'
    , '#ffdd00', '#e6ff00', '#b3ff00', '#59ff00'
    , '#00ff2a', '#00ff90', '#00ffd9', '#00f7ff'
    , '#00ccff', '#0099ff', '#0073ff', '#0048ff'
    , '#000dff', '#4400ff', '#5900ff', '#7700ff'
    , '#9500ff', '#c800ff', '#ff00f2', '#ff0077']

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
      for(let i = 0; i < this.kalams.length; i++) {
        let firstColor = this.backgrounds[Math.floor(Math.random() * this.backgrounds.length)]
        let secondColor = this.backgrounds[Math.floor(Math.random() * this.backgrounds.length)]
        this.kalams[i].background = `linear-gradient(135deg, ${firstColor}, ${secondColor}`
      }
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
